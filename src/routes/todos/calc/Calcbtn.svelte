<script context="module">
	let lastBtn = ''; //context module exports everything here
	let inDecimal = 0;
	let lastOper = '';
	let operand = '';
</script>

<script>
	import { createEventDispatcher } from 'svelte';
	import { display } from './stores';
	export let use = 'number';
	const dispatch = createEventDispatcher();
	const calcClick = (a) => {
		const btn = a.target.innerHTML;
		if (use == 'plusminus') {
			// +/- key
			display.set(-$display);
			return 0;
		}
		if (btn == '%') {
			display.set($display / 100);
			return 0;
		}
		if ('0' <= btn && btn <= '9') {
			if (lastBtn != 'number') {
				display.set(0);
			}
			if (inDecimal == 1) {
				display.set(Number(String($display) + '.' + btn));
				++inDecimal;
			} else {
				if (inDecimal) {
					display.set(Number(String($display) + btn));
					++inDecimal;
				} else {
					display.set($display * 10 + Number(btn));
				}
			}
			lastBtn = 'number';
		} else {
			switch (btn) {
				case '.':
					if (inDecimal == 0) {
						inDecimal = 1;
					}
					break;
				case 'AC':
					lastOper = ''; // fall through!
				case 'C':
					display.set(0);
					lastBtn = 'number';
					a.target.innerHTML = 'AC';
					inDecimal = 0;
					break;
				case '+':
				case '\u2212': // Minus
				case '\u00D7': // Multiply
				case '\u00F7': // Divide
				case '=':
					// dispatch('func', {
					// 	symbol: btn,
					// });
					switch (lastOper) {
						case '':
							operand = $display;
							break;
						case '+':
							operand += $display;
							break;
						case '\u2212': // Minus
							operand -= $display;
							break;
						case '\u00D7': // Multiply
							operand *= $display;
							break;
						case '\u00F7': // Divide
							operand /= $display;
							break;
					}
					display.set(operand);
					lastBtn = 'operator';
					lastOper = btn;
					inDecimal = 0;
					if (btn === '=') {
						lastOper = '';
						operand = 0;
					}
					break;
			}
		}
	};
</script>

<button class={use} on:click={(a) => calcClick(a)}>
	<slot />
</button>
