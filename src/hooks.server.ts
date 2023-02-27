import type { Handle } from '@sveltejs/kit';
import { SvelteKitAuth } from "@auth/sveltekit"
import GoogleProvider from "@auth/core/providers/google"
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '$lib/server/prismaClient';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// Not sure why I cant get types on env
import { GOOGLE_ID, GOOGLE_SECRET } from "$env/static/private"

export const handle: Handle = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
 providers: [GoogleProvider({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET })],
})
