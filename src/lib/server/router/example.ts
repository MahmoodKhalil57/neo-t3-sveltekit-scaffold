import type { Context } from '$lib/server/context';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import prisma from '$lib/server/prismaClient'

export const t = initTRPC.context<Context>().create();


export const exampleRouter = t.router({
  testTrpc: t.procedure.query(async () => {
		return true;
	}),

	greeting: t.procedure.input(z.object({ })).query(async ({ ctx, input }) => {
    const page = await prisma.example.findMany({
      orderBy: { createdAt: "desc" },
      take: 1,
    });
    const name = page?.[0]?.name
		return [
      `Hello from tRPC @ ${new Date().toLocaleTimeString()} / ${ctx.example}`,
      name
    ]}),

  setName: t.procedure.input(z.object({ name: z.string().max(10) })).mutation(async ({ ctx, input }) => {
    await prisma.example.create({
      data: {
        name: input.name
      },
    });
	}),
});

export type exampleRouter = typeof exampleRouter;
