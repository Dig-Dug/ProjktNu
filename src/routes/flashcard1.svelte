<script>
	import Card from './todos/card1.svelte';

	let questions = [{ question: '', answer: '' }];
</script>

<Card {questions} />
