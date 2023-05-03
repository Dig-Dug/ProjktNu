<script>
	//Remove First and Last Character Part Two
	import { onMount } from 'svelte';
	let re = 0;

	function gen() {
		let r = Math.floor(Math.random() * 10) + 3;
		for (let i = 0; i < 10; i++) {
			re = r;
			console.log(r);
			onMount(() => {
				let re = document.createElement('p');
				//re.innerText = `${re}`;
				document.body.appendChild(re);
			});
			return;
		}
	}
</script>

<p>remove first and last element of array</p>
<button on:click={gen}>elements generator</button>
{#if re}
	<p bind:this={re} />
{/if}
