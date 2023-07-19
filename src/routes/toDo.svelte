<script>
	import { beforeUpdate, afterUpdate } from 'svelte';
	import List from './todos/list.svelte';
	import a from './todos/list.svelte';
	let b = [];
	export let open = false;

	export let inputField = '';
	export let newFieldValue = '';

	//https://bobbyhadz.com/blog/javascript-clear-input-field-after-submit
	let p = () => {
		b.push(newFieldValue);
		b.push(a);
		console.log(b);
	};
	//a.push(newFieldValue);
	let onInput = (event) => {
		if (event.key !== 'Enter') return;

		//a.push(inputField);
		inputField.value = '';
		//display();
		open = true;
		//a.push(inputField);
		p();
		console.log(newFieldValue);
		return;
	};
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
{#if open}<List a={newFieldValue} />{/if}

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
	.pic {
		height: 1114px;
		width: 1934px;
		position: absolute;
		z-index: -1;
		top: 0px;
		bottom: 95px;
	}
</style>
