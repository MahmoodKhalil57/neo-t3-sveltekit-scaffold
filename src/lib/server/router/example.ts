import type { Context } from '$lib/server/context';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

let name = "Enter your name"

export const exampleRouter = t.router({
	greeting: t.procedure.input(z.object({  })).query(async ({ ctx }) => {
		await new Promise((resolve) => setTimeout(resolve, 3000)); // 👈 simulate an expensive operation
		return `Hello from tRPC @ ${new Date().toLocaleTimeString()} / ${ctx.example} \n Name: ${name}`;
	}),

  setName: t.procedure.input(z.object({ name: z.string().max(10) })).mutation(async ({ ctx, input }) => {
		await new Promise((resolve) => setTimeout(resolve, 3000)); // 👈 simulate an expensive operation
    name = input.name
	})
});

export type exampleRouter = typeof exampleRouter;
