<script>
	import newFieldValue from '../toDo.svelte';
	import open from '../toDo.svelte';
	//import a from '../toDo.svelte';
	export let a = [newFieldValue];
	function deleteThis() {
		open = false;
		console.log('🩻');
	}
	//let b = [a];
</script>

{#each a as c}
	<div class="layer">
		<p>list is {a}</p>

		<input type="checkbox" />
		<p style="cursor: pointer;" on:click={deleteThis}>🩻</p>
	</div>
{/each}

<style>
	.layer {
		width: 120px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: aqua;
	}
</style>
