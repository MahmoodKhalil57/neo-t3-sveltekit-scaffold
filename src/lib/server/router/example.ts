import type { Context } from '$lib/server/context';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

export const exampleRouter = t.router({
  testTrpc: t.procedure.query(async () => {
		return true;
	}),

	greeting: t.procedure.input(z.object({ })).query(async ({ ctx, input }) => {
		await new Promise((resolve) => setTimeout(resolve, 3000)); // 👈 simulate an expensive operation
		return [
      `Hello from tRPC @ ${new Date().toLocaleTimeString()}`,
      ctx?.session?.user?.name
    ]}),
});

export type exampleRouter = typeof exampleRouter;
