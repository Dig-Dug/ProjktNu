<script>

	let data;
	const h = async () => {
    data = await
    fetch("https://type.fit/api/quotes").then((x) => x.json());
    for(let i = 0; i < 1; i++){
     i = Math.floor(Math.random() * (255 - 0 + 1)) + 0
      console.log(data[i], "wwwwwwwwwwww");
      return data;
    }
    //console.log(data)
    //return data;
	}
 


//https://sveltesociety.dev/recipes/component-recipes/using-fetch-to-consume-apis		
</script>





<button on:click={h}>Generate quote</button>

<pre>
  {JSON.stringify(data)}
</pre>

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