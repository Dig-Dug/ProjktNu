<script>
	//import{ goto } from '@sapper/app';
	import {
		useForm,
		HintGroup,
		email,
		required,
		Hint,
		validators,
		minLength
	} from 'svelte-use-form';

	let input = '';
	let psw = '';
	const form = useForm(); //returns a svelte store (Observable action)
	// $form <- $prefix access state of form returns Form instance

	//let inp = localStorage.getItem(input);
	//let pswe = localStorage.getItem(psw);
	function logIt() {
		console.log(form);
		//alert(input + ',' + psw);
		localStorage.setItem(input, 'wwww');
	}
	let src = 'rr.gif';
	let pic = true;
	/* let d = () => {
		console.log('goto');
	}; */
</script>

<!-- 
    <h1>Login User</h1>
    <form use:form>
        <input name="name" use:validators={[minLength(5)]} />
        <Hint for="name" on="minLength" let:value>
            name must be at least {value} characters!
        </Hint>
        <button disabled={!$form.valid}>Submit</button>
    </form> 
-->

<form use:form>
	<h1>Login User</h1>
	<input bind:value={input} type="email" name="email" use:validators={[required, email]} />
	<HintGroup for="email">
		<Hint on="required">This is a mandatory field</Hint>
		<Hint on="email" hideWhenRequired>Email is not valid</Hint>
	</HintGroup>
	<br />
	<input bind:value={psw} type="password" name="password" use:validators={[required]} />
	<Hint for="password" on="required">This is a mandatory field</Hint>
	<a class="btn" href="./todos/blog.svelte" disabled={!$form.valid} on:click={logIt}>Login</a>
	<p><small>check Local store for saved input in dev tools &#127913;</small></p>
	<!-- 	<h2>{input}</h2>
	<h2>{psw}</h2> -->
	<a href="/">back</a>
</form>

<img class:pic {src} />

<style>
	form {
		position: relative;
		margin: auto;
		width: 50%;
		padding: 10px;
	}
	h2 {
		font-family: 'Rokkitt';
		font-size: 3rem;
		position: sticky;
	}
	a {
		position: fixed;
		margin: auto;
		width: 50%;
		padding: 10px;
	}
	.pic {
		position: relative;
		margin: auto;
		left: 609px;
		width: 317px;
		height: 228px;
	}
	.btn {
		background-color: red;
		width: 45px;
		height: 8px;
		left: 556px;
	}
</style>
