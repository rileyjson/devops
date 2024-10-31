exports.fibonacci = function fact(n) { //recursive function
    if(n==0 || n==1)
        return n;
    else if (n < 0)
        return undefined;
    return n * fact(n-1);
}