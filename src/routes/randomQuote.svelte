<script>
   let src = "owl.jpg";
   let n = true;
   let data;
   let r, r1;
const h = async () => {

    for(let i = 0; i < 1; i++){
      data = await
    fetch("https://type.fit/api/quotes").then((x) => x.json());
     i = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
      r = data[i].author;
      r1 = data[i].text;
      console.log(r,r1, "wwwwwwwwwwww");
     // return r;
    }
return
}


//https://javascript.info/fetch
//FONT https://stackoverflow.com/questions/59605327/how-do-you-load-and-use-a-custom-font-in-svelte#:~:text=If%20you%20are%20using%20Sveltekit,to%20reference%20your%20font%20files.&text=Save%20this%20answer.,-Show%20activity%20on
//https://sveltesociety.dev/recipes/component-recipes/using-fetch-to-consume-apis		
</script>





<button on:click={h}>Generate quote</button>
<p>{JSON.stringify(r)}</p>
<p class:n >{JSON.stringify(r1)}</p>


<a  href="/">back</a>
<img {src}/>

<style>
    body{margin: auto;
   
   }
  
    
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


p{margin-top: 83px;
   font-family: 'yyy';
   font-size: 30px;
}
.n{
   margin-top: -26px;
}
img {
		position: relative;
		left: 0;
		
	}
</style>