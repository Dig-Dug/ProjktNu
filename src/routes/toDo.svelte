<script>
	let message = '';
	let open = false;
	function display() {
		open = true;
		return;
	}
	function deleteThis() {
		message = '';
		open = false;
	}
</script>

<!-- <svelte:head>
	<Todo ink href="./todo.png" />
</svelte:head> -->
<h1>To-Do List 🗿</h1>
<div class="au">
	<textarea name="" id="" cols="33" rows="1" bind:value={message} />
	<button on:click={display}>submit</button>
	<br />

	<div class="con" />

	<br />
</div>
{#if open}
	<div class="layer">
		{message}
		{@html message}
		<input type="checkbox" />
	</div>
{/if}
<a class="s" href="/">back</a>

<style>
	.au,
	.s {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.con {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: darkorange;
	}
	.layer {
		width: 120px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: aqua;
	}
</style>
