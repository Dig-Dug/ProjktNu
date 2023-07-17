<script>
	import { beforeUpdate, afterUpdate } from 'svelte';
	let message = '';

	let open = false;
	function display() {
		//https://bobbyhadz.com/blog/javascript-clear-input-field-after-submit

		open = true;

		return;
	}
	function deleteThis() {
		message = '';
		open = false;
	}

	let src = 'easter.jpg';
	let pic = true;
</script>

r
<!-- <svelte:head>
	<Todo ink href="./todo.png" />
</svelte:head> -->
<h1>To-Do List 🗿</h1>
<img class:pic {src} alt="w" />
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
		<p style="cursor: pointer;" on:click={deleteThis}>🩻</p>
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
	.pic {
		height: 1114px;
		width: 1934px;
		position: absolute;
		z-index: -1;
		top: 0px;
		bottom: 95px;
	}
</style>
