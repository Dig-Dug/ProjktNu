<script>
	let b = [];
	let open = false;
	let inputField = '';
	let newFieldValue = '';
	//https://bobbyhadz.com/blog/javascript-clear-input-field-after-submit
	let p = () => {
		b = [...b, { text: newFieldValue, status: false }];
		newFieldValue = '';
	};
	let onInput = (event) => {
		if (event.key !== 'Enter') return;
		inputField.value = '';
		open = true;
		p();
		console.log(newFieldValue);
	};
	function deleteThis(index) {
		b.splice(index, 1);
		b = b;
	}
	let src = 'easter.jpg';
	let pic = true;
</script>

r
<!-- <svelte:head>
	<Todo ink href="./todo.png" />
</svelte:head> -->
<h1>To-Do List 🗿</h1>
<img class:pic {src} alt="w" />
<div class="au">
	<input
		name="inputField1"
		type="text"
		placeholder="type"
		bind:this={inputField}
		on:keydown={onInput}
		bind:value={newFieldValue}
	/><a class="s" href="/" style="color: red; margin-left:23px">back</a>

	<div class="con" />

	<br />
</div>

{#if open}
	{#each b as item, index}
		<div class="layer" class:checked={item.status}>
			<p style="cursor: pointer;">{item.text}</p>
			<span style="cursor: pointer;" on:click={() => deleteThis(index)}>🩻</span>
			<input bind:checked={item.status} type="checkbox" />
		</div>
	{/each}
{/if}

<style>
	.au,
	.s {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.con {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: darkorange;
	}
	.pic {
		filter: grayscale(100%);
		height: 1114px;
		width: 1934px;
		position: absolute;
		z-index: -1;
		top: 0px;
		bottom: 95px;
	}
	.layer {
		width: 120px;
		display: flex;
		position: relative;
		margin-bottom: 15px;
		left: 233px;
		top: 37px;
		align-items: center;
		background-color: aqua;

		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
	.checked {
		background-color: rgb(68 82 106);
	}
</style>
