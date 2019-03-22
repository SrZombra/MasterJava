$(document).ready(() => {
    // Mouse hover And Mouse
    let boxA = $('#box');
    boxA.mouseover(() => {
        boxA.css('background', 'red');
    });
    boxA.mouseout(() => {
        boxA.css('background', 'green');
    });
    //------------
    function MOut () {
        boxA.css('background', 'red');
    }
    function MOver (){
        boxA.css('background', 'green');
    }
    boxA.hover(MOver, MOut);
    //---------------
    boxA.click(() => {
        boxA.css('background', 'blue');
        boxA.css('color', 'aqua');
    });
    boxA.dblclick(() => {
        boxA.css('background', 'pink');
        boxA.css('color', 'yellow');
    });
    //---------------
    let inputName = $('#focusName');
    inputName.focus(() =>{
        inputName.css('border', '2px solid green');
    });
    inputName.blur(() =>{
        inputName.css('border', '2px solid blue');
        $('#data').text(inputName.val());
    });
});
