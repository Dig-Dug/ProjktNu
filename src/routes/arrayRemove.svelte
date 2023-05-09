<script>
	let ran = Math.floor(Math.random() * 10) + 3;

	let f = [ran];
	let r = false;
	//	let emoji = ['😂', '😝', '⚾', '👽', '💘', '🍓', '🚽', '😘'];
	let en = [];
	function gen() {
		r = true;
		for (let i = 0; i < ran; i++) {
			f.push(ran * i);
			//			en.push(emoji);
		}
	}

	function changeColor2() {
		let i = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let ii = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let iii = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		let rgb = 'rgb';
		let l = rgb + '(' + (i + ' ' + ii + ' ' + iii) + ')';
		document.getElementById('hor2').style.backgroundColor = l;
	}
	function rem() {
		f = f.slice(1, -1);

		console.log(f);
		changeColor2();
		if (f.length == 0) {
			r = false;
			ran = Math.floor(Math.random() * 10) + 3;
		}
	}

	function rev() {
		let r = f.reverse();
		console.log(r);
		f = r;
		return r;
	}
	function remRepeat() {
		let unique = [...new Set(f)];
		console.log(unique);
		return unique;
	}
</script>

<div id="con">
	<p>remove first and last element of array</p>
	<button class="bu" on:click={gen}>elements generator</button>
	<button class="bu" on:click={rem}>remove first & last element</button>
	<button class="bu" on:click={remRepeat}>remove repeated elements</button>
	<button class="bu" on:click={rev}> reverse elements</button>
	<br />
	<a href="/">back</a>
	<br />
	{#if r}
		<div class="hor" id="hor2">{f}</div>
		<!-- <div class="hor" id="hor2">{en}</div> -->
	{/if}
</div>

<style>
	a {
		border-radius: 4px;
		width: 36px;
		background-color: rgba(220, 20, 60, 0.486);
		height: 23px;
	}
	#hor2 {
		margin-right: 90px;
	}
	#con {
		position: absolute;
		left: 20px;
		top: 20%;
	}
	.hor {
		font-family: fantasy;
		color: crimson;
		position: relative;
		top: 20px;
		letter-spacing: 0.9em;
		display: inline;
		background-color: i;
	}
	.bu {
		margin-bottom: 14px;
		margin-right: 12px;
	}
</style>
