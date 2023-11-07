class Person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country

    }

    details(){
        document.write(`Hi my Name is ${this.name}<br>`);
        document.write(`My  age is ${this.age} <br>`);
        document.write(`My country is ${this.country} <br>`);
    }


}

let Person1=new Person("David",25,"India" +"<br>");
let Person2=new Person("jessy",25,"Bangladesh");

Person1.details();

Person2.details();