<script lang="ts">
	import ApiShowcase from '$lib/deleteThisFolder/ApiShowcase.svelte';
	import CssShowcase from '$lib/deleteThisFolder/CssShowcase.svelte';
</script>

<div class="outer">
	<div class="titleText">
		<h1>You landed in</h1>
		<h1>
			<span>T3</span>
			<span class="svelteFont">SVELTEKIT</span>
		</h1>
	</div>
	<div class="inner">
		<ApiShowcase />
		<CssShowcase />
	</div>
</div>

<style>
	.outer {
		padding-bottom: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 2rem 0px;
	}
	.titleText {
		font-size: 3rem;
		line-height: 2rem;
	}
	.svelteFont {
		font-family: 'Overpass', sans-serif;
		font-size: 5rem;
	}

	.inner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		gap: 5rem 0px;
	}
</style>
