
function goToMusic() {
    window.scrollTo(0, 0);
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('fotos').className = ' animated slideOutUp';
    document.getElementById('logo-shows').className = 'animated slideOutUp';
    document.getElementById('shows').className = 'animated slideOutUp';
    document.getElementById('copyrights').className = ' animated bounceOut';
    document.getElementById('musica').className = 'show animated slideInDown';
}

function goToFotos() {
    window.scrollTo(0, 0);
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('logo-shows').className = 'animated slideOutUp';
    document.getElementById('shows').className = 'animated slideOutUp';
    document.getElementById('copyrights').className = ' animated bounceOut';
    document.getElementById('fotos').className = 'show animated slideInUp';
}

function goToShows() {
    window.scrollTo(0, 0);
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('fotos').className = ' animated slideOutUp';
    document.getElementById('copyrights').className = ' animated bounceOut';
    document.getElementById('logo-shows').className = 'animated slideInUp';
    document.getElementById('shows').className = 'show animated slideInUp';
}

$(document).ready(loadStuff);

function loadStuff(){
    $.ajax({
        type: "POST",
        url: "path/to/ajax.php",
        data: { some: data, action: "setContent"},
        timeout: 1000, //only one second, for a short loading time
        error: function(){ 
            console.log("An error occured. The div will reload.");
            loadStuff(); 
        },
        success: function(){
            $("#divid").load("path/to/template.php"); //div gets filled with template
        }
    });
}
