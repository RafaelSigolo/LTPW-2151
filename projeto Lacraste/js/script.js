let scrollant = 0
function fecharnavbar(){
    if(scrollY>=scrollant){
        document.getElementById("nav").style.marginTop = "-70px"
    }else{
        document.getElementById("nav").style.marginTop = "0px"
    }
    
    scrollant = scrollY
}