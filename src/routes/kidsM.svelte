<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		//swapEm();
		sum();
		console.log('on');
	});
	//@ts-ignore
	let num1, num2;
	//real answer variable
	let res = 0;

	let sumBool = false;
	let minusBool = false;
	let multBool = false;
	let divBool = false;
	let sign = '+'; //this will change depending on the user
	//sound variables
	let audio;
	let audio1;

	let ans1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
	let ans2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

	function swapEm() {
		console.log('adddda');
		ans1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
		ans2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
		//If generated numbers are equal
		if (ans1 === ans2) {
			console.log('NOOOOOOOOOOOOO', ans1, ans2);
			ans2 = Math.floor(Math.random() * (10 + 1 - 1)) + 3;
		}
		num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
		num2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

		return;
	}
	function swithEm(min, max) {
		min = Math.ceil(0);
		max = Math.floor(3);
		i = Math.floor(Math.random() * (max - min) + min);
		console.log(i, 'Swixh');
		return i;
	}
	function notCorrect() {
		audio1.play();
	}
	function correct() {
		audio.play();
	}
	//let options = [ans1, ans2, res];
	//let options = [];
	function sum() {
		swapEm();
		//@ts-ignore
		res = num1 + num2;

		console.log(res);
		swithEm();
		sumBool = true;
		//OTHER OPERATIONS
		minusBool = false;
		multBool = false;
		divBool = false;

		return res;
	}
	function minus() {
		swapEm();
		//@ts-ignore
		res = Math.abs(num1 - num2);

		console.log(res);
		swithEm();
		minusBool = true;
		//OTHER OPERATIONS
		sumBool = false;
		multBool = false;
		divBool = false;
		return res;
	}
	function mult() {
		swapEm();
		//@ts-ignore
		res = num1 * num2;

		console.log(res);
		swithEm();
		multBool = true;
		//OTHER OPERATIONS
		sumBool = false;
		minusBool = false;
		divBool = false;
		return res;
	}
	function div() {
		swapEm();
		//@ts-ignore
		res = Math.trunc(num1 / num2);

		console.log(res);
		swithEm();
		divBool = true;
		//OTHER OPERATIONS
		sumBool = false;
		multBool = false;
		minusBool = false;
		return res;
	}
	let i = 0;
</script>

<svelte:window on:load={sum} />

<h1>Math-- for kids 🧮</h1>
<a class="s" href="/" style="color: red; margin-left:23px; margin-right:23px">back</a>
<div class="table" style="font-size: 74px">
	<p>{num1}</p>
	{#if sumBool == true}
		<p>{sign}</p>
	{:else if minusBool == true}
		<p>{'-'}</p>
	{:else if multBool == true}
		<p>{'*'}</p>
	{:else if divBool == true}
		<p>{'/'}</p>
	{/if}

	<p>{num2}</p>
	<p>=</p>
	<p>?</p>
	<audio src="/correct.mp3" bind:this={audio} />
	<audio src="/error.mp3" bind:this={audio1} />
</div>
<div class="table2">
	<div class="operation">
		<h2 on:click={sum}>Add</h2>
		<h2 on:click={minus}>Substract</h2>
		<h2 on:click={mult}>Multiply</h2>
		<h2 on:click={div}>Divide</h2>
	</div>
	<br />

	<!-- 	{#each options as i} -->
	<div class="options" style="font-size: 24px">
		<!-- <p>{ans1}</p>
		<p>{ans2}</p>
		<p>{res}</p> -->
		{#if i == 0}
			<p on:click={notCorrect}>{ans1}</p>
			<p on:click={notCorrect}>{ans2}</p>
			{#if sumBool == true}
				<p on:click={sum} on:click={correct}>{res}</p>
			{:else if minusBool == true}
				<p on:click={minus} on:click={correct}>{res}</p>
			{:else if multBool == true}
				<p on:click={mult} on:click={correct}>{res}</p>
			{:else if divBool == true}
				<p on:click={div} on:click={correct}>{res}</p>
			{/if}
			<!-- 	<p>lolüouuüupiupiupo</p> -->
		{/if}

		{#if i == 1}
			<p on:click={notCorrect}>{ans2}</p>

			{#if sumBool == true}
				<p on:click={sum} on:click={correct}>{res}</p>
			{:else if minusBool == true}
				<p on:click={minus} on:click={correct}>{res}</p>
			{:else if multBool == true}
				<p on:click={mult} on:click={correct}>{res}</p>
			{:else if divBool == true}
				<p on:click={div} on:click={correct}>{res}</p>
			{/if}
			<p on:click={notCorrect}>{ans1}</p>
			<!-- 		<p>-------------------</p> -->
		{/if}

		{#if i == 2}
			{#if sumBool == true}
				<p on:click={sum} on:click={correct}>{res}</p>
			{:else if minusBool == true}
				<p on:click={minus} on:click={correct}>{res}</p>
			{:else if multBool == true}
				<p on:click={mult} on:click={correct}>{res}</p>
			{:else if divBool == true}
				<p on:click={div} on:click={correct}>{res}</p>
			{/if}
			<p on:click={notCorrect}>{ans2}</p>
			<p on:click={notCorrect}>{ans1}</p>
			<!-- 			<p>🧮🧮🧮🧮🧮🧮🧮🧮🧮🧮🧮🧮🧮</p> -->
		{/if}
		<!-- 		<p>{options}</p> -->
	</div>
	<!-- {/each} -->
</div>

<style>
	@font-face {
		font-family: 'Pieces';
		font-style: normal;
		font-weight: 450;
		src: local(''), url('/fonts/3Dumb.ttf') format('truetype');
		/* IE9 Compat Modes */
	}
	p {
		font-family: 'Pieces';
	}
	.operation {
		position: fixed;
		margin-left: 168px;
		margin-top: 44px;
	}
	.table {
		margin-left: 168px;
		margin-top: 128px;
		width: 419px;
		display: grid;
		padding-left: 43px;
		grid-template-columns: repeat(5, 1fr);
		grid-column-gap: 0px;
		background-color: rgba(242, 255, 56, 0.747);
		border-radius: 90px;
	}
	.operation {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 31px;
		margin-left: 69px;
		left: 83px;
		top: 413.438;
		bottom: 72px;
		top: 125px;
	}
	.table2 {
		cursor: pointer;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
		font-size: 20px;
		width: 0px;
		height: 0px;
	}
	.options {
		position: relative;
		/* display: inline-flex;
		justify-content: space-between; */
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 50px;
		grid-row-gap: 0px;
		padding-right: 63px;
		padding-left: 54px;
		border-radius: 45px;
		left: 247px;
		background-color: rgba(27, 204, 195, 0.664);
	}
	h2 {
		font-size: 23px;
	}
</style>
