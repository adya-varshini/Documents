//Write a “person” class to hold all the details.
class Person {
    constructor(name, age,des) {
      this.name =name;
      this.age = age;
      this.des= des;
    }

    Name() {
      return this.name ;
    }

    Age() {
      return this.age;
    }
  
    
    Des() {
       return this.des;
    }
  }
  
 
  const person1 = new Person('adya', 30, 'entreprenuer');
  const person2 = new Person('aara', 25, 'student');
  
  
  console.log("NAME :" + " "+ person1.Name()); 
  console.log("DESIGNATION:"+" " + person1.Des()); 
  console.log("AGE:"+" "+ person1.Age());
  console.log("NAME :" + " " + person2.Name()); 
  console.log("DESIGNATION:"+" "+ person2.Des()); 
  console.log("AGE:"+" "+ person2.Age());
  
//write a class to calculate the uber price.
  class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distance, duration) {
      const distanceCost = distance * this.costPerMile;
      const durationCost = duration * this.costPerMinute;
      const totalFare = this.baseFare + distanceCost + durationCost;
  
      return totalFare;
    }
  }
  
  

  const uberXPriceCalculator = new UberPriceCalculator(2, 1.75,1);
  
  const distanceInMiles = 10;
  const durationInMinutes = 20;
  
  const totalPrice = uberXPriceCalculator.calculatePrice(distanceInMiles, durationInMinutes);
  console.log("Uber Price:"+ JSON.stringify(totalPrice));
