
// https://www.section.io/engineering-education/keyboard-events-in-javascript/
// Add event listener on keypress

/* If the keypress event is supported, it is fired next and repeated while the key is pressed down. */

document.addEventListener('keypress', (event) => {
    let name = event.key;
    let unicode = event.which;
    let code = event.code;

    // KeyCode = Unicode
    document.getElementById("idOutputKeycode").innerHTML = unicode;

    // Key output
    document.getElementById("idOutput1").innerHTML = name;
    // Unicode output keyCode = Unicode
    document.getElementById("idOutput2").innerHTML = unicode;
    // 
    document.getElementById("idOutput3").innerHTML = code;
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);

// https://www.w3schools.com/jsref/event_key_code.asp
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_code

function myFunction(event) {
    var x = event.code;
    document.getElementById("demo1").innerHTML = x;
    myFunction1(event);
}

// https://www.w3schools.com/jsref/event_key_keycode.asp
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode

function myFunction1(event) {
    let unicode = event.which;
    document.getElementById("demo2").innerHTML = unicode;
}
