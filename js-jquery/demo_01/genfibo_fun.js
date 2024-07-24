var genfibo = function(n){
    var N = [];
    var x = 0;
    var y = 1;
    var z = x + y;
    N.push(x);
    N.push(y);
    N.push(z);
    for(i = 3; i < n;i++){
        x = y;
        y = z;
        z = x + y;
        N.push(z);
    }
    return N;
}

console.log(genfibo(20));