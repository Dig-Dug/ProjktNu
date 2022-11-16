<script>
	//https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2
	//https://svelte.dev/tutorial/component-this
	let post = '';
	function postIt() {
		let z = localStorage.setItem(post, 'wwww');
		console.log(post);
		save();
		post = '';
		return z;
	}

	function save() {
		//alert(post);

		/* let child = document.createElement('p');
		child.textContent = post;
		post.appendChild(child); */

		console.log(post);
	}
</script>

<h1>Write it &#129313</h1>
<div class="cen">
	<textarea name="" id="" cols="10" rows="2" bind:value={post} />
	<button on:click={postIt}>post</button>
</div>
<p />
<a href="/">back</a>

<style>
	.cen {
		margin: auto;
		width: 50%;
		padding: 10px;
	}
</style>
