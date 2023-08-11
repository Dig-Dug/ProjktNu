//https://svelte.dev/tutorial/ondestroy

import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}

export function onInterval1(callback1, milliseconds1) {
	const interval = setInterval(callback1, milliseconds1);

	onDestroy(() => {
		clearInterval(interval);
	});
}
