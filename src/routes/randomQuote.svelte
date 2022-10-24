<script>
/* window.onload = (event) =>{
   document.designMode = "on";
} */
   $: color = "white";
   let src = "owl.jpg";
   let n = true; let pic = true;
   let data;
   let r, r1;
const h = async () => {
   document.designMode = "on";
    for(let i = 0; i < 1; i++){
      data = await
    fetch("https://type.fit/api/quotes").then((x) => x.json());
     i = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
     r1 = data[i].text;
     r = data[i].author;
     
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
<p class:n style="color: {color};" >{JSON.stringify(r1)}</p>
<p class:n style="color: {color}; margin-top: 3px;">{JSON.stringify(r)}</p>



<a  href="/">back</a>
<img class:pic {src}/>

<style>
@font-face {
    font-family: 'Nautilus';
    src: url("../../static/fonts/AlexBrush-Regular.ttf") format('truetype');
}
    body{margin: auto;
   
   }
  .pic{   height: 1139px;
    width: 2000px;
   position: relative;
   z-index: -1;bottom: 319px;
  }
    
    button{
	   background-color: rgb(255, 254, 251);
		  width: 112px;border-radius: 4px;
	   position: relative; 
	   top: 321px;
    left: 47%;
	   margin: auto;
	}
	button:hover{
background-color: rgb(253 223 60);


	}
   a{ margin: auto;border-radius: 4px;  width: 36px; top:100px;
	background-color: rgb(255, 255, 255); 
   position: relative; left:30%;
   }


p{margin-top: 83px;
   font-family: 'Nautilus';
   font-size: 30px;
   color: aliceblue;
}
.n{position: relative;top: 361px;
   font-family: 'Nautilus';
   text-align: center;
}
img {
		position: relative;
		left: 0;
		
	}
</style>