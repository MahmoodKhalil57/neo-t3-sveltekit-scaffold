import type { trpcServer } from '$lib/server/root';
import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';

let browserClient: ReturnType<typeof createTRPCClient<trpcServer>>;

export function trpc(init?: TRPCClientInit) {
	const client = createTRPCClient<trpcServer>({ init });
	if (typeof window === 'undefined') return client;
	if (!browserClient) browserClient = client;
	return browserClient;
}
