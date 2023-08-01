/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import apiRouter from './api-router';
import { Env } from './types';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		request.headers.forEach((v, k) => console.log(k, v));
		// console all log request.cf
		Object.keys(request.cf || {}).forEach((k) => console.log(k, (request.cf || {})[k]));

		if (url.pathname.startsWith('/api/')) {
			return apiRouter.handle(request, env, ctx);
		}

		// 404 error default
		return new Response('Not Found.', { status: 404 });
	},
};
