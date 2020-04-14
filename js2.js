

function heeHaw() {
    let n = 1;

    while(n < 100) {

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

        n++;
    }
}

heeHaw();