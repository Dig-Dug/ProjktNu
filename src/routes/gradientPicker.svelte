<script>
let i = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
let alpha = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
let rgb = "rgba";
let r,g,b,a;

let lg = "linear-gradient(";
      let deg = "deg"
    r  = i+1;
      g =  i;
     b =  i;
      a =  alpha;

function getGradient(){
   console.log("wwww")

   document.body.style.backgroundColor = lg + 360 + deg + ", " + "rgb(" + r + " " + g + " " + b + ")" + "," + "#" + r + ")";
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

	<button on:click={getGradient}>Generate Gradient</button>

<p>{i}</p>


<a  href="/">back</a>



<style>
button{
	   background-color: rgb(255, 254, 251);
		  width: 112px;border-radius: 4px;
	   position: relative; 
	   top: 40px;
	   left:390px;
	}
	button:hover{
background-color: black;
color: aliceblue;
	}
   a{ border-radius: 4px;  width: 36px; top:100px;
	background-color: rgba(220, 20, 60, 0.486);    
   }
</style>