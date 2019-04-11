screen.orientation.lock("portrait-primary");

function goToMusic() {
    window.scrollTo(0, 0);
    document.getElementById('social-media').className = 'show';
    document.getElementById('social-media-nosotros').className = 'not-show';   
    document.getElementById('nosotrosLogo').className = 'animated slideOutUp';
    document.getElementById('normalLogo').className = 'animated slideInUp';
    document.getElementById('links').className = 'desktop';
    document.getElementById('musica').className = 'show animated slideInUp';
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('fotos').className = ' animated slideOutUp';
    document.getElementById('logo-shows').className = 'animated slideOutUp';
    document.getElementById('shows').className = 'animated slideOutUp';
    document.getElementById('copyrights').className = ' animated bounceOut';
    document.getElementById('nosotros').className = 'animated slideOutUp';
    document.getElementById('videos').className = 'animated slideOutUp';
}

function goToVideos() {
  window.scrollTo(0, 0);
  document.getElementById('social-media').className = 'show';
  document.getElementById('social-media-nosotros').className = 'not-show';   
  document.getElementById('nosotrosLogo').className = 'not-shown';
  document.getElementById('normalLogo').className = 'shown';
  document.getElementById('links').className = 'desktop';
  document.getElementById('videos').className = 'show animated slideInUp';
  document.getElementById('logo').className = 'show animated slideInUp';
  document.getElementById('fotos').className = ' animated slideOutUp';
  document.getElementById('logo-shows').className = 'animated slideOutUp';
  document.getElementById('shows').className = 'animated slideOutUp';
  document.getElementById('copyrights').className = ' animated bounceOut';
  document.getElementById('nosotros').className = 'animated slideOutUp';
  document.getElementById('musica').className = 'animated slideOutUp';
}

function goToFotos() {
    window.scrollTo(0, 0);
    document.getElementById('social-media').className = 'show';
    document.getElementById('social-media-nosotros').className = 'not-show';   
    document.getElementById('nosotrosLogo').className = 'not-shown';
    document.getElementById('normalLogo').className = 'shown';
    document.getElementById('links').className = 'desktop';
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('logo-shows').className = 'animated slideOutUp';
    document.getElementById('shows').className = 'animated slideOutUp';
    document.getElementById('copyrights').className = ' animated bounceOut';
    document.getElementById('fotos').className = 'show animated slideInUp';
    document.getElementById('nosotros').className = 'animated slideOutUp';
    document.getElementById('videos').className = 'animated slideOutUp';
}

function goToShows() {
    window.scrollTo(0, 0);
    document.getElementById('social-media').className = 'show';
    document.getElementById('social-media-nosotros').className = 'not-show';    
    document.getElementById('nosotrosLogo').className = 'not-shown';
    document.getElementById('normalLogo').className = 'shown';
    document.getElementById('links').className = 'desktop';
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('fotos').className = ' animated slideOutUp';
    document.getElementById('copyrights').className = ' animated bounceOut';
    document.getElementById('logo-shows').className = 'animated slideInUp';
    document.getElementById('shows').className = 'show animated slideInUp';
    document.getElementById('nosotros').className = 'animated slideOutUp';
    document.getElementById('videos').className = 'animated slideOutUp';
}

