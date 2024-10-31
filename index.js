exports.fibonacci = function fact(n) { //recursive function
    if(n==0 || n==1)
        return n;
    return n * fact(n-1);
}