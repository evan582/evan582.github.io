function doMath() {
    let n1 = number(document.getElementById(n1).value);
    let n2 = number(document.getElementById(n2).value);

    let a = n1 + n2;
    let s = n1 - n2;
    let m = n1 * n2;
    let d = n1 / n2;
    let mod = n1 % n2;
    var pow = n1 ** n2;
    let sq1 = Math.sqrt(n1);
    let sq2= Math.sqrt(n2);

    let out = "";
    out += "add:" + a + "<br>";
    out += "sub:" + s + "<br>";
    out += "mul:" + m + "<br>";
    out += "div:" + d + "<br>";
    out += "mod:" + mod + "<br>";
    out += "pow:" + pow + "<br>";
    out += "squrt(n1):"
}