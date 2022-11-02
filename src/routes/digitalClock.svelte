<script>
	import { onMount } from 'svelte';

	let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	let time = new Date();
	let w = time.toLocaleDateString('de-DE', options);

	$: h = time.getHours();
	$: m = time.getMinutes();
	$: s = time.getSeconds();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
	let src = 'clock.jpg';
	let pic = true;
</script>

<body style="overflow-y: hidden;">
	<div class="center">
		<h1>Digital Clock</h1>
		<h2>{w}</h2>
		<h2 class="time">{h} : {m} : {s}</h2>

		<a href="/">back</a>
		<img class:pic {src} />
	</div>
</body>

<style>
	a {
		border-radius: 4px;
		background-color: orange;
	}
	h2 {
		font-size: 4em;
		color: black;
		font-weight: bolder;
		font-size: 4em;
		color: black;
		margin: auto;
	}
	.time {
		font-weight: bold;
		margin-left: 31%;
		color: rgb(255, 30, 0);
	}
	.center {
		width: 658px;
		height: 200px;
		margin: auto;
		top: 50%;
	}
	.pic {
	}
</style>
