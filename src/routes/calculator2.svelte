<script>
	import Calcbtn from './todos/calc/Calcbtn.svelte';
	import Display from './todos/calc/display.svelte';

	let calc;
</script>

<h1>Props to --> https://github.com/wahhabb</h1>
<div class="calc" bind:this={calc}>
	<Display />
	<Calcbtn use="fn">AC</Calcbtn>
	<Calcbtn use="plusminus"><sup>&plus;</sup>/<sub>&minus;</sub></Calcbtn>
	<Calcbtn use="fn">%</Calcbtn>
	<Calcbtn use="oper">&div</Calcbtn>
	<Calcbtn>7</Calcbtn>
	<Calcbtn>8</Calcbtn>
	<Calcbtn>9</Calcbtn>
	<Calcbtn use="oper">&times;</Calcbtn>
	<Calcbtn>4</Calcbtn>
	<Calcbtn>5</Calcbtn>
	<Calcbtn>6</Calcbtn>
	<Calcbtn use="oper">&minus;</Calcbtn>
	<Calcbtn>1</Calcbtn>
	<Calcbtn>2</Calcbtn>
	<Calcbtn>3</Calcbtn>
	<Calcbtn use="oper">&plus;</Calcbtn>
	<Calcbtn>0</Calcbtn>
	<Calcbtn>.</Calcbtn>
	<Calcbtn use="oper">=</Calcbtn>
	<a href="/">back</a>
</div>

<style>
	a {
		background-color: orange;
	}
	.calc {
		display: inline-grid;
		justify-content: center;
		grid-template-columns: repeat(3, 3.875em) 4.06em;
		grid-template-rows: 5em repeat(5, 3.125em);
		margin: 0 auto;
		gap: 0.125em;
	}
</style>
