<script>
//let o = document.designMode = "on";
let src = "cat.jpg";let pic = true; let bod = true;
</script>



<body class:bod>
    

<div class="center">
    <h1>The Message</h1>
<label >Enter the message</label>
<input type="text">
<button>submit</button>
<a  href="/">back</a>
</div>
<img class:pic {src}/>
</body>
<style>
    label{
        font-family: 'Nunito' ;
    }
 .bod{
      overflow-y: clip;
      margin: auto;min-height: 100vh;
   
   }   
h1{    margin-bottom: 78px;}
.center{position: absolute;
  top: 150px;
  left: 32%;
 
}
.pic{   height: 1114px;
    width: 1934px;
    position: absolute;
    z-index: -1;top: 0px;
    bottom: 95px;
  }
img {overflow-y: hidden;
		position: absolute;
		left: 0; opacity: 0.6;
		
	}
label{

}
button{
    cursor: pointer;
}
</style>