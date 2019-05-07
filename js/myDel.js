var clearAd = function() {
    var node = document.querySelector(".FYB_RD");
    if(node!=null){
        node.remove();
    }
}
window.onload = function(){
    setInterval(function() {
        clearAd();
    }, 4000);
    clearAd();
}