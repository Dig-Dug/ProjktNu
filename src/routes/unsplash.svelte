<script>
	//https://dig-dug.github.io/funprjkts.github.io/unsplash/index.html
	import { onMount } from 'svelte';

	//	import Nested from './todos/unsplash/Nested.svelte';
	/* 
	onMount(() => {
		const myImage = document.querySelector('img');
	}); */

	/* onMount(async () => {
		//	fetchImage;

		console.log('on');
	});
 */
	let rr = false;
	let rrr = false;
	// @ts-ignore
	const lets = (event) => {
		if ((event = lets)) {
			//rrr = true;
			//go();
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

	////////////
	let src1 = '...';
	let API1 = 'https://picsum.photos/300';
	fetch(API1).then((res) => res.url);
	async function loadTT() {
		const res = await fetch(API1);
		src1 = await res.url;
	}
	loadTT();
	//async function fetchImage() {}

	function go() {
		rr = true;
		loadT();
		loadTT();
		/* setTimeout(() => {
			return (rr = false);
		}, 5000); */
	}
	/* 	function onClose() {
		rr = false;
	}
	function onClickD(e) {
		console.log('kokpeofkwopekfopwekp');
		onClose();
	} */
</script>

<div class="center">
	<h1>Unsplash</h1>
	<input type="text" name="search" id="" />

	<button on:click={go}>go!</button>

	<br />
	<!-- {#if rr} -->
	{#await fetchImage}
		<p>...waiting</p>
	{:then data}
		<!-- {#each data as src} -->
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img {src} alt="Dog image" />
		<p />
		<img src={src1} alt="Doglkimage" />
		<p />
		<!-- 	<img src={data.message} alt="Dog image" /> -->

		<!-- {/each} -->
	{:catch error}
		<p>An error occurred!</p>
	{/await}

	<!-- 	<Nested {onClose} /> -->
	<!-- {/if} -->
	<!-- {#if rrr}
		<h1>ÖÖÖÖÖÖÖÖÖÖÖÖÖ</h1>
	{/if} -->
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
