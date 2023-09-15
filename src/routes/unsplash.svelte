<script>
	//https://dig-dug.github.io/funprjkts.github.io/unsplash/index.html
	import { onMount } from 'svelte';

	onMount(() => {
		const myImage = document.querySelector('img');
	});
	function go() {
		fetch('https://any-anime.p.rapidapi.com/anime/img', {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'any-anime.p.rapidapi.com'
			}
		})
			.then((response) => response.blob())
			.then((data) => {
				// Do something with the image data
			})
			.catch((error) => console.error(error));
	}
</script>

<div class="center">
	<h1>Unsplash</h1>
	<input type="" name="search" id="" />
	<button on:click={go}>go!</button>
	<br />

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
