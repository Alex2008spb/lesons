let var1 = 10;
let var2 = "привет";
console.log(`var1=${var1}, var2 =${var2}`);
[var1, var2] = [var2, var1];
//swap(var1, var2);
console.log(`var1=${var1}, var2 =${var2}`);

/*function swap(v1, v2) {
    let temp = v1;
    v1 = v2;
    v2 = temp;
    let temp = var1;
    var1 = var2;
    var2 = temp;
}*/