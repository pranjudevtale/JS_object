
var my_dict = {
    'a':50, 
    'b':58, 
    'c':56,
    'd':40, 
    'e':100, 
    'f':20
    }
var list_key=[]
for (i in Array.form(3)){
    max=0
    for( x in my_dict){
        if (max<my_dict[x]){
            max=my_dict[x]
            key=x
        }
    list_key.push(max)
    my_dict.pop(key)
    }
}
console.log(list_key)
