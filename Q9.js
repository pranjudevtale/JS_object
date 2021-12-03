const list=[{'first':1},{'second':2},{'three':3},{'four':4},{'five':5},{'six':6}]
let a=[];
for (i in list){
    for(j in i){
        if(!a.includes(i[j])){
            a.push(i[j])
        }

    }
}
console.log(a)