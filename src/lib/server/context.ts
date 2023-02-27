import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';
import type { LayoutData } from '../../routes/$types';
export let data: LayoutData;

// we're not using the event parameter is this example,
// hence the eslint-disable rule
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createContext(event: RequestEvent) {
	const session = await event.locals.getSession()
	const sessionToken = event.cookies.get("next-auth.session-token")
	return {
		session, sessionToken
	};
}

export type Context = inferAsyncReturnType<typeof createContext>;
