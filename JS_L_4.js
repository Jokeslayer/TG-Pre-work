let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.

let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

console.log(getSubTotal(orderCount));

const getTax = (itemCount) =>{
  return getSubTotal(itemCount) * 0.06;
};

const getTotal = (itemCount) =>{
  return getSubTotal(itemCount) + getTax(itemCount);
};

console.log(getTotal(orderCount));


function isGreaterThan(numberOne,numberTwo){
  if(numberOne > numberTwo){
    return true;
  }
  else{
    return false;
  }
}

isGreaterThan(5,2);

isGreaterThan(4,10);

const isGreaterThan = (numberOne, numberTwo) =>{
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
};
