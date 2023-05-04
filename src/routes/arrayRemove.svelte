<script>
	let ran = Math.floor(Math.random() * 10) + 3;

	let f = [ran];
	let r = false;

	function gen() {
		r = true;
		for (let i = 0; i < ran; i++) {
			f.push(ran * i);
		}
		return;
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
		if (f) {
			for (let i = 0; i < f.length; i++) {
				f = f.slice(1, -1);

				console.log(f);
				return;
			}
		}
		//f = [0];
	}
</script>

<div id="con">
	<p>remove first and last element of array</p>
	<button class="bu" on:click={gen}>elements generator</button>
	<button class="bu" on:click={rem}>remove first & last element</button>
	<br />
	<a href="/">back</a>
	<br />
	{#if r}
		{#each f as fs}
			<!--<div class="hor" id="hor2">w {ran}</div>-->
			<div class="hor" bind:this={ran}>{f}</div>
		{/each}
	{/if}
</div>

<style>
	a {
		border-radius: 4px;
		width: 36px;
		background-color: rgba(220, 20, 60, 0.486);
		height: 23px;
	}
	#con {
		position: absolute;
		left: 20px;
		top: 20%;
	}
	.hor {
		display: inline;
		background-color: i;
	}
	.bu {
		margin-bottom: 14px;
		margin-right: 12px;
	}
</style>
