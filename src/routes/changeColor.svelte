<script>
let r = 0, g = 0, b = 0;
let color = Math.random();
for(let i = 0; i < 10; i++){
   
}

let a = "10";
let m = {x: changeColor}
function changeColor ()  {
      console.log("ji")
      
}
function huhu (event){
  m.x = event.clientX;

}
 


</script>


<p>
   {m.x}
</p>
<label>
<!-- 	<input type=number value={a} min=0 max=10> -->
<!-- 	<input type=range value={a} min=0 max=10> -->
   <input type=range  on:change={changeColor} on:mousemove={huhu}>
  
</label>

<button on:click={changeColor}>Change Background Color</button>
<a  href="/">back</a>


<body class="be"style="background-color:{color}"/>



<style>




button{
   background-color: blanchedalmond;
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
label{
   position: relative;top: 200px;left:300px;
}
</style>

