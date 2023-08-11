<script>
	import Timer from './todos/timerApp/Timer.svelte';
	import Seconds from './todos/timerApp/Seconds.svelte';

	//import {onInterval} from

	/* 	import '../../static/fonts/fonts.css'; */
	let srt = 'tt.gif';

	let hour = 0.0;
	let min = 0;
	let sec = 0;
	let time = [hour];

	let show = false;

	let stop = () => ((show = !show), console.log('lüpkf'), tick1());
	function tick() {
		hour += 1;
		sec -= 60;
	}
	/* let tick1 = () => ( if(hour > 10){sec += 1}); */
	function tick1() {
		sec += 1;
		if (sec > 60) {
			tick();
			return;
			//hour += 1;
		}
	}
</script>

<h1>TO DO the timer</h1>
<div class="con">
	<h2 style="display: contents;" id="chrono" class="chrono" on:click={stop}>
		<!-- <button on:click={tick}>Timer</button> -->
		<!-- <button on:click={stop}>Seconds</button> -->
		{show ? 'stop' : 'start'}
		{hour}: {sec}
	</h2>

	<!-- {#each time as i}
			{i.text}:
		{/each} -->

	{#if show}
		<Timer callback={tick} />
		<Seconds callback1={tick1} />

		<img
			style="
width: 173px;
height: 157px;"
			src={srt}
			alt=""
		/>
	{/if}

	<!-- 	{min}:
		{sec} -->
</div>
<a class="s" href="/" style="color: red; margin-left:23px; margin-right:23px">back</a>

<!-- https://svelte.dev/tutorial/ondestroy -->
<style>
	@font-face {
		font-family: 'Pieces';
		font-style: normal;
		font-weight: 500;
		src: local(''), url('/fonts/sh-pinscher.regular.otf');
		/* IE9 Compat Modes */
	}
	h2 {
		font-size: 88px;
		font-family: 'Pieces';
	}
	.con {
		display: block;
		margin: 0;
		position: absolute;
		top: 25%;
		left: 30%;
	}
	img {
		position: fixed;
	}
</style>
