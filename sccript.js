let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
var nilai = 0;
menu.onclick = () => {
     menu.classlist.toggle('bx-x');
     navlist.classlist.toggle('bx-x');
}

menu.addEventListener("click", function(){
    if(nilai == 0){
        navlist.style.top = "-400%";
        nilai = 1;
    }
    else{
        navlist.style.top = "80%";
        nilai = 0;
    }
});
window.addEventListener("load", function(){
    loading.style.display = "none";
})