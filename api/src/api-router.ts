import { Router } from 'itty-router';
import { Env } from './types';
import { getStringWidth } from './verdanaWidthMap';

// now let's create a router (note the lack of "new")
const router = Router();

router.get('/api/counter.svg', async (request, env: Env, ctx: ExecutionContext) => {
	console.log('HO!!!!!', request.referrer, request.url, request.method, request.headers.get('x-forwarded-for'));
	const fontSize = parseInt(request.query['size']?.toString() || '12') || 12;
	const color = request.query['color']?.toString() || 'black';
	const key = request.referrer;
	const height = Math.ceil(fontSize * 1.33);
	const count = (await env.KV.get(key, 'text')) || '0';
	const width = getStringWidth({ str: count, fontSize });
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}">
<style> text { line-height: 1; fill: ${color}; } </style>
<text font-family="Verdana,DejaVu Sans,Geneva,sans-serif" font-size="${fontSize}" x="0" y="${fontSize}">${count}</text>
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
