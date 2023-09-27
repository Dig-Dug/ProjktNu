<script>
	//https://dig-dug.github.io/funprjkts.github.io/unsplash/index.html
	import { onMount } from 'svelte';

	/* 
	onMount(() => {
		const myImage = document.querySelector('img');
	}); */

	onMount(async () => {
		//	fetchImage;

		console.log('on');
	});

	let rr = false;

	//const actually :/

	let fetchImage = (async () => {
		let response = await fetch('https://dog.ceo/api/breeds/image/random');

		return await response.json();
	})();

	function go() {
		rr = true;
	}
</script>

<div class="center">
	<h1>Unsplash</h1>
	<input type="" name="search" id="" />
	<!-- <button on:click={go}>go!</button> -->
	<button on:click={go}>go!</button>
	<br />
	{#if rr}
		{#await fetchImage}
			<p>...waiting</p>
		{:then data}
			<img src={data.message} alt="Dog image" />
		{:catch error}
			<p>An error occurred!</p>
		{/await}
	{/if}

	<a href="/">back</a>
</div>

<style>
	.center {
		position: absolute;
		top: 50%;
		left: 50%;
		background-color: aquamarine;
	}
	a {
		background-color: deeppink;
	}
</style>
