/**
 * Challenge:
 * In this challenge you are going to use Object.freeze to prevent 
 * mathematical constants from changing. You need to freeze 
 * the MATH_CONSTANTS object so that no one is able to alter the 
 * value of PI, add, or delete properties.
 * 
 */

 /**
  * Freezes an object to prevent mutation of property values
  * 
  * @return MATH_CONSTANT freezed object
  */

function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // change code below this line
  
    Object.freeze(MATH_CONSTANTS);

    // change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();