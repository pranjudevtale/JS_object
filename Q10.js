var p=require("readline-sync");
var n=p.questionInt("enter the number")
var student={}
for(let i=0;i<n;i++){
    var a=require("readline-sync");
    var name=a.question("enter the name:-")
    var marks=a.questionInt("enter the mark:-");
    student[name]=marks;

}
console.log(student)

