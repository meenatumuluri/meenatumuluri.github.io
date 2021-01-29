/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */

/*particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});*/


/* Otherwise just put the config content (json): */

particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": false,
        "value_area": 394.57382081613633
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "https://i.imgur.com/11jVWCF.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3551164387345227,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 12,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 7.192807192807193,
        "size_min": 10.38961038961039,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "top-right",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 7891.476416322727,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 109.63042366068159,
        "line_linked": {
          "opacity": 0.49357529491123914
        }
      },
      "bubble": {
        "distance": 400,
        "size": 15,
        "duration": 1.5184815184815184,
        "opacity": 0.34107242916656494,
        "speed": 3
      },
      "repulse": {
        "distance": 48.72463273808071,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 1
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);
