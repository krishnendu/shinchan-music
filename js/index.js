if ('serviceWorker' in  navigator)
{
    navigator.serviceWorker.register('../sw.js').then(registration =>{
        console.log('SW Registered');
        console.log(registration);
    }).catch(e => {
        console.log('SW Registration Failed !!');
        console.log(e);
    })
}
const keyMap = {
  marimba: ['p', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o'],
  keyboard: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  bongo: ['d', 'a'],
  shinchan: [' '],
  cymbal: ['c'],
  tambourine: ['b'],
  cowbell: ['f']
}
var instrument_dom = [];

window.loadSimple = function (file) {
  lowLag.load([file + ".mp3", file + ".wav"], file);
};
window.load = function (file, start, end) {
  for (i = start; i <= end; i++) {
    lowLag.load([file + i + ".mp3", file + i + ".wav"], file + i);
  }
};
var r_hand, l_hand, mouth;
document.addEventListener("readystatechange", function () {
  r_hand = document.getElementById("paw-right");
  l_hand = document.querySelector("#paw-left");
  mouth = document.querySelector("#mouth");
  for (i in keyMap) {
    instrument_dom[i] = document.querySelector('#' + i);
  }
  if (document.readyState === "complete") {
    (function () {
      lowLag.init({
        urlPrefix: "./sounds/",
        debug: "none",
      });
      window.load("bongo", 0, 1);
      window.load("keyboard", 0, 9);
      window.load("marimba", 0, 9);
      window.loadSimple("shinchan");
      window.loadSimple("cymbal");
      window.loadSimple("tambourine");
      window.loadSimple("cowbell");
    })();
    document.querySelector( 
      "#loader").style.display = "none"; 
    document.querySelector( 
      "body").style.visibility = "visible"; 
  }
  else{
    document.querySelector( 
      "body").style.visibility = "hidden"; 
    document.querySelector( 
      "#loader").style.visibility = "visible"; 
  }
  let info = document.querySelector('#info');
  info.onclick = function () {
    let condition = document.querySelector('header').style.display;
    document.querySelector('header').style.display = (condition == 'none') ? 'block' : 'none';
    console.log()
  }
});

["keypress", "touchstart"].forEach((event) =>
  window.addEventListener(event, (e) => {
    let key;
    if (event !== 'keypress' && e.target.classList.contains("keytap")) {
      key = e.target.innerText.toLowerCase();
      if(key==='space')
        key=' ';
    }
    else
      key = e.key;

    for (instrument in keyMap) {
      let instrument_length = keyMap[instrument].length;

      if (keyMap[instrument].includes(key)) {
        if (instrument !== 'shinchan') instrument_dom[instrument].style.visibility = 'visible';
        if (instrument_length == 1) {
          lowLag.play(instrument);
          if (instrument == "shinchan")
            mouth.setAttribute("class", "a");
          else
            l_hand.setAttribute("class", "active");
        }
        else {
          if ((keyMap[instrument].indexOf(key) + instrument_length - 1) % instrument_length >= instrument_length / 2)
            l_hand.setAttribute("class", "active");
          else
            r_hand.setAttribute("class", "active");
          lowLag.play(instrument + keyMap[instrument].indexOf(key));

        }

      }
      else if (instrument !== 'shinchan') {
        instrument_dom[instrument].style.visibility = 'hidden';
      }

    }
  })
);

["keyup", "touchend"].forEach((event) =>
  window.addEventListener(event, (e) => {
    let key;
    if (event !== 'keyup' && e.target.classList.contains("keytap")) {
      key = e.target.innerText.toLowerCase();
      if(key==='space')
        key=' ';
    }
    else
      key = e.key;
    for (instrument in keyMap) {
      if (keyMap[instrument].includes(key)) {
        r_hand.setAttribute("class", "a");
        l_hand.setAttribute("class", "a");
        mouth.setAttribute("class", "active")
      }
    }
  })
);