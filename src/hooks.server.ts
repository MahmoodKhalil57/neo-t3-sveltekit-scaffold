import { createContext } from '$lib/server/context';
import { router } from '$lib/server/root';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

export const handle: Handle = createTRPCHandle({ router, createContext });
