/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author aurora
*/
(function(){
	/*
	 *   style common
	 *      #wrap-loading {position: relative;z-index: 99;width: 500px;margin: auto;top: 250px;}
	 *		#data-number {padding: 10px;font-size: 20px;color: #29d;}
	 *		#hide-wrap {position: fixed;width: 100%;height: 100%;top: 0px;background: #000000;opacity: 0.3;}
	 *		.width: 300px;padding: 10px;border: 2px solid #29d;border-radius: 20px;float: left;margin-right: 10px;position: relative;} 
	 *		.loading span {background: #29d;display: block;border-radius: 7px;height: 15px;width: 0%;}
	 * 		Js Script need async :  async="async". This Script don't need async.
	 */
	
	  console.log('loading...');
	  document.write("<div id='hide-wrap'></div><div id='wrap-loading'><div id='loading_id' class='loading'><span></span></div><p id='data-number'>10%</p></div>")
			var i = 0,j = 0,k = false;
			var upTime = setInterval(function(){
				document.getElementById('loading_id').getElementsByTagName('span')[0].style.width = (i < 70 ? i : j) +"%";
				document.getElementById('wrap-loading').getElementsByTagName('p')[0].innerHTML = i +"%";
				i += 1,j += 0.5;
				if(i == 70){
					j = i;
				}
			},100);
      document.onreadystatechange = subSomething;
      function subSomething()
      {
         console.log(document.readyState);
        if(document.readyState == "complete"){
        		console.log('done...');
            k = true;
            document.getElementById('loading_id').getElementsByTagName('span')[0].style.width = (i < 70 ? i = 100 : j = 100) +"%";
            document.getElementById('wrap-loading').getElementsByTagName('p')[0].innerHTML = (i < 70 ? i = 100 : j = 100) +"%";
            	clearInterval(upTime);
            	setTimeout(function(){
            		 	document.getElementById('hide-wrap').remove();
            			document.getElementById('wrap-loading').remove();
            	},1000);
        }
      }
})();
