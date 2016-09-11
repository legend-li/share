/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author aurora
*/

var aurora = function(){
		function id(name) {return document.getElementById(name);}
				    function each(arr, callback) {
				      if (arr.forEach) {arr.forEach(callback);}
				      else { for (var i = 0, len = arr.length; i < len; i++) callback.call(this, arr[i], i, arr);}
				    }
				    function setOpacityInLoop(elem,i) {
				      var pos = i * 5;
				      setTimeout(function() {
				        setOpacity(elem, pos);
				      }, i * 25);
				    }
				    function setOpacityInLoop2(elem,i) {
				      var pos = 100 - i * 5;
				      setTimeout(function() {
				        setOpacity(elem, pos);
				      }, i * 25);
				    }
				    function fadeIn(elem) {
				      setOpacity(elem, 0);
				      for ( var i = 0; i < 20; i++) {
				        setOpacityInLoop(elem,i);
				      }
				    }
				    function fadeOut(elem) {
				      for ( var i = 0; i <= 20; i++) {
				        setOpacityInLoop2(elem,i);
				      }
				    }
				    // 透明度
				    function setOpacity(elem, level) {
				      elem.style.zIndex = level > 4 ? 4 : level;
				      //console.log(level);
				      if (elem.filters) {
				        elem.style.filter = "alpha(opacity=" + level + ")";
				      } else {
				        elem.style.opacity = level / 100;
				      }
				    }
				    return {
				      //count:图片数量，
				      // wrapId:包裹图片的DIV,
				      // ulId:按钮DIV,
				      // infoId：信息栏
				      scroll : function(count,wrapId,ulId,infoId) {
				        var self=this;
				        var targetIdx=0;      //目标图片序号
				        var curIndex=0;       //现在图片序号
				        //添加Li按钮
				        var frag=document.createDocumentFragment();
				        this.num=[];    //存储各个li的应用，为下面的添加事件做准备
				        this.info=id(infoId);
				
				        var _li = "";  //避免循环索引
				        for(var i=0;i<count;i++){
				          _li = document.createElement("li");
				          console.log(_li);
				          (this.num[i]=frag.appendChild(_li));
				        }
				        document.getElementById(ulId).style.left= 50+"%";
				        document.getElementById(ulId).style.marginLeft= -50+"px";
				        id(ulId).appendChild(frag);
				        //初始化信息
				        this.img = id(wrapId).getElementsByTagName("a");
				        this.num[0].className="on";
				        this.img[0].getElementsByTagName('div')[0].style.background = "url(../img/1.jpg)  center no-repeat";
				        this.img[1].getElementsByTagName('div')[0].style.background = "url(../img/2.jpg)  center no-repeat";
				        this.img[2].getElementsByTagName('div')[0].style.background = "url(../img/3.jpg)  center no-repeat";
				        each(this.img,function(elem,idx,arr){
				          if (idx !== 0){
				            setOpacity(elem,0);
				          }
				        });
				        //为所有的li添加点击事件
				        each(this.num,function(elem,idx,arr){
				          elem.onclick=function(){
				            self.fade(idx,curIndex);
				            curIndex=idx;
				            targetIdx=idx;
				          };
				        });
				        //自动轮播效果
				        var itv=setInterval(function(){
				          if(targetIdx<self.num.length-1){
				            targetIdx++;
				          }else{
				            targetIdx=0;
				          }
				          self.fade(targetIdx,curIndex);
				          curIndex=targetIdx;
				        },5000);
				        id(ulId).onmouseover=function(){ clearInterval(itv);};
				        id(ulId).onmouseout=function(){
				          itv=setInterval(function(){
				            if(targetIdx<self.num.length-1){
				              targetIdx++;
				            }else{
				              targetIdx=0;
				            }
				            self.fade(targetIdx,curIndex);
				            curIndex=targetIdx;
				          },5000);
				        };
				      },
				      fade:function(idx,lastIdx){
				        if(idx==lastIdx) return;
				        var self=this;
				        fadeOut(self.img[lastIdx]);
				        fadeIn(self.img[idx]);
				        each(self.num,function(elem,elemidx,arr){
				          if (elemidx!=idx) {
				            self.num[elemidx].className="";
				          }else{
				            self.num[elemidx].className="on";
				          }
				        });
				        //		this.info.innerHTML=self.img[idx].firstChild.title;  获取title值
				      }
				    };
}();



// start  :  aurora.scroll(3,"banner_list","list","banner_info");

/*
 * style : 
 *  	#banner_list a{position:absolute;width: 100%;}
	  	#banner_bg {position:absolute;bottom:0;height:30px;filter: Alpha(Opacity=30);opacity:0.3;z-index:1000;cursor:pointer;width:478px;}
	  	#banner_list > a >div{height: 600px;width: 100%;}
	  	#banner {position: relative;width: 100%;border: 1px solid #666;overflow: hidden;height: 600px;}
    	#banner_info{position:absolute;bottom:0;left:5px;line-height:30px;color:#fff;z-index:1001}
    	#banner_text {position:absolute;width:120px;z-index:1002;right:3px;bottom:3px;}
    	ul li.on{background-color:#fff;opacity: 1;}
      ul li {padding: 0px 8px;float: left;display: block;color: #FFF;border: #fff 1px solid;opacity: 0.3;background-color: #000000;width: 5px;cursor: pointer;height: 20px;border-radius: 10px;margin-left: 5px;}
	  	ul {position:absolute;list-style-type:none;filter: Alpha(Opacity=75);opacity:0.75;z-index:1002;margin:0;padding:0;bottom:3px;right:5px;}
 */

/*
 * html :
 * 				<div id="banner">
                <div id="banner_bg"></div>  <!--标题背景-->
                <ul id="list"></ul>
                <div id="banner_list">
                    <a href="#" target="_blank">
                        <div></div>
                    </a>
                    <a href="#" target="_blank">
                        <div></div>
                    </a>
                    <a href="#" target="_blank">
                        <div></div>
                    </a>
                </div>
            </div>
 */
