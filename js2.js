document.getElementById("submitBTN").onclick = verifyInput;

function heeHaw(num) {

    for(let n = num; n <= 100; n++) {

        if((n % 3) == 0 && (n % 5) != 0) {
            document.write("Hee !");
            document.write("<br>");
        }
        else if((n % 5) == 0 && (n % 3) !=0) {
            document.write("Haw !");
            document.write("<br>");
        }
        else if((n % 3) == 0 && (n % 5) == 0) {
            document.write("Hee Haw");
            document.write("<br>");
        }
        else{
            document.write(n);
            document.write("<br>");
        }
    }
}

function verifyInput() {
    // check user input is a valid number
    let number = document.getElementById("userInput").value;
    if(isNaN(number) || number == "") {
        let errFirst = document.getElementById("errNumber");
        errFirst.style.visibility = "visible";
    }
    else {
        heeHaw(number);
    }
}

