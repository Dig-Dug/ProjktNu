<script>
	let num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
	let num2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

	let res = 0;
	function sum() {
		res = num1 + num2;
		return res;
	}
</script>

<h1>Math for kids 🧮</h1>
<a class="s" href="/" style="color: red; margin-left:23px; margin-right:23px">back</a>
<div class="table">
	<p>{num1}</p>
	<p>+</p>
	<p>{num2}</p>
	<p>=</p>
	<p>?</p>
</div>
<div class="table2">
	<div class="operation">
		<h2 on:click={sum}>Add</h2>
		<h2>Substract</h2>
		<h2>Multiply</h2>
		<h2>Divide</h2>
	</div>
	<br />
	<div class="options">
		<p>{num1}</p>
		<p>{num2}</p>
		<p>{res}</p>
	</div>
</div>

<style>
	.operation {
		position: fixed;
		margin-left: 168px;
		margin-top: 44px;
	}
	.table {
		margin-left: 168px;
		margin-top: 44px;
		width: 419px;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-column-gap: 0px;
	}
	.operation {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		margin-left: 178px;
	}
	.table2 {
		cursor: pointer;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
	}
</style>
