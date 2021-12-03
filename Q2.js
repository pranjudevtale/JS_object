var a=require("readline-sync");
var n=a.questionInt("enter the number:-")
d={}
for(var i=1;i<=n;i++){
    d[i]=i**2
}
console.log(d);