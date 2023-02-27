import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/server/prismaClient'

export const GET = (async (event) => {
  const token = event.cookies.get("next-auth.session-token")
  let userExampleName = ''
  const session = await prisma.session.findFirst({
    where: {
      sessionToken: token
    }
  })
  const message = `Hello from Backend @ ${new Date().toLocaleTimeString()}`

  if(session?.userId){
  const userExample = await prisma.example.findFirst({
    where: { userId: session.userId },
  });

  userExampleName = userExample?.name ?? "set name to test database"
}
	return json([message, userExampleName]);
}) satisfies RequestHandler;

export const POST = (async (event) => {
  let isSuccessful = false
  const body = await event.request.text();

  const token = event.cookies.get("next-auth.session-token")
  const session = await prisma.session.findFirst({
    where: {
      sessionToken: token
    }
  })
  if(session?.userId){
    await prisma.example.upsert({
      where: { userId: session?.userId },
      // If the user exists, increment `age` by 1
      update: { name: body },
      // Otherwise create a whole new user object
      create: {
        name: body,
        userId: session.userId
      },
    });
    isSuccessful = true
  } 


  return json({
    isSuccessful
  });
}) satisfies RequestHandler;