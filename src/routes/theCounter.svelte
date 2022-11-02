<script>
	let src = 'count.png';
	let pic = true;
	let count = 0;
	let up = () => {
		count++;
	};
	let down = () => {
		count--;
	};
</script>

<body>
	<div class="center">
		<h1>The Counter</h1>
		<button on:click={up}>+</button>
		<button on:click={down}>-</button>
		<h1>{count}</h1>
		<img class:pic {src} />
		<a href="/">back</a>
	</div>
</body>

<style>
	button {
		position: relative;
		left: 43%;
		top: 74%;
		width: 3em;
		border-radius: 13px;
	}
	.center {
		width: 658px;
		height: 200px;
		margin: auto;
		top: 50%;
	}
	a {
		background-color: darkorange;
		top: 350px;
		left: 48%;
		position: absolute;
	}
	.pic {
		left: 978px;
		overflow-y: hidden;
		height: 785px;
		width: 819px;
		position: absolute;
		z-index: -1;
		top: 32px;
		bottom: 95px;
	}
	body {
		overflow-y: hidden;
	}
</style>
