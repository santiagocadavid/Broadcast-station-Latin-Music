var emisora = document.getElementById('emisora');
var emisoras = [ "http://20823.live.streamtheworld.com/RADIO_1_MED_SC?DIST=TuneIn&amp;TGT=TuneIn&amp;maxServers=2&amp;ua=RadioTime&amp;ttag=RadioTime", //Radio 1
    "http://20823.live.streamtheworld.com/EL_SOL_MED_SC?DIST=TuneIn&amp;TGT=TuneIn&amp;maxServers=2&amp;ua=RadioTime&amp;ttag=RadioTime", //El sol

    "http://198.27.68.65:8296/stream", //Latina Estereo 
    "http://65.60.45.74:8070/;stream.mp3", //la x electronica
    "http://65.60.45.74:8072/;", //La z Urbana
    "http://68.233.236.92:8006/stream", //Estrella estereo
    "http://20823.live.streamtheworld.com/RADIO_CRISTAL_MED_SC?DIST=TuneIn&amp;TGT=TuneIn&amp;maxServers=2&amp;ua=RadioTime&amp;ttag=RadioTime", //Radio Cristal
    "http://18733.live.streamtheworld.com/BLU_MEDELLIN_SC?DIST=TuneIn&amp;TGT=TuneIn&amp;maxServers=2&amp;ua=RadioTime&amp;ttag=RadioTime", //Blu Radio
    "http://i60.letio.com/9144.aac", //Radio tiempo
     "http://17643.live.streamtheworld.com:3690/BESAME_NACIONAL_SC?DIST=TuneIn&amp;TGT=TuneIn&amp;maxServers=2&amp;ua=RadioTime&amp;ttag=RadioTime" //Besame
    ];

var app = {
    // primera función que se ejecutar al cargar la pagina
    inicio: function () {
        this.iniciaBotones();
        this.iniciaFastClick();
        emisora.src = emisoras[0];
    },
    //inicia librería FastClick
    iniciaFastClick: function () {
        FastClick.attach(document.body);
    },

    iniciaBotones: function () {
        var botonPlay = document.querySelector('#play');
    
        var botonPause = document.querySelector('#pausa');
        
        var seleccion = document.querySelector("#radios");
        //var botonVolMas = document.querySelector('#volumemas');
        //var botonVolMenos = document.querySelector('#volumemenos');
        var slider = document.querySelector("#myRange");


        botonPlay.addEventListener('click', app.play, false);
        botonPause.addEventListener('click', app.pausa, false);
        //botonVolMas.addEventListener('click', app.subeVol, false);
        // botonVolMenos.addEventListener('click', app.bajaVol, false);        
        slider.addEventListener('input', app.deslizar, false);
        seleccion.addEventListener('change', app.cambiarEmisora, false);

    },

    
    // función del botón play del reproductor
    play: function () {
        console.log("Play");
        document.getElementById('emisora').play();

    },
    // función del botón pausa del reproductor
    pausa: function () {
        console.log("Pause");
        document.getElementById('emisora').pause();
    },


    /*
    // función del botón subir volume del reproductor
    subeVol: function () {
        document.getElementById('emisora').volume += 1.0;
    },
    // función del botón bajar volume del reproductor
    bajaVol: function () {
        document.getElementById('emisora').volume -= 0.1;
    }*/
    deslizar: function () {
        console.log(this.value / 100)

        document.getElementById('emisora').volume = this.value / 100;
    },

    cambiarEmisora: function(){
        console.log(this.value);
        app.pausa;
        emisora.src = emisoras[this.value];

    }

};

// inicializar al cargar la pagina
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        app.inicio();
    }, false);
}

