<script>
	import { text } from "svelte/internal";

function d (){
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
  }
</script>





<button on:click={d}>Generate quote</button>


<p>{text}</p>


<a  href="/">back</a>


<style>
    body{margin: auto;}
    
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
</style>