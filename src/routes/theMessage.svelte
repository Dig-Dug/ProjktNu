<script>
	//let o = document.designMode = "on";
	let src = 'cat.jpg';
	let pic = true;
	let bod = true;

	let message = '';
	let chot = '';
	function show() {
		chot = message;
		message = '';
	}
</script>

<body class:bod>
	<div class="center">
		<h1>The Message</h1>
		<label>Enter the message</label>
		<input type="text" bind:value={message} />
		<button on:click={show}>submit</button>
		{#if message}
			<h1 style="position: absolute; ">{message}</h1>
		{/if}
		<br />
		<div class="du">
			<p class="o">{chot}</p>
		</div>
	</div>
	<a href="/">back</a>
	<img class:pic {src} />
</body>

<style>
	label {
		font-family: 'Nunito';
	}
	.bod {
		overflow-y: clip;
		margin: auto;
		min-height: 100vh;
	}
	.o {
		font-size: 29px;
	}
	.du {
		border-radius: 3% 3% 3% 3%;
		background-color: #e8daa7;
		margin-top: 133px;
		height: 230px;
	}
	h1 {
		margin-bottom: 78px;
	}
	.center {
		position: absolute;
		top: 150px;
		left: 32%;
	}
	.pic {
		height: 1114px;
		width: 1934px;
		position: absolute;
		z-index: -1;
		top: 0px;
		bottom: 95px;
	}
	img {
		overflow-y: hidden;
		position: absolute;
		left: 0;
		opacity: 0.6;
	}
	label {
	}
	button {
		cursor: pointer;
	}
	a {
		margin: auto;
		border-radius: 4px;
		width: 36px;
		top: 100px;
		background-color: rgb(218, 15, 15);
		position: absolute;
		top: 348px;
		left: 32%;
		cursor: pointer;
	}
</style>
