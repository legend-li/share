/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author aurora
*/

var app = angular.module('myApp',[]);
			app.factory('userTest',[
				function(){
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
				}
			]);
			app.controller('myCtrl',function($scope,userTest){
			 		userTest.scroll(3,"banner_list","list","banner_info");
			});
