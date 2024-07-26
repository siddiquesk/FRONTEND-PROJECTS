          function run(){
         	let code=document.getElementById("code").value;
	        let box=document.getElementById("result");
	        box.innerHTML=code;
	        let codebox=document.getElementById("code_box");
	        codebox.style.display="none";
	        let show=document.getElementById("showbox");
	        show.style.display ="block";
	        show.setAttribute("class","animate__animated animate__slideInRight");
	        let btn=document.getElementById("run_btn");
	        btn.style.display="none";
	        let b=document.getElementById("icon");
	        b.style.display="block";


	}

    function back()
    {
    	     let show=document.getElementById("showbox");
    	     show.style.display="none";
    	      let codebox=document.getElementById("code_box");
    	      codebox.style.display="block";
    	      codebox.setAttribute("class","animate__animated animate__slideInLeft");
    	      let b=document.getElementById("icon");
    	      b.style.display="none";
    	       let btn=document.getElementById("run_btn");
    	       btn.style.display="block";
    }



