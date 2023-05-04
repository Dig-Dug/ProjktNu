<script>
	let rgb = 'rgb';

	let lg = 'linear-gradient(';

	let z = '';
	function getGradient() {
		console.log('wwww');
		let i = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		z = document.body.style.background =
			lg + '180deg, ' + rgb + '(' + r + ', ' + g + ' ,' + b + ')' + ',' + '#' + r + ')';

		return;
	}
	function back() {
		document.body.style.background = 'white';
	}
</script>

<h1>Gradient Picker</h1>
<div class="center">
	<button on:click={getGradient} on:mouseover={getGradient} on:focus={getGradient}
		>Generate Gradient</button
	>

	<p class="poi">{z}</p>

	<a href="/" on:click={back}>back</a>
</div>

<style>
	.center {
		margin-left: 37%;
		margin-right: 38%;
	}
	.poi {
		padding-bottom: 13px;
		padding-top: 14px;
	}
	button {
		background-color: rgb(255, 254, 251);
		width: 112px;
		border-radius: 4px;
		position: relative;
		top: 40px;
		margin: auto;
	}
	button:hover {
		background-color: black;
		color: aliceblue;
	}
	a {
		position: relative;
		border-radius: 4px;
		width: 36px;
		top: 44px;
		background-color: rgba(220, 20, 60, 0.486);
	}
	p {
		background-color: rgb(255, 255, 255);
		font-size: 34px;
		margin: auto;
		margin-top: 124px;
		padding: 67px;
		height: opx;
		border-radius: 39px;
	}
</style>
