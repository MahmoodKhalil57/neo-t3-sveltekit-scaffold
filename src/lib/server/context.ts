import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';
import type { LayoutData } from '../../routes/$types';
export let data: LayoutData;

// we're not using the event parameter is this example,
// hence the eslint-disable rule
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createContext(event: RequestEvent) {
	console.log(await event.locals.getSession())
	return {
		example: "Test Context"
	};
}

export type Context = inferAsyncReturnType<typeof createContext>;
