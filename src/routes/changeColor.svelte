<script>
	function changeColor() {
		let i = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let ii = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let iii = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

		let rgb = 'rgb';

		let l = rgb + '(' + (i + ' ' + ii + ' ' + iii) + ')';
		document.body.style.backgroundColor = l;
	}

	function back() {
		document.body.style.backgroundColor = 'white';
	}
</script>

<button on:click={changeColor}>Change Background Color</button>
<a href="/" on:click={back}>back</a>

<style>
	button {
		background-color: rgb(255, 254, 251);
		width: 112px;
		border-radius: 4px;
		position: relative;
		top: 40px;
		left: 390px;
	}
	button:hover {
		background-color: black;
		color: aliceblue;
	}
	a {
		position: relative;
		border-radius: 4px;
		width: 36px;
		top: 100px;
		background-color: rgba(220, 20, 60, 0.486);
		height: 23px;
	}
	label {
		position: relative;
		top: 200px;
		left: 300px;
	}
</style>
