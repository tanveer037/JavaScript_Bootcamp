function add(a,b){
    return a+b
}

let x = add(2,3)

console.log(x)

//apply() method

const person1 = {
    firstName: "Tanveer",
    lastName: "Tayeb"
  };
  
  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
  
    location: function(country, city) {
    // Directly call fullName from the person object, 
    // if I don' do this, it will cause an error, 
    // because the 'this' here would refer to person1, 
    // and person1 does not have a fullname function
      return 'I am ' + person.fullName.call(this) + ' from ' + city + ', ' + country;
    }
  };
  
  
  per = person.fullName.apply(person1);

  console.log(per)
  
  const loc = person.location.apply(person1, ['Bangladesh', 'Dhaka']);
  console.log(loc);
  