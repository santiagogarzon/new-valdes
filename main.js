function goToTienda() {
  window.open(
    'https://articulo.mercadolibre.com.ar/MLA-783176884-medias-valdes-merch-oficial-_JM?quantity=1&variation=35808288566',
    '_blank'
  );
}

function goToHome() {
    window.scrollTo(0, 0);
    document.getElementById('social-media').className = 'show';
    document.getElementById('social-media-nosotros').className = 'not-show';   
    document.getElementById('nosotrosLogo').className = 'not-shown';
    document.getElementById('normalLogo').className = 'not-shown';
    document.getElementById('links').className = 'desktop';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('logo').className = 'show animated slideInUp';
    document.getElementById('fotos').className = ' animated slideOutUp';
    document.getElementById('logo-shows').className = 'not-shown';
    document.getElementById('shows').className = 'animated slideOutUp';
    document.getElementById('copyrights').className = ' ';
    document.getElementById('nosotros').className = 'animated slideOutUp';
    document.getElementById('videos').className = 'animated slideOutUp';
    document.body.className =  '';

}

function goToMusic() {
    window.scrollTo(0, 0);
    document.getElementById('social-media').className = 'show';
    document.getElementById('social-media-nosotros').className = 'not-show';   
    document.getElementById('nosotrosLogo').className = 'not-shown';
    document.getElementById('normalLogo').className = 'not-shown';
    document.getElementById('links').className = 'desktop';
    document.getElementById('musica').className = 'show animated slideInDown';
    document.getElementById('logo').className = 'not-shown';
    document.getElementById('fotos').className = ' animated slideOutUp';
    document.getElementById('logo-shows').className = 'not-shown';
    document.getElementById('shows').className = 'animated slideOutUp';
    document.getElementById('copyrights').className = ' ';
    document.getElementById('nosotros').className = 'animated slideOutUp';
    document.getElementById('videos').className = 'animated slideOutUp';
    document.body.className =  '';
}

function goToVideos() {
  window.scrollTo(0, 0);
  document.getElementById('social-media').className = 'show';
  document.getElementById('social-media-nosotros').className = 'not-show';   
  document.getElementById('nosotrosLogo').className = 'not-shown';
  document.getElementById('normalLogo').className = 'shown';
  document.getElementById('links').className = 'desktop';
  document.getElementById('videos').className = 'show animated slideInDown';
  document.getElementById('logo').className = 'show animated slideInDown';
  document.getElementById('fotos').className = ' animated slideOutUp';
  document.getElementById('logo-shows').className = 'animated slideOutUp';
  document.getElementById('shows').className = 'animated slideOutUp';
  document.getElementById('copyrights').className = ' ';
  document.getElementById('nosotros').className = 'animated slideOutUp';
  document.getElementById('musica').className = 'animated slideOutUp';
  document.body.className =  '';
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
    document.getElementById('copyrights').className = ' ';
    document.getElementById('fotos').className = 'show animated slideInDown';
    document.getElementById('nosotros').className = 'animated slideOutUp';
    document.getElementById('videos').className = 'animated slideOutUp';
    document.body.className =  '';
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
    document.getElementById('copyrights').className = ' ';
    document.getElementById('logo-shows').className = 'animated slideInDown';
    document.getElementById('shows').className = 'show animated slideInDown';
    document.getElementById('nosotros').className = 'animated slideOutUp';
    document.getElementById('videos').className = 'animated slideOutUp';
    document.body.className =  '';
}

function goToNosotros() {
  window.scrollTo(0, 0);
  document.getElementById('social-media').className = 'not-show';
  document.getElementById('social-media-nosotros').className = 'show';
  document.getElementById('logo').className = 'animated slideInDown';
  document.getElementById('nosotrosLogo').className = 'shown';
  document.getElementById('normalLogo').className = 'not-shown';
  document.getElementById('links').className = 'desktop links-negros';
  document.getElementById('musica').className = 'animated slideOutUp';
  document.getElementById('fotos').className = ' animated slideOutUp';
  document.getElementById('shows').className = 'animated slideOutUp';
  document.getElementById('copyrights').className = 'black';
  document.getElementById('logo-shows').className = 'animated slideOutUp';
  document.getElementById('nosotros').className = 'show animated slideInDown';
  document.getElementById('videos').className = 'animated slideOutUp';
  document.body.className = 'nosotros';
}

function goToMusicM() {
    window.scrollTo(0, 0);
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('links-mobile').className = 'not-shown';
    document.getElementById('copyrights').className = 'not-shown';
    document.getElementById('logo-shows-mobile').className = 'show animated slideOutDown';
    document.getElementById('logo-home-mobile').className = 'animated slideOutUp';
    document.getElementById('social-media').className = 'animated slideOutUp';
    document.getElementById('mobile-close-icon').className = 'show animated bounceIn';
    document.getElementById('fotos').className = '';
    document.getElementById('musica').className = 'show animated slideInDown';  
    document.body.className =  '';
}

