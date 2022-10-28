<script>
import {fade} from 'svelte/transition'
const cp = ['https://www.rollingstone.com/wp-content/uploads/2018/06/rs-235238-01.-Ramones-Ramones-1976.jpg?w=640',
'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-235285-37.-Blink-182-Enema-of-the-State-1999.jpg?w=640',
'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-235277-30.-Sonic-Youth-Evol-1986.jpg?w=640',
'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-235273-27.-Minor-Threat-Complete-Discography-1989.jpg?w=640',
'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-235264-20.-Bad-Brains-Bad-Brains-1982.jpg?w=640',
'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-235250-09.-Black-Flag-Damaged-1981.jpg?w=640']; 


let index = 0;
const next = () => {
    index = (index + 1) % cp.length
}

/* List libraries:
https://valexr.github.io/Slidy/
https://madewithsvelte.com/svelte-slidy */

</script>
<h1>Image Carousel</h1>
<div class="all">

{#each [cp[index]] as src (index)}
<img transition:fade {src} alt="">
{/each}
<button on:click={next}>Click</button>

<a href="/">back</a>
</div>

<style>
    .all{ margin: 0;
    background: yellow;
    position: absolute;
    top: 21%;
    left: 34%;
    margin-right: -50%;
    transform: translate(-50%, -50%) }
    a{
        background-color: darkorange; top: 422px;
        position: absolute;
    }
    img, button {
		position: absolute;
     }
    
</style>


<!-- 
<script>
	import {fade} from 'svelte/transition'
	
	const carouselPhotos = [
		'https://picsum.photos/300/200?random=1',
		'https://picsum.photos/300/200?random=2',
		'https://picsum.photos/300/200?random=3'
	]
	
	let index = 0
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length
	}
</script>

<style>
	img, button {
		position: absolute;
	}
</style>

{#each [carouselPhotos[index]] as src (index)}
	<img transition:fade {src} alt="" />	
{/each}

<button on:click={next}>Next!</button> -->