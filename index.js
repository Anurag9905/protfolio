var icon=document.getElementById("icon");

icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="./dark_modepng.png";
    }else{
        icon.src="./light_modepng.png";
    }
}
function showSidebar(){
    const sidebar =document.querySelector(".sidebar")
    sidebar.style.display="flex"
}
function hideSidebar(){
    const sidebar =document.querySelector(".sidebar")
    sidebar.style.display="none"
}