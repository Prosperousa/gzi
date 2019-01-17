/*
* @Author: Dell
* @Date:   2018-12-25 10:56:54
* @Last Modified by:   Dell
* @Last Modified time: 2018-12-27 15:22:39
*/
window.onload=function(){
	let tijiao=document.querySelector(".tijiao .btn1");
	let mask=document.querySelector(".mask");
	let quxiao=document.querySelector(".mask .upper .xia .xia-left");
	let choujiang=document.querySelector(".mask .upper .xia .xia-right");
	tijiao.onclick=function(){
		mask.style.display="block";
	};
	quxiao.onclick=function(){
		mask.style.display="none";
	}

}