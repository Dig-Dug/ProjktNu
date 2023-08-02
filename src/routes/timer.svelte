<script>
	/* 	import '../../static/fonts/fonts.css'; */
	/* let srt = 'tt.gif'; */

	/* 	var minutes = Math.floor(millis / 60000);
	var seconds = (millis / 10).toFixed(0);
	var mill = ((millis % 600) / 100).toFixed(0);
 */
	let hour = 0.0;
	let min = 0.0;
	let sec = 0.0;
	function start() {
		hour += 1;
		min += 1;
		sec += 1;
	}
</script>

<h1>TO DO the timer</h1>
<div class="con">
	<h2 style="display: contents;" on:click={start} id="chrono" class="chrono">
		{hour}:
		{min}:
		{sec}
	</h2>
	<!-- <img
		style="
width: 173px;
height: 157px;"
		src={srt}
		alt=""
	/> -->
</div>
<a class="s" href="/" style="color: red; margin-left:23px; margin-right:23px">back</a>

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
