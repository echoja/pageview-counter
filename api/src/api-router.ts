import { Router } from 'itty-router';
import { z } from 'zod';
import { Env } from './types';
import { getStringWidth } from './verdanaWidthMap';

// now let's create a router (note the lack of "new")
const router = Router();

const counterQueries = z.object({
	size: z.coerce.number().optional(),
	color: z.string().optional(),
	url: z.string(),
});

router.get('/api/counter.svg', async (request, env: Env, ctx: ExecutionContext) => {
	const queryValidation = counterQueries.safeParse(request.query);
	if (!queryValidation.success) {
		return new Response('Invalid query', { status: 400 });
	}
	const { url, color = 'black', size = 12 } = queryValidation.data;

	const key = url || request.referrer;
	const height = Math.ceil(size * 1.33);
	const count = (await env.KV.get(key, 'text')) || '0';
	const width = getStringWidth({ str: count, size });
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}">
<style> text { line-height: 1; fill: ${color}; } </style>
<text font-family="Verdana,DejaVu Sans,Geneva,sans-serif" font-size="${size}" x="0" y="${size}">${count}</text>
</svg>`;

	await env.KV.put(key, (Number.parseInt(count) + 1).toString());

	return new Response(svg, {
		headers: {
			'content-type': 'image/svg+xml;charset=UTF-8',
			'cache-control': 'no-store',
		},
	});
});

// POST to the collection (we'll use async here)
router.post('/api/todos', async (request) => {
	const content = await request.json();

	return new Response('Creating Todo: ' + JSON.stringify(content));
});

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }));

export default router;
