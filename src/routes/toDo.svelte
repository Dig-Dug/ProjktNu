<script>
	import { beforeUpdate, afterUpdate } from 'svelte';
	let message = '';
	let inputField = '';
	let newFieldValue = '';
	let open = false;
	let a = [];

	//https://bobbyhadz.com/blog/javascript-clear-input-field-after-submit

	//a.push(newFieldValue);

	function deleteThis() {
		message = '';
		open = false;
	}

	let src = 'easter.jpg';
	let pic = true;
	let newM = '';
	const onInput = (event) => {
		if (event.key !== 'Enter') return;
		console.log(newFieldValue);
		//a.push(inputField);
		inputField.value = '';
		//display();
		open = true;

		//return;
	};
	function lol() {
		console.log('Eeeeee');
	}
</script>

r
<!-- <svelte:head>
	<Todo ink href="./todo.png" />
</svelte:head> -->
<h1>To-Do List 🗿</h1>
<img class:pic {src} alt="w" />
<div class="au">
	<input
		name="inputField1"
		type="text"
		placeholder="type"
		bind:this={inputField}
		on:keydown={onInput}
		bind:value={newFieldValue}
	/>

	<div class="con" />

	<br />
</div>
<!-- {#each newFieldValue as i}
			<p>{newFieldValue}</p>
		{/each} -->
{#if open}
	<div class="layer">
		<p>{newFieldValue}</p>
		{#each a as i}
			<p>{inputField}</p>
		{/each}
		<input type="checkbox" />
		<p style="cursor: pointer;" on:click={deleteThis}>🩻</p>
	</div>
{/if}
<a class="s" href="/" style="color: red;">back</a>

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
