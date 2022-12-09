<script>
	import { page } from '$app/stores';
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '../quote.css';
</script>

<!-- show header only in index -->
{#if $page.url.pathname === '/'}
	<!-- <div class="loco"> -->
	<Header />
	<slot />
{:else}
	<slot />
{/if}
<!-- <main>
	<slot />
</main> -->

<!-- <footer>
	<p>visit <a href="https://kit.svelte.dev">kit.dsvelte.dev</a> to learn SvelteKit</p> 
</footer> -->
<style>
	main {
		cursor: pointer;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.loco {
		background-color: blueviolet;
	}
	/* 	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	} */

	/* 	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	} */
</style>
