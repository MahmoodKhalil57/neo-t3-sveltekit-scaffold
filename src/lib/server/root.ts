import type { Context } from '$lib/server/context';
import { initTRPC } from '@trpc/server';
import { exampleRouter } from './router/example';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
	example: exampleRouter
});

export type trpcServer = typeof router;
