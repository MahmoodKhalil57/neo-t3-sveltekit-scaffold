import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/server/prismaClient'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 👈 simulate an expensive operation
  const message = `Hello from Backend @ ${new Date().toLocaleTimeString()}`
  const page = await prisma.example.findMany({
    orderBy: { createdAt: "desc" },
    take: 1,
  });
  console.log(page)
	return json([message, page?.[0]?.name]);
}

export const POST = (async (event) => {
  const body = await event.request.text();
  await prisma.example.create({
    data: {
      name: body
    },
  });
 
  return json({
    // get a specific field's value
    isSuccessful: true
  });
}) satisfies RequestHandler;