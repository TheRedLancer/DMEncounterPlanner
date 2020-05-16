function a() {
    function b() {
        var c;
        console.log(c);
    }

    var c = 4;
    console.log(c);
    b();
}
console.log(34);
var c = 1;
console.log(c);
a();
console.log(c);