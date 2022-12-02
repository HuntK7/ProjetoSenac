 import { fechar, abrir } from "./src/slide1.js";
 import { close, open } from "./src/slide2.js";
 import { abra, fecha } from "./src/slide3.js";
 import { kadabra, clue } from "./src/slide4.js";
 
 document.getElementById('button1').addEventListener('click', abrir, fechar)
 
 document.getElementById('button2').addEventListener('click', open, close)
 
 document.getElementById('button3').addEventListener('click', abra, fecha)
 
 document.getElementById('button4').addEventListener('click', kadabra, clue)
 
// index para a junção das exportações das funções que que dão o funcinamento do modal