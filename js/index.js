// const keyMap = {
//   marimba: ['p', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o'],
//   keyboard: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
//   bongo: ['d', 'a'],
//   shinchan: [' '],
//   cymbal: ['c'],
//   tambourine: ['b'],
//   cowbell: ['f']
// }
// var instrument_dom = [];

// window.loadSimple = function (file) {
//   lowLag.load([file + ".mp3", file + ".wav"], file);
// };
// window.load = function (file, start, end) {
//   for (i = start; i <= end; i++) {
//     lowLag.load([file + i + ".mp3", file + i + ".wav"], file + i);
//   }
// };
// var r_hand, l_hand, mouth;
// document.addEventListener("readystatechange", function () {
//   r_hand = document.getElementById("paw-right");
//   l_hand = document.querySelector("#paw-left");
//   mouth = document.querySelector("#mouth");
//   for (i in keyMap) {
//     instrument_dom[i] = document.querySelector('#' + i);
//   }
//   if (document.readyState === "complete") {
//     (function () {
//       lowLag.init({
//         urlPrefix: "./sounds/",
//         debug: "none",
//       });
//       window.load("bongo", 0, 1);
//       window.load("keyboard", 0, 9);
//       window.load("marimba", 0, 9);
//       window.loadSimple("shinchan");
//       window.loadSimple("cymbal");
//       window.loadSimple("tambourine");
//       window.loadSimple("cowbell");
//     })();
//   }
//   let info = document.querySelector('#info');
//   info.onclick = function () {
//     let condition = document.querySelector('header').style.display;
//     document.querySelector('header').style.display = (condition == 'none') ? 'block' : 'none';
//     console.log()
//   }
// });

// ["keydown", "touchstart"].forEach((event) =>
//   window.addEventListener(event, (e) => {
//     let key;
//     if (event !== 'keydown' && e.target.classList.contains("keytap")) {
//       key = e.target.innerText.toLowerCase();
//     }
//     else
//       key = e.key;

//     for (instrument in keyMap) {
//       let instrument_length = keyMap[instrument].length;

//       if (keyMap[instrument].includes(key)) {
//         if (instrument !== 'shinchan') instrument_dom[instrument].style.visibility = 'visible';
//         if (instrument_length == 1) {
//           lowLag.play(instrument);
//           if (instrument == "shinchan")
//             mouth.setAttribute("class", "a");
//           else
//             l_hand.setAttribute("class", "active");
//         }
//         else {
//           if ((keyMap[instrument].indexOf(key) + instrument_length - 1) % instrument_length >= instrument_length / 2)
//             l_hand.setAttribute("class", "active");
//           else
//             r_hand.setAttribute("class", "active");
//           lowLag.play(instrument + keyMap[instrument].indexOf(key));

//         }

//       }
//       else if (instrument !== 'shinchan') {
//         instrument_dom[instrument].style.visibility = 'hidden';
//       }

//     }
//   })
// );

// ["keyup", "touchend"].forEach((event) =>
//   window.addEventListener(event, (e) => {
//     let key;
//     if (event !== 'keyup' && e.target.classList.contains("keytap")) {
//       key = e.target.innerText.toLowerCase();
//     }
//     else
//       key = e.key;
//     for (instrument in keyMap) {
//       if (keyMap[instrument].includes(key)) {
//         r_hand.setAttribute("class", "a");
//         l_hand.setAttribute("class", "a");
//         mouth.setAttribute("class", "active")
//       }
//     }
//   })
// );


