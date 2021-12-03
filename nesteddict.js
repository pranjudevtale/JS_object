var d={'a':20,'b':40,'c':{'d':11,'d':12,},'e':{'f':10}}
var sum=0
for (i in d){
    if (typeof(i)=='object'){
        for (j in i){
            if (typeof(j)=='object'){
                for (k in j){
                     sum+=k
                }
            }
             else{
                sum+=j
            }
        }
    }
     else{
        sum+=i
    }
}
console.log(sum)

