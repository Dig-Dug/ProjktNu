/* import { readable, derived } from 'svelte/store';
import { onDestroy } from 'svelte';

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}

const start = new Date();

export const elapsed = derived(time, ($time) => Math.round(($time - start) / 1000));
 */
//https://svelte.dev/tutorial/ondestroy

import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}
