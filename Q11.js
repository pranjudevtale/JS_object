const word='MISSISSIPPI'
let a={}
var list=[]
for(var i of word){
    if(list.includes(i)){
        a[i]=a[i]+1

    }
    else{
        list.push(i);
        a[i]=1;
    }
}
console.log(a)