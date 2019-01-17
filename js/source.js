/*
* @Author: Dell
* @Date:   2018-12-21 13:34:11
* @Last Modified by:   Dell
* @Last Modified time: 2018-12-26 11:57:35
*/
window.onload=function(){
    // 轮播图
	 let mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
     // 选项卡
    let par = document.querySelectorAll(".Na li");
    let son = document.querySelectorAll(".Nmast .Nmaster");
    console.log(par, son);
    for (let i = 0; i < par.length; i++) {
        par[i].onclick = function () {
            for (let j = 0; j < son.length; j++) {
                son[j].style.display = "none";
                par[j].classList.remove("active");
            }
            son[i].style.display = "block";
            par[i].classList.add("active");
        }
    }
    // 下侧轮播图
    let imgs=document.querySelectorAll(".imgs img");               /*获取元素*/
    let banner=document.querySelectorAll(".banner")[0];
    let leftbtn=document.querySelectorAll(".leftbtn")[0];
    let rightbtn=document.querySelectorAll(".rightbtn")[0];
    console.log(imgs,banner,leftbtn,rightbtn);
    let widths=parseInt(getComputedStyle(imgs[0],null).width);
    imgs[0].style.left=0;
    let now=0;
    let next=0;
    let flag=true;
    leftbtn.onclick=function () {
         next++;
        if (next==imgs.length){
            next=0;
        }
        //下一张图永远在最右侧
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        now=next;
        // 判断开关是否开启
        // 如果开关开启，则!flag=false,不执行return,执行flag=false和move,move执行完flag=true;
        // 开关关闭的时候，不要点击
        // flag=false      !flag=true;     执行return     结束函数 
    }
    rightbtn.onclick=function () {
         next++;
        if (next==imgs.length){
            next=0;
        }
        //下一张图永远在最右侧
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        now=next;
    }

}