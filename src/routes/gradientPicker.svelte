<script>
let i = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
let alpha = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
let rgb = "rgb";


let lg = "linear-gradient(";
      let deg = "deg"
let  r  = i+1;
 let     g =  i;
  let   b =  i;
  let    a =  alpha;
let z = ""; 
function getGradient(){
   console.log("wwww")

  z =  document.body.style.background = lg + "180deg, " +  rgb + "(" + r++ + ", " + g++ + " ," + b + ")" + "," + "#" + r++ + ")";
//style="background: linear-gradient(360deg, rgb(226, 225, 225), rgb(34, 34, 102));"
//return z;
//r*= i;

}
function back(){
		document.body.style.background = "white";
	 }
/* const changeGradient = () => {
      let i = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
      let alpha = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      let rgb = "rgba";
      let lg = "linear-gradient(";
      let deg = "deg"
      r = document.body.style.color = i+1;
      g = document.body.style.color = i;
      b = document.body.style.color = i;
      a = document.body.style.color = alpha;

      document.body.style.background = lg + 360 + deg + ", " + "rgb(" + r + " " + g + " " + b + ")" + "," + "#" + r + ")";

      console.log(lg + 360 + deg + ", " + "rgba(" + r + " " + g + " " + b + ")" + "," + r + ")"); //linear-gradient(0 320 68)

      let txt = document.createElement("p");
      txt.innerText = rgb + "(" + (r + " " + g + " " + b + " " + "/" + a + "%") + ")";

      
      document.body.appendChild(txt)

      if(document.getElementById("new")){
      const buttonElement = document.getElementById("color")
      buttonElement.addEventListener('click', function () {
         
         console.log("ke--pasa");
      
         let o = document.getElementById("new");
         document.body.removeChild(txt);
         console.log("remove")
         });


      return
      }

      function removeIt ( )  {

      }
      }
 */

</script>


	<h1>Gradient Picker</h1>

	<button   on:click={getGradient} on:mouseover={getGradient} on:focus={getGradient}>Generate Gradient</button>

<p>{z}</p>
<!-- <p>{rgb + "(" + r + " " + g + " " + b   + ")"}</p> -->


<a  href="/" on:click={back}>back</a>



<style>
button{
	   background-color: rgb(255, 254, 251);
		  width: 112px;border-radius: 4px;
	   position: relative; 
	   top: 40px;
	   margin: auto;
	}
	button:hover{
background-color: black;
color: aliceblue;
	}
   a{ border-radius: 4px;  width: 36px; top:100px;
	background-color: rgba(220, 20, 60, 0.486);    
   }
   p{
      font-size: 34px;
      margin: auto;padding: 67px;
   }
</style>