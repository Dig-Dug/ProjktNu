<script context="module">
	export const prerender = true;
</script>

<script>
	//import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Svelte Project Ideas</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Svelte Project Ideas
		<!-- 		<span class="welcome">
				<picture>
					<source srcset="svelte-welcome.webp" type="image/webp" />
					<img src="svelte-welcome.png" alt="Welcome" />
				</picture>
			</span>

			to your new<br />SvelteKit app
	-->
	</h1>
	<!-- <Counter /> -->
	<div class="parent">
		<div><a href="/changeColor">changeColor</a></div>
		<div><a href="/gradientPicker">gradientPicker</a></div>
		<div><a href="/randomQuote">Random quote generator</a></div>
		<div><a href="/theMessage">theMessage</a></div>
		<div><a href="/imageCarousel">image carousel</a></div>
		<div><a href="/theCounter">the counter</a></div>
		<div><a href="/digitalClock">Digital Clock</a></div>
		<div><a href="/calculator">Calculator</a></div>
		<div><a href="/login">Login User</a></div>
		<div><a href="/flashcard">Flashcards</a></div>
	</div>
</section>

<style>
	.parent {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 42px;
		grid-row-gap: 17px;
	}
	a:hover {
		color: orange;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	/* 	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	} */

	/* .welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