function goToFotosM() {
    window.scrollTo(0, 0);
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('musica').className = 'animated slideOutUp';  
    document.getElementById('links-mobile').className = 'not-shown';
    document.getElementById('copyrights').className = 'not-shown';
    document.getElementById('logo-shows-mobile').className = '';
    document.getElementById('logo-home-mobile').className = 'animated slideOutUp';
    document.getElementById('social-media').className = 'animated slideOutUp';
    document.getElementById('mobile-close-icon').className = 'show animated bounceIn';
    document.getElementById('fotos').className = 'show animated slideInDown';
    document.body.className =  '';
}

function goToShowsM() {
    window.scrollTo(0, 0);
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('fotos').className = ' animated slideOutUp';    
    document.getElementById('links-mobile').className = 'not-shown';
    document.getElementById('copyrights').className = 'not-shown';
    document.getElementById('logo-shows-mobile').className = 'show animated slideInDown';
    document.getElementById('logo-home-mobile').className = 'animated slideOutUp';
    document.getElementById('social-media').className = 'animated slideOutUp';
    document.getElementById('shows').className = 'show animated slideInDown';
    document.getElementById('mobile-close-icon').className = 'show animated bounceIn';
    document.body.className =  '';
}

function goToVideosM() {
    window.scrollTo(0, 0);
    document.getElementById('logo').className = 'animated slideOutUp';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('fotos').className = ' animated slideOutUp';    
    document.getElementById('links-mobile').className = 'not-shown';
    document.getElementById('copyrights').className = 'not-shown';
    document.getElementById('logo-shows-mobile').className = '';
    document.getElementById('logo-videos-mobile').className = 'show animated slideInDown';
    document.getElementById('logo-home-mobile').className = '';
    document.getElementById('social-media').className = 'animated slideOutUp';
    document.getElementById('shows').className = ' animated slideOutUp';
    document.getElementById('videos').className = 'show animated slideInDown';
    document.getElementById('mobile-close-icon').className = 'show animated bounceIn';
    document.body.className =  '';
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
    document.getElementById('logo-nosotros-mobile').className = 'show animated slideInDown';
    document.getElementById('logo-home-mobile').className = 'animated slideOutUp';
    document.getElementById('social-media').className = 'animated slideOutUp';
    document.getElementById('shows').className = ' animated slideOutUp';
    document.getElementById('videos').className = 'animated slideOutUp';
    document.getElementById('nosotros-mobile').className = 'show animated slideInDown';
    document.getElementById('mobile-close-icon').className = 'show animated bounceIn black nosotros';
    document.body.className = 'nosotros';
}

function goBackToLink() {
    
    setTimeout(function(){
    var slides = $('.slide'),
        numOfSlides = slides.length;   
    
    for (let index = 0; index < numOfSlides; index++) {
        if(slides[0].video.stopVideo !== null){
            slides[index].video.stopVideo();
        }     
    }},2000);
    
    window.scrollTo(0, 0);    
    document.getElementById('links-mobile').className = 'show animated slideInUp';  
    document.getElementById('copyrights').className = 'animated slideInDown';     
    document.getElementById('logo-shows-mobile').className = '';
    document.getElementById('logo-videos-mobile').className = '';
    document.getElementById('logo-nosotros-mobile').className = '';
    document.getElementById('shows').className = '';    
    document.getElementById('fotos').className = 'animated slideOutUp';  
    document.getElementById('nosotros-mobile').className = 'not-shown animated slideOutUp';
    document.getElementById('social-media').className = 'show animated slideInDown';
    document.getElementById('logo-home-mobile').className = 'show animated slideInDown';
    document.getElementById('musica').className = 'animated slideOutUp';
    document.getElementById('mobile-close-icon').className = 'animated bounceOut';    
    document.getElementById('videos').className = 'animated slideOutUp';
    document.body.className =  '';
}

$(document).ready(function () {
    setTimeout(function(){
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
    },1000);
    
})
function onYouTubeIframeAPIReady() {
    setTimeout(function(){
        $('.slide').each(function (index, slide) {
            // Get the `.video` element inside each `.slide`
            var iframe = $(slide).find('.video')[0]
            // Create a new YT.Player from the iFrame, and store it on the `.slide` DOM object
            slide.video = new YT.Player(iframe)
        })
    },1000);
}

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://valdeseventos-2a73.restdb.io/rest/eventos",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "5cae9d1b1929401ffedd1379",
      "cache-control": "no-cache"
    }
}

String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 
          
