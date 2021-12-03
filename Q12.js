var dict={
    'alex':['sub1','sub2','sub3'],
    'pranju':['sub1','sub2']
}
var count=0
for(i in dict){
    for(j in dict[i]){
        count++
    }
}
console.log(count)