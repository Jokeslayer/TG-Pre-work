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

const takeOrder = (topping, crustType) => {
  console.log('Order:'+ crustType+ ' pizza topped with ' + topping);
};

takeOrder('mushrooms','thin crust');
takeOrder('Ziti','regular');
takeOrder('chicken','Stuffed crust');