function goToNosotros() {
  window.scrollTo(0, 0);
  document.getElementById('social-media').className = 'not-show';
  document.getElementById('social-media-nosotros').className = 'show';
  document.getElementById('logo').className = 'animated slideInUp';
  document.getElementById('nosotrosLogo').className = 'shown';
  document.getElementById('normalLogo').className = 'not-shown';
  document.getElementById('links').className = 'desktop links-negros';
  document.getElementById('musica').className = 'animated slideOutUp';
  document.getElementById('fotos').className = ' animated slideOutUp';
  document.getElementById('shows').className = 'animated slideOutUp';
  document.getElementById('copyrights').className = ' animated bounceOut';
  document.getElementById('logo-shows').className = 'animated slideOutUp';
  document.getElementById('nosotros').className = 'show animated slideInUp';
  document.getElementById('videos').className = 'animated slideOutUp';
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
    document.getElementById('logo-shows-mobile').className = '';
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

function goToVideosM() {
    window.scrollTo(0, 0);
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('fotos').className = ' animated slideOutUp';    
    document.getElementById('links-mobile').className = 'not-shown';
    document.getElementById('copyrights').className = 'not-shown';
    document.getElementById('logo-shows-mobile').className = '';
    document.getElementById('logo-videos-mobile').className = 'show animated slideInUp';
    document.getElementById('logo-home-mobile').className = '';
    document.getElementById('social-media').className = 'animated slideOutUp';
    document.getElementById('shows').className = ' animated slideOutUp';
    document.getElementById('videos').className = 'show animated slideInUp';
    document.getElementById('mobile-close-icon').className = 'show animated bounceIn';
}

function goToNosotrosM() {
    window.scrollTo(0, 0);
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('fotos').className = ' animated slideOutUp';    
    document.getElementById('links-mobile').className = 'not-shown';
    document.getElementById('copyrights').className = 'not-shown';
    document.getElementById('logo-shows-mobile').className = '';
    document.getElementById('logo-videos-mobile').className = '';
    document.getElementById('logo-nosotros-mobile').className = 'show animated slideInUp';
    document.getElementById('logo-home-mobile').className = 'animated slideOutDown';
    document.getElementById('social-media').className = 'animated slideOutUp';
    document.getElementById('shows').className = ' animated slideOutUp';
    document.getElementById('videos').className = 'animated slideOutUp';
    document.getElementById('nosotros-mobile').className = 'show animated slideInUp';
    document.getElementById('mobile-close-icon').className = 'show animated bounceIn black';
}

function goBackToLink() {
    var slides = $('.slide'),
        numOfSlides = slides.length;   
    
    for (let index = 0; index < numOfSlides; index++) {
        if(slides[0].video.stopVideo !== null){
            slides[index].video.stopVideo();
        }     
    }
    
    window.scrollTo(0, 0);    
    document.getElementById('links-mobile').className = 'show animated slideInUp';  
    document.getElementById('copyrights').className = 'animated slideInUp';     
    document.getElementById('logo-shows-mobile').className = '';
    document.getElementById('logo-videos-mobile').className = '';
    document.getElementById('logo-nosotros-mobile').className = '';
    document.getElementById('shows').className = '';    
    document.getElementById('fotos').className = 'animated slideOutUp';  
    document.getElementById('nosotros-mobile').className = 'not-shown animated slideOutDown';
    document.getElementById('social-media').className = 'show animated slideInDown';
    document.getElementById('logo-home-mobile').className = 'show animated slideInDown';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('mobile-close-icon').className = 'animated bounceOut';    
    document.getElementById('videos').className = 'animated slideOutUp';
}

$(document).ready(function () {
    var pos = 0,
        slides = $('.slide'),
        numOfSlides = slides.length;
    function nextSlide() {
        // `[]` returns a vanilla DOM object from a jQuery object/collection
        slides[pos].video.stopVideo()
        slides.eq(pos).animate({ left: '-100%' }, 500);
        pos = (pos >= numOfSlides - 1 ? 0 : ++pos);
        slides.eq(pos).css({ left: '100%' }).animate({ left: 0 }, 500);
    }
    function previousSlide() {
        slides[pos].video.stopVideo()
        slides.eq(pos).animate({ left: '100%' }, 500);
        pos = (pos == 0 ? numOfSlides - 1 : --pos);
        slides.eq(pos).css({ left: '-100%' }).animate({ left: 0 }, 500);
    }
    $('.left').click(previousSlide);
    $('.right').click(nextSlide);
})
function onYouTubeIframeAPIReady() {
    $('.slide').each(function (index, slide) {
        // Get the `.video` element inside each `.slide`
        var iframe = $(slide).find('.video')[0]
        // Create a new YT.Player from the iFrame, and store it on the `.slide` DOM object
        slide.video = new YT.Player(iframe)
    })
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
