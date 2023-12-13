let person={
    "name": "Muhammad Hamza",
    "age": "24",
    "phone": "03144099558",
    "address" : {
        "city": "lahore",
        "country": "Pakistan"
    }
}

// shallow copy
let shallowPerson = {... person};
person.address.city= "Karachi";
console.log("shallowPerson-city:",shallowPerson.address.city);
console.log("person-city:",person.address.city);


// deep copy
let deepPerson = JSON.parse(JSON.stringify(person));

deepPerson.address.city="Islamabad";
console.log("deepPerson-city:", deepPerson.address.city);
console.log("person-city:",person.address.city)