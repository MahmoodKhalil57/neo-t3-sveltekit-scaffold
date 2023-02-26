import type { Context } from '$lib/server/context';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

export const exampleRouter = t.router({
	greeting: t.procedure.input(z.object({ name: z.string() })).query(async ({ ctx, input }) => {
		await new Promise((resolve) => setTimeout(resolve, 3000)); // 👈 simulate an expensive operation
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()} / ${ctx.example} ${input.name}`;
	})
});

export type exampleRouter = typeof exampleRouter;
