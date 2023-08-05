import { Router } from 'itty-router';
import { Env } from './types';

// now let's create a router (note the lack of "new")
const router = Router();

router.get('/api/test/get-set', async (request, env: Env, ctx: ExecutionContext) => {
	
	const count = Number.parseInt((await env.KV.get('test', 'text')) || '0');
	env.KV.put('test', (count + 1).toString());

	// return json
	return new Response(JSON.stringify({ count }), {
		headers: {
			'content-type': 'application/json;charset=UTF-8',
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