$.ajax(settings).done(function (response) {
        // Begin accessing JSON data here
    var data = response;
    data.sort(function(a,b){
      aux1 = a.Fecha.replaceAll("-", "/");
      aux2 = b.Fecha.replaceAll("-", "/");    

      aux1 = aux1.substr(3, 2)+"/"+aux1.substr(0, 2)+"/"+aux1.substr(6, 4);
      aux2 = aux2.substr(3, 2)+"/"+aux2.substr(0, 2)+"/"+aux2.substr(6, 4);

      a = new Date(aux1);
      b = new Date(aux2);
      return a<b ? -1 : a>b ? 1 : 0;
    });
    data.forEach(evento => {
        const eventoDiv = document.createElement('div');
        eventoDiv.setAttribute('class', 'evento');

        const eventoDetail = document.createElement('div');
        eventoDetail.setAttribute('class', 'details');

        const p = document.createElement('p');
        p.setAttribute('class', 'fecha');
        p.setAttribute('style', 'font-weight: 700;');
        p.textContent = evento.Fecha;

        const p1 = document.createElement('p');
        p1.textContent = evento.Lugar;
        
        const p2 = document.createElement('p');
        p2.textContent = evento.Ciudad;

        const eventoPlace = document.createElement('div');
        eventoPlace.setAttribute('class', 'place');

        const p3 = document.createElement('p');
        p3.textContent = evento.Pais;

        
        const eventoButton = document.createElement('div');
        eventoButton.setAttribute('class', 'button');
        const button = document.createElement('button');
        button.setAttribute('class', 'entradas');
        const link = document.createElement('a');
        link.setAttribute('href', evento.Link);
        link.setAttribute('target', '_blank');
        button.textContent = 'ENTRADAS';
        
        document.getElementById('event-container').appendChild(eventoDiv);
        eventoDiv.appendChild(eventoDetail);
        eventoDetail.appendChild(p);
        eventoDetail.appendChild(p1);
        eventoDetail.appendChild(p2);
        eventoDiv.appendChild(eventoPlace);
        eventoPlace.appendChild(p3);
        eventoDiv.appendChild(eventoButton);
        eventoButton.appendChild(link);
        link.appendChild(button);
    });
    console.log(response);
});





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

let OPT = {
    selector: "#sparks",
    amount: 5000,
    speed: 0.05, // pixels per frame
    lifetime: 55,
    direction: { x: -0.5, y: 1 },
    size: [2, 2],
    maxopacity: 1,
    color: '233,34,0',
    randColor: false,
    acceleration: [5, 40] };
  
  
  if (window.innerWidth < 520) {
    OPT.speed = 0.05;
    OPT.color = '233,34,0';
  }
  
  (function spark() {
    const canvas = document.querySelector(OPT.selector);
    const ctx = canvas.getContext("2d");
  
    let sparks = [];
  
    window.addEventListener('resize', () => {
      setCanvasWidth();
    });
  
    function setCanvasWidth() {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    }
  
    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // Init animation
    function init() {
      setCanvasWidth();
  
      window.setInterval(() => {
        if (sparks.length < OPT.amount) {
          addSpark();
        }
      }, 1000 / OPT.amount);
  
      window.requestAnimationFrame(draw);
    }
  
    function draw() {
      ctx.fillStyle = 'rgba(0,0,0, 0.1)';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
      sparks.forEach((spark, i, array) => {
  
        if (spark.opacity <= 0) {
          array.splice(i, 1);
        } else {
          drawSpark(spark);
        }
  
      });
  
      window.requestAnimationFrame(draw);
    }
  
    function Spark(x, y) {
      this.x = x;
      this.y = y;
      this.age = 0;
      this.acceleration = rand(OPT.acceleration[0], OPT.acceleration[1]);
  
      this.color = OPT.randColor ?
      rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) :
      OPT.color;
  
      this.opacity = OPT.maxopacity - this.age / (OPT.lifetime * rand(1, 10));
  
      this.go = function () {
        this.x += OPT.speed * OPT.direction.x * this.acceleration / 2;
        this.y += OPT.speed * OPT.direction.y * this.acceleration / 2;
  
        this.opacity = OPT.maxopacity - ++this.age / OPT.lifetime;
      };
    }
  
    function addSpark() {
      let x = rand(-200, window.innerWidth + 200);
      let y = rand(-200, window.innerHeight + 200);
      sparks.push(new Spark(x, y));
    }
  
    function drawSpark(spark) {
      let x = spark.x,y = spark.y;
  
      spark.go();
  
      ctx.beginPath();
      ctx.fillStyle = `rgba(${spark.color}, ${spark.opacity})`;
      ctx.rect(x, y, OPT.size[0], OPT.size[1], 0, 0, Math.PI * 2);
      ctx.fill();
    }
  
    init();
  })();
  