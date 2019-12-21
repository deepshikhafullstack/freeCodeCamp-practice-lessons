/**
 * Destructuring of Objects
 */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // change code below this line
  
  const {today,tomorrow} = HIGH_TEMPERATURES;
  
  
  // change code above this line
  
  console.log(yesterday) // should be not defined
  console.log(today); // should be 77
  console.log(tomorrow); // should be 80

  

const user = {
    name: 'Shouvik',
    age: 31,
    phone: 9331213421,
    experties: ['js', 'php', 'html']
};

/**
 * Returns information about user
 * @param {Object} user
 * @returns {string} 
 */
const getUserInfo = ({ name: teamMember, age, phone, experties }) => teamMember + ' is ' + age + ' years old. He is expert in ' + experties[0] + '. His contact number is ' + phone;

console.log(getUserInfo(user));

/**
 * Destructuring Assignment to Assign Variables from Objects
 * 
 */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // change code below this line
    
  const {today:highToday,tomorrow:highTomorrow} = HIGH_TEMPERATURES;
  
  // change code above this line
  
  console.log(yesterday) // should be not defined
  console.log(highToday); // should be 77
  console.log(highTomorrow); // should be 80
  

  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // change code below this line
    
  const {today:{low:lowToday, high: highToday}} = LOCAL_FORECAST;
  // change code above this line
  
  console.log(lowToday); // should be 64
  console.log(highToday); // should be 77

/**
 * Destructuring Assignment to Pass an Object as a Function's Parameters
 */
  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // change code below this line
  const half = ({max,min}) => (max + min) / 2.0; // use function argument destructuring
  // change code above this line
  
  console.log(stats); // should be object
  console.log(half(stats)); // should be 28.015
  
 
  
