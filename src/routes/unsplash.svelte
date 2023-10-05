<script>
	//https://dig-dug.github.io/funprjkts.github.io/unsplash/index.html
	import { onMount } from 'svelte';

	let rr = false;

	// @ts-ignore
	const lets = (event) => {
		if ((event = lets)) {
			console.log(rr, '🍥');
		}
	};
	onMount(() => {
		window.addEventListener('click', lets);
		//go();
		return () => window.removeEventListener('click', lets);
	});

	//For Random images
	let src = '...';
	let API = 'https://picsum.photos/300';
	fetch(API).then((res) => res.url);
	async function loadT() {
		const res = await fetch(API);
		src = await res.url;
	}
	loadT();
	//const actually :/
	//For Dogs Images
	let fetchImage = (async () => {
		let response = await fetch('https://dog.ceo/api/breeds/image/random');

		return await response.json();
	})();

	/**Serious Apis for web scrapping^
	 * https://picsum.photos/
	 * https://serpapi.com/google-reverse-image
	 * https://www.npmjs.com/package/serpapi
	 */
	let src1 = '...';
	let id = '';
	//let API1 = 'https://picsum.photos/300';
	//let API1 = `https://picsum.photos/${id}`;
	fetch(API).then((res) => res.url);
	async function loadTT() {
		if (id == 'Dog') {
			id = '237';
		}

		API = `https://picsum.photos/id/${id}/300`;
		const res = await fetch(API);
		src1 = await res.url;
	}
	loadTT();

	function go() {
		rr = true;
		loadT();
		loadTT();
	}
</script>

<div class="center">
	<h1>Unsplash (the poor version :D)</h1>
	<p>write number between 0 & 1300 aprox</p>
	<p>or only the string "Dog"</p>
	<input bind:value={id} type="text" name="search" id="" placeholder="pic code" />
	<button on:click={go}>go!</button>
	<p>Write id {id} number of picture and go!</p>

	<br />
	<!-- {#if rr} -->
	{#await fetchImage}
		<p>...waiting</p>
	{:then data}
		<!-- <img {src} alt="Dog image" />
		<p /> -->
		<img src={src1} alt="" />
		<p />
	{:catch error}
		<p>An error occurred!</p>
	{/await}
	<a href="/">back</a>
</div>

<style>
	.center {
		position: absolute;
		top: 170px;
		left: 582px;
		background-color: aquamarine;
	}
	a {
		background-color: deeppink;
	}
	img {
		border-radius: 24px;
	}
</style>
