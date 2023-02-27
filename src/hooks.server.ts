import { sequence } from "@sveltejs/kit/hooks";
import { createContext } from '$lib/server/context';
import { router } from '$lib/server/root';
import { createTRPCHandle } from 'trpc-sveltekit';
import type { Handle } from '@sveltejs/kit';
import { SvelteKitAuth } from "@auth/sveltekit"
import GoogleProvider from "@auth/core/providers/google"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// Not sure why I cant get types on env
import { GOOGLE_ID, GOOGLE_SECRET } from "$env/static/private"

const first: Handle = SvelteKitAuth({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
 providers: [GoogleProvider({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET })],
})

const second: Handle = createTRPCHandle({ router, createContext });

export const handle = sequence(first, second)