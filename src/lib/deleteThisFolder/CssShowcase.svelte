<div class="outer">
	<div class="notConnected !hidden">No Css Framework Connected</div>

	<div class="Connected text-4xl text-green-600 font-1000 !flex flex-row gap-3">
		<div class="tooltip tooltip-open" data-tip="+DaisyUi">
			<div class="i-material-symbols-check-circle-rounded" />
			UnoCss Connected Successfully
			<div class="i-noto-party-popper" />
		</div>
	</div>
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
	.notConnected {
		color: rgb(184, 11, 11);
		font-size: x-large;
		font-weight: 800;
	}
	.Connected {
		display: none;
	}
</style>
