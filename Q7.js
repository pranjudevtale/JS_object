var my_dict={
    1:'NAVGURUKUL',
    2:'IN',
    3:{
        'A':'WELCOME',
        'B':'TO',
        'C':'NAVGURUKUL'
    }
}
for(i in my_dict){
    if(typeof my_dict[i]=="object"){
        delete my_dict[i]['A']
    }
    console.log(my_dict);
}