<script>
/*  	import Slider from '@bulatdashiev/svelte-slider';
	
	let value = [10, 100];
   let range = [20, 70]; 
*/
let a = 10;
   
   let changeColor = () => {console.log("ji")}
</script>



<!-- value: {value[0]}
   <Slider bind:value />
   Custom slot: left: {range[0]}
   right: {range[1]}
   <div>
      <Slider bind:value={range} range on:input={e => console.log(e.detail)}>
         <span slot="left" style="font-size: 20px;">&#128078;</span>
         <span slot="right" style="font-size: 20px;">&#128077;</span>
      </Slider>
</div> -->

<label>
	<input type=number value={a} min=0 max=10>
	<input type=range value={a} min=0 max=10>
</label>

<button on:click={changeColor}>Change Color</button>
<a  href="/">back</a>





<style>
   button{background-color: blanchedalmond;
   width: 112px;
position: relative; 
top: 40px;
left:390px;
   
   }
   a{position: relative;
      background-color: blueviolet;
      width: 40px; top:100px;
     height: 23px;

   }
</style>

