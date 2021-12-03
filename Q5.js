var a=require("readline-sync");
var n=a.question("enter the proper name:-")
let dict={'name':'Raju', 'marks':56}
for(i in dict){
    if(i==n){
        console.log("it is exist")
        break;
    }
    else{
        console.log("it is not exist")
        break;
    }
}
