<script>
	//Remove First and Last Character Part Two
	import { onMount } from 'svelte';
	let re = 0;
	let r = 10;

	let ree = document.createElement('p');
	function gen() {
		let r = Math.floor(Math.random() * 10) + 3;
		for (let i = 0; i < 10; i++) {
			re = r;
			let rrr = parseInt(i);

			onMount(() => {
				let ree = document.createElement('p');
				//re.innerText = `${re}`;
				ree.innerHTML = 'ee';

				document.body.appendChild(ree);
				console.log(ree, re);
				//listNode.appendChild(re);
				return ree;
			});
			//console.log(r, rrr);
			//return;
		}
	}
	/* function gen() {
		return (re = 10);
	} */
	//document.body.appendChild(ree);
</script>

<p>remove first and last element of array</p>
<button on:click={gen}>elements generator</button>
{#if re}
	<p bind:this={re}>{re}</p>
	<!--<p>{re} * {re}</p>-->
	<p>{ree} *= {re}</p>
{/if}
