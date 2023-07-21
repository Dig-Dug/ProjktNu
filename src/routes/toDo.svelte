<script>
	let b = [{ text: 'oo', status: true }];

	//export let open = false;
	let open = false;

	let inputField = '';
	let newFieldValue = '';
	//export let newFieldValue = '';

	//https://bobbyhadz.com/blog/javascript-clear-input-field-after-submit
	let p = () => {
		//b.push(newFieldValue);
		//b.push(a);
		//b = [...b, newFieldValue];
		b = [...b, { text: newFieldValue, status: false }];
		newFieldValue = '';

		//console.log(b, '<<<<<');
	};
	//a.push(newFieldValue);
	let onInput = (event) => {
		if (event.key !== 'Enter') return;

		//a.push(inputField);
		inputField.value = '';
		//display();
		open = true;
		//a.push(inputField);
		p();
		console.log(newFieldValue);
		//return;
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
	/>

	<div class="con" />

	<br />
</div>

<!-- {#each newFieldValue as i}
			<p>{newFieldValue}</p>
		{/each} -->
<!-- {#if open}<List a={newFieldValue} />{/if} -->
<!-- <p>{b.join(' + ')}zuiz</p> -->
{#if open}
	<!-- <div class="layer"> -->
	{#each b as item, index}
		<h1 style="cursor: pointer;" class="layer">{item.text}</h1>
		<span style="cursor: pointer;" on:click={() => deleteThis(index)}>🩻</span>
		<input type="checkbox" />
	{/each}

	<!-- <p style="cursor: pointer;" on:click={deleteThis}>🩻</p> -->
	<!-- </div> -->
{/if}

<a class="s" href="/" style="color: red;">back</a>

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
		justify-content: center;
		align-items: center;
		background-color: aqua;
	}
</style>
