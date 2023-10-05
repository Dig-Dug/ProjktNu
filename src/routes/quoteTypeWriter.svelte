<script>
	import { onMount } from 'svelte';

	/* 	onMount(async () => {
		const res = await fetch();
		await res.json();
	}); */
	onMount(async () => {
		//fetchImage;
	});

	let fetchImage = (async () => {
		let response = await fetch('https://type.fit/api/quotes');

		let r1 = 'text';
		let r = 'author';
		return await response.json();
	})();
</script>

<h1>Hey Hey Hey 🍐 TODO</h1>

{#await fetchImage}
	<p>...waiting</p>
{:then res}
	<!-- <img {src} alt="Dog image" />
		<p /> -->
	<p>{JSON.stringify(res)}</p>
	<p />
{:catch error}
	<p>An error occurred!</p>
{/await}

<a href="/">back</a>
