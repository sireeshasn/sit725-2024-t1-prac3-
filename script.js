const clickMe=()=>{
    alert("thanks for clicking me.Hope you have a nice day!")
}
$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(()=>{
        clickMe();
    })
});