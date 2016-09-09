/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author aurora
*/
(function(){
	/*
	 *		#wrap-loading {position: absolute;z-index: 3147483649;width: 330px;margin: auto;display: flex;}
	 *		#hide-wrap {position: fixed;width: 100%;height: 100%;top: 0px;    background: #fff;z-index: 3147483648;}
	 *	        #data-number {padding: 10px;font-size: 20px;color: #ed7b49;}
	 *	        .home_loading{width: 300px;padding: 10px;border: 2px solid #ed7b49;border-radius: 20px;margin:auto;position: relative;}
	 *	        .home_loading span {background: #ed7b49;display: block;border-radius: 7px;height: 15px;width: 0%;}
	 *		.number_div{width: 100px;}
	 *		Js Script need async :  async="async". This Script don't need async.
	 */
	    console.log('loading...');
	  document.write("<div id='hide-wrap'></div><div style='margin-top : 25%;' id='wrap-loading'><div id='loading_id' class='home_loading'><span></span></div><div class='number_div'><p id='data-number'></p></div></div>")
			var i = 0,j = 30,k = false,upTime="";
			 upTime = setInterval(function(){
				document.getElementById('loading_id').getElementsByTagName('span')[0].style.width = i +"%";
				document.getElementById('wrap-loading').getElementsByTagName('p')[0].innerHTML = i +"%";
				console.log(i);
				if(i >= 98){
			    		i = 98;
			    }
				i += 1;
			},100);
      document.onreadystatechange = subSomething;
      function subSomething()
      {
         console.log(document.readyState);
        if(document.readyState == "complete"){
        	    endTime = setInterval(function(){
        	    		if(i == 100){
        	    			clearInterval(upTime);
        	    			clearInterval(endTime);
        	    		}
        	    		document.getElementById('loading_id').getElementsByTagName('span')[0].style.width = i +"%";
				document.getElementById('wrap-loading').getElementsByTagName('p')[0].innerHTML = i +"%";
        	    		i += 1;
        	    		
        	    },10)
        		console.log('done...');
            			setTimeout(function(){
            		 	document.getElementById('hide-wrap').remove();
            			document.getElementById('wrap-loading').remove();
            	},1000);
        }
      }
})();
