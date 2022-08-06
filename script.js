$("body").ready(function(){
    $(".pa,.pb,.pc,.pd,.pe,.pf,.pg,.ph,.pi,.pj,.pk,.pl,.pm,.po,.pp,.pq,.pr,.ps,.pt,.pu,.pv,.pw,.pz").css("display","none");
})

function display(param){
    var temp = document.querySelector(param);
    if(temp.style.display==="none"){
        temp.style.display="";
    }
    else{
        temp.style.display="none";
    }
}