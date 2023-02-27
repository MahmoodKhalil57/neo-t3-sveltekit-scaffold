<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<div class="outer">
	{#if $page.data.session}
		{#if $page.data.session.user?.image}
			<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user?.name ?? 'User'}</strong>
		</span>
		<button on:click={() => signOut()} class="button">Sign out</button>
	{:else}
		<button on:click={() => signIn('google')}>Sign In with Google</button>
	{/if}
</div>

<style>
	.outer {
		display: flex;
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
	.avatar {
		width: 50px;
		height: 50px;
		border-radius: 25px;
		background-size: contain;
	}
	.notConnected {
		color: rgb(184, 11, 11);
		font-size: x-large;
		font-weight: 800;
	}
</style>
