<script>
    function lol(){
        console.log("kffjoi")
    }

let back = () =>{
    document.body.style.backgroundColor = "white";
}
</script>







<button on:click={lol}>Generate Gradient</button>


<p></p>


<a  href="/" on:click={back}>back</a>


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