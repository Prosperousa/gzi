/*
* @Author: Dell
* @Date:   2018-12-21 13:34:11
* @Last Modified by:   Dell
* @Last Modified time: 2018-12-27 11:54:33
*/
window.onload=function(){
	let par = document.querySelectorAll(".Na li");
    let son = document.querySelectorAll(".Nmast .Nmaster");
    // let active=document.querySelector(".active");
    // let active1=document.querySelector(".active1");
    let huodong=document.querySelector(".sm");
    let jiangpin=document.querySelector(".jiangpin");
    for (let i = 0; i < par.length; i++) {
        par[i].onclick = function () {
            for (let j = 0; j < son.length; j++) {
                son[j].style.display = "none";
                // par[j].document.querySelector(".active").style.display="none";
                par[j].classList.remove("active");
            }
            son[i].style.display = "block";
            par[i].classList.add("active");
        }
    }
    

}