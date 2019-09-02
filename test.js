function  myfunc() {
    document.getElementById("demo1").innerHTML="paragraph changed";
}
function  myFunc(a,b) {
    return a*b;
}
var person={
    f_name:"Farhan",
    l_name:"Shakoor",
    id:2325,
    full_name:function() {
        return this.f_name + " " + this.l_name;
    }
}
var firstname,lastname,fullname;
var car={type:"Fiat",model:"500",color:"white"};
firstname="Farhan";
lastname="Shakoor";
fullname=firstname+' '+lastname;
var z=myFunc(4,5);
document.write(5+6);
console.log(2+3);
//alert(fullname);
//document.getElementById("demo").innerHTML=car.color+" "+car.model+" "+car["type"] + " "+ person.full_name();