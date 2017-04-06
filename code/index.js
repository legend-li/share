/**
 * @Date:   2017-08-28T15:40:08+08:00
 * @Last modified time: 2017-08-28T17:17:51+08:00
 */



'usc strict';
//继承

//
function Animal(name){
    //属性
    this.name = name || 'Animal';
    //实例方法
    this.sleep = function(){
        console.log(this.name + '正在睡觉!')
    }
}
//原型方法
Animal.prototype.eat = function(food){
    console.log(this.name + '正在吃 '+ food)
};

function Cat(){

};
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

//Test Code

let cat = new Cat();
console.log(cat.name);
cat.sleep();
cat.eat('fish');


//出现的最多次数

// var str = 'asdsfdasdsadsaddddddd';
// var json = {};9999999999999999999988766554
//
// for(var i =0;i < str.length; i ++){
//     if(!json[str.charAt(i)]){
//         json[str.charAt(i)] = 1;
//     }else{
//         json[str.charAt(i)]++
//     }
// }
//
// console.log(json)
// var iMax = 0,
//     iIndex ='';
//
//
// for(var i in json){
//     if(json[i] > iMax){
//         iMax = json[i];
//         iIndex = i
//     }
// }
//
// console.log(iIndex)
// console.log(iMax)

//字符串长度

// new function(s){
//     if(!arguments.length || !s) return null;
//     if("" ==s) return 0;
//     var l = 0;
//         for(var i=0;i<s.length;i++){
//             if(s.charCodeAt(i) > 255) l+=2;
//             else l++
//     }
//     console.log(l)
// }('你a1啊');

//数组去重

// var s = [1,2,3,4,4,4,4,5,5,5,2,2];
//
// for(var i=0,o={},tmp=[],count=0,l=s.length;i<l;i++){
//     if(o[s[i]]){2511334413
//         count++
//     }else{
//         o[s[i]] =1;
//         tmp.push(s[i])
//     }
// }
// console.log(count);
// console.log(tmp)
