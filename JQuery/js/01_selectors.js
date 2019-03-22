
$(document).ready(()=>{
    console.log("JQuery and Web loaded.");
    //Selector ID
        $('#red').css('color', 'red');
        $('#yellow').css('color', 'yellow');
        $('#green').css('color', 'green');
    //Selector Class
        $('.unBorder').click( function(){
            console.log('Click');
            let a = $(this);
            a.addClass('bordered');
            console.log(a);
        });
});