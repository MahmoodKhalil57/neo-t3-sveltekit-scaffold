<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';

	let message = 'press the button to load data';
	let name = '';
	let inputName = '';
	let loading = false;

	const setName = async () => {
		loading = true;
		await fetch('/api/prisma', { method: 'POST', body: inputName });
		[message, name] = await (await fetch('/api/prisma')).json();
		loading = false;
	};

	const getGreeting = async () => {
		loading = true;
		[message, name] = await (await fetch('/api/prisma')).json();
		loading = false;
	};

	onMount(() => {
		getGreeting();
	});
</script>

<div class="outer">
	{#if message}
		<div class="connected">API Connected Successfully</div>
		{#if loading}
			<div class="loading">Loading.... (Three Second Delay)</div>
		{:else}
			<div class="APIResponse">
				{message}
				<br />
				{#if name}
					Name:{name}
				{:else}
					<span>Set name to test database</span>
				{/if}
			</div>
		{/if}
		<div>
			<input bind:value={inputName} />
			<button on:click={setName}>Set Name</button>
		</div>
	{:else}
		<div class="notConnected">API not Connected</div>
	{/if}
	<div class="authJs">
		{#if $page.data.session}
			{#if $page.data.session.user?.image}
				<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
			{/if}
			<button on:click={() => signOut()} class="button">Sign out</button>
		{:else}
			Sign In to be able to set and view name
			<button on:click={() => signIn('google')}>Sign In with Google</button>
		{/if}
	</div>
</div>

<style>
	.outer {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		align-items: center;
		justify-content: center;
		width: 800px;
		min-height: 10rem;
		background: rgb(223, 225, 235);
		border-radius: 50px;
		box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
			rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
			rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
			rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
			rgba(0, 0, 0, 0.09) 0px 32px 16px;
	}
	.notConnected {
		color: rgb(184, 11, 11);
		font-size: x-large;
		font-weight: 800;
	}

	.connected {
		color: rgb(37, 184, 11);
		font-size: x-large;
		font-weight: 800;
	}

	.APIResponse {
		color: rgb(37, 184, 11);
		font-size: 1.7rem;
		font-weight: 1000;
		text-shadow: 0 0 3px rgb(255, 255, 255), 0 0 5px rgb(113, 255, 146);
	}

	.loading {
		color: rgb(11, 23, 184);
		font-size: x-large;
		font-weight: 800;
	}
</style>
