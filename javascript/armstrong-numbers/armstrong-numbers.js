//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = armNumber => {
  if(!Number.isNaN(armNumber)){
    const armArr = String(armNumber).split('');
    const armArrLength = armArr.length;
    const armSum =  armArr.reduce((acc, item) => {
      return acc + Math.pow(Number(item), armArrLength)
    }, 0);

    return armSum === armNumber;
  } else {
    throw new Error("Error");
  }
};