const _0x31bd=['log','getElementById','querySelector','readystatechange','contains','keyboard','loadSimple','.wav','cymbal','addEventListener','#info','hidden','block','style','play','./sounds/','length','touchend','init','complete','keytap','setAttribute','readyState','visibility','target','paw-right','keyup','shinchan','tambourine','.mp3','key','indexOf','keydown','bongo','#mouth','class','classList','display','innerText','#paw-left','includes','onclick','forEach','none','load','active','header'];(function(_0x4eb888,_0x31bde8){const _0x61eea2=function(_0x33036d){while(--_0x33036d){_0x4eb888['push'](_0x4eb888['shift']());}};_0x61eea2(++_0x31bde8);}(_0x31bd,0x124));const _0x61ee=function(_0x4eb888,_0x31bde8){_0x4eb888=_0x4eb888-0x0;let _0x61eea2=_0x31bd[_0x4eb888];return _0x61eea2;};const _0x892688=_0x61ee,keyMap={'marimba':['p','q','w','e','r','t','y','u','i','o'],'keyboard':['0','1','2','3','4','5','6','7','8','9'],'bongo':['d','a'],'shinchan':['\x20'],'cymbal':['c'],'tambourine':['b'],'cowbell':['f']};var instrument_dom=[];window['loadSimple']=function(_0x33036d){const _0x45e422=_0x61ee;lowLag['load']([_0x33036d+_0x45e422('0x13'),_0x33036d+_0x45e422('0x2c')],_0x33036d);},window[_0x892688('0x22')]=function(_0x38d193,_0x5eb3b0,_0x108c87){const _0x3c8759=_0x892688;for(i=_0x5eb3b0;i<=_0x108c87;i++){lowLag[_0x3c8759('0x22')]([_0x38d193+i+_0x3c8759('0x13'),_0x38d193+i+_0x3c8759('0x2c')],_0x38d193+i);}};var r_hand,l_hand,mouth;document[_0x892688('0x2e')](_0x892688('0x28'),function(){const _0x53bc63=_0x892688;r_hand=document[_0x53bc63('0x26')](_0x53bc63('0xf')),l_hand=document[_0x53bc63('0x27')](_0x53bc63('0x1d')),mouth=document[_0x53bc63('0x27')](_0x53bc63('0x18'));for(i in keyMap){instrument_dom[i]=document[_0x53bc63('0x27')]('#'+i);}document[_0x53bc63('0xc')]===_0x53bc63('0x9')&&function(){const _0x4b8a69=_0x53bc63;lowLag[_0x4b8a69('0x8')]({'urlPrefix':_0x4b8a69('0x5'),'debug':_0x4b8a69('0x21')}),window[_0x4b8a69('0x22')](_0x4b8a69('0x17'),0x0,0x1),window[_0x4b8a69('0x22')](_0x4b8a69('0x2a'),0x0,0x9),window['load']('marimba',0x0,0x9),window[_0x4b8a69('0x2b')](_0x4b8a69('0x11')),window['loadSimple'](_0x4b8a69('0x2d')),window['loadSimple'](_0x4b8a69('0x12')),window['loadSimple']('cowbell');}();let _0x450c17=document[_0x53bc63('0x27')](_0x53bc63('0x0'));_0x450c17[_0x53bc63('0x1f')]=function(){const _0x2fc96c=_0x53bc63;let _0x1ff19b=document[_0x2fc96c('0x27')]('header')['style'][_0x2fc96c('0x1b')];document[_0x2fc96c('0x27')](_0x2fc96c('0x24'))['style'][_0x2fc96c('0x1b')]=_0x1ff19b==_0x2fc96c('0x21')?_0x2fc96c('0x2'):_0x2fc96c('0x21'),console[_0x2fc96c('0x25')]();};}),['keydown','touchstart'][_0x892688('0x20')](_0x5e0c59=>window[_0x892688('0x2e')](_0x5e0c59,_0xe3c437=>{const _0x8f9d0=_0x892688;let _0x4df453;if(_0x5e0c59!==_0x8f9d0('0x16')&&_0xe3c437[_0x8f9d0('0xe')][_0x8f9d0('0x1a')][_0x8f9d0('0x29')]('keytap'))_0x4df453=_0xe3c437[_0x8f9d0('0xe')][_0x8f9d0('0x1c')]['toLowerCase']();else _0x4df453=_0xe3c437[_0x8f9d0('0x14')];for(instrument in keyMap){let _0x18b140=keyMap[instrument][_0x8f9d0('0x6')];if(keyMap[instrument]['includes'](_0x4df453)){if(instrument!==_0x8f9d0('0x11'))instrument_dom[instrument][_0x8f9d0('0x3')][_0x8f9d0('0xd')]='visible';if(_0x18b140==0x1){lowLag[_0x8f9d0('0x4')](instrument);if(instrument==_0x8f9d0('0x11'))mouth[_0x8f9d0('0xb')](_0x8f9d0('0x19'),'a');else l_hand[_0x8f9d0('0xb')](_0x8f9d0('0x19'),_0x8f9d0('0x23'));}else{if((keyMap[instrument][_0x8f9d0('0x15')](_0x4df453)+_0x18b140-0x1)%_0x18b140>=_0x18b140/0x2)l_hand[_0x8f9d0('0xb')](_0x8f9d0('0x19'),'active');else r_hand[_0x8f9d0('0xb')]('class',_0x8f9d0('0x23'));lowLag[_0x8f9d0('0x4')](instrument+keyMap[instrument][_0x8f9d0('0x15')](_0x4df453));}}else instrument!==_0x8f9d0('0x11')&&(instrument_dom[instrument][_0x8f9d0('0x3')][_0x8f9d0('0xd')]=_0x8f9d0('0x1'));}})),['keyup',_0x892688('0x7')][_0x892688('0x20')](_0x2951b3=>window[_0x892688('0x2e')](_0x2951b3,_0x2ef169=>{const _0x38fc0b=_0x892688;let _0x269526;if(_0x2951b3!==_0x38fc0b('0x10')&&_0x2ef169[_0x38fc0b('0xe')][_0x38fc0b('0x1a')][_0x38fc0b('0x29')](_0x38fc0b('0xa')))_0x269526=_0x2ef169[_0x38fc0b('0xe')]['innerText']['toLowerCase']();else _0x269526=_0x2ef169[_0x38fc0b('0x14')];for(instrument in keyMap){keyMap[instrument][_0x38fc0b('0x1e')](_0x269526)&&(r_hand[_0x38fc0b('0xb')]('class','a'),l_hand[_0x38fc0b('0xb')](_0x38fc0b('0x19'),'a'),mouth[_0x38fc0b('0xb')]('class','active'));}}));