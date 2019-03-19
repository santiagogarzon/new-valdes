
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

function goToMusicM() {
    window.scrollTo(0, 0);
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('links-mobile').className = 'not-shown';
    document.getElementById('copyrights').className = 'not-shown';
    document.getElementById('logo-shows-mobile').className = 'show animated slideOutDown';
    document.getElementById('logo-home-mobile').className = 'animated slideOutDown';
    document.getElementById('social-media').className = 'animated slideOutUp';
    document.getElementById('mobile-close-icon').className = 'show animated bounceIn';
    document.getElementById('fotos').className = '';
    document.getElementById('musica').className = 'show animated slideInUp';  
}

function goToFotosM() {
    window.scrollTo(0, 0);
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('musica').className = 'animated slideOutUp';  
    document.getElementById('links-mobile').className = 'not-shown';
    document.getElementById('copyrights').className = 'not-shown';
    document.getElementById('logo-shows-mobile').className = 'show animated slideOutUp';
    document.getElementById('logo-home-mobile').className = 'animated slideOutDown';
    document.getElementById('social-media').className = 'animated slideOutUp';
    document.getElementById('mobile-close-icon').className = 'show animated bounceIn';
    document.getElementById('fotos').className = 'show animated slideInUp';
}

function goToShowsM() {
    window.scrollTo(0, 0);
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('fotos').className = ' animated slideOutUp';    
    document.getElementById('links-mobile').className = 'not-shown';
    document.getElementById('copyrights').className = 'not-shown';
    document.getElementById('logo-shows-mobile').className = 'show animated slideInUp';
    document.getElementById('logo-home-mobile').className = 'animated slideOutDown';
    document.getElementById('social-media').className = 'animated slideOutUp';
    document.getElementById('shows').className = 'show animated slideInUp';
    document.getElementById('mobile-close-icon').className = 'show animated bounceIn';
}

function goBackToLink() {    
    window.scrollTo(0, 0);    
    document.getElementById('links-mobile').className = 'show animated slideInUp';  
    document.getElementById('copyrights').className = 'animated slideInUp';     
    document.getElementById('logo-shows-mobile').className = '';
    document.getElementById('shows').className = '';    
    document.getElementById('fotos').className = 'animated slideOutUp';  
    document.getElementById('social-media').className = 'show animated slideInDown';
    document.getElementById('logo-home-mobile').className = 'show animated slideInDown';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('mobile-close-icon').className = 'animated bounceOut';
}

//$(document).ready();

/*function loadStuff(){
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
}*/
