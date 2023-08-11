<script>
	import Timer from './todos/timerApp/Timer.svelte';
	//import {onInterval} from

	/* 	import '../../static/fonts/fonts.css'; */
	let srt = 'tt.gif';

	let hour = 0.0;
	let min = 0;
	let sec = 0;
	let time = [hour];

	let show = true;

	let stop = () => (show = !show);
	let tick = () => ((hour += 1), (min += 2), (sec += 3));
</script>

<h1>TO DO the timer</h1>
<div class="con">
	<h2 style="display: contents;" id="chrono" class="chrono" on:click={stop}>
		<button on:click={stop}>{show ? 'Close' : 'Open'} Timer</button>
		{show ? 'stop' : 'start'}
		{hour}: {min} : {sec}
	</h2>

	<!-- {#each time as i}
			{i.text}:
		{/each} -->

	{#if show}
		<Timer callback={tick} />
	{/if}

	<!-- 	{min}:
		{sec} -->

	<!-- <img
		style="
width: 173px;
height: 157px;"
		src={srt}
		alt=""
	/> -->
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
</style>
