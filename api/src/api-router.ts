import { Router } from 'itty-router';
import { Env } from './types';

// now let's create a router (note the lack of "new")
const router = Router();

router.get('/api/test/get-set', async (request, env: Env, ctx: ExecutionContext) => {
	const count = Number.parseInt((await env.KV.get('test', 'text')) || '0');
	env.KV.put('test', (count + 1).toString());
	console.log('x-forwarded-for', request.headers.get('x-forwarded-for'));
	// log the request url where from
	request.headers.forEach((k, v) => console.log(k, v));

	// return json
	return new Response(JSON.stringify({ count }), {
		headers: {
			'content-type': 'application/json;charset=UTF-8',
		},
	});
});

router.get('/api/test/get-set.svg', async (request, env: Env, ctx: ExecutionContext) => {
	const svg =
		'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baby"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>';

	return new Response(svg, {
		headers: {
			'content-type': 'image/svg+xml;charset=UTF-8',
		},
	});
});

// GET collection index
router.get('/api/todos', () => new Response('Todos Index!'));

// GET item
router.get('/api/todos/:id', ({ params }) => new Response(`Todo #${params.id}`));

// POST to the collection (we'll use async here)
router.post('/api/todos', async (request) => {
	const content = await request.json();

	return new Response('Creating Todo: ' + JSON.stringify(content));
});

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }));

export default router;
