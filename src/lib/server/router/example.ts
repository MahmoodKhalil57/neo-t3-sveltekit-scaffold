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

    let userExampleName = ''
    const token = ctx.sessionToken

    const session = await prisma.session.findFirst({
      where: {
        sessionToken: token
      }
    })
  
    if(session?.userId){
      const userExample = await prisma.example.findFirst({
        where: { userId: session.userId },
      });
    
      userExampleName = userExample?.name ?? "set name to test database"
    }
		return [
      `Hello from tRPC @ ${new Date().toLocaleTimeString()}`,
      userExampleName
    ]
  }),

  setName: t.procedure.input(z.object({ name: z.string().max(10) })).mutation(async ({ ctx, input }) => {

    let isSuccessful = false
    const token = ctx.sessionToken
    const session = await prisma.session.findFirst({
      where: {
        sessionToken: token
      }
    })
    if(session?.userId){
      await prisma.example.upsert({
        where: { userId: session?.userId },
        // If the user exists, increment `age` by 1
        update: { name: input.name },
        // Otherwise create a whole new user object
        create: {
          name: input.name,
          userId: session.userId
        },
      });
      isSuccessful = true
    } 

   return isSuccessful
	}),
});

export type exampleRouter = typeof exampleRouter;
