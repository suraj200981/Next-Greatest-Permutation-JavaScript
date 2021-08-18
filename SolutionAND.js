/**
 *
 * Author: Suraj Sharma
 * Github: https://github.com/suraj200981
 */

/**
 * The following is the function where the solution shall be written
 */

// expected ouput 632,623,362,326,263,236
function solution(input) {
  //regular expression filtering out all letters and symbols from the input
  input = input.replace(/\D/g, "");

  if (input === "") {
    return "please enter numbers";
  } else if (input === "") {
    return "please enter numbers";
  }

  let myFunc = (num) => Number(num);

  var intArr = Array.from(String(input), myFunc);

  var temp = intArr;
  var smallestNumber = temp.sort(); // smallest number found from the digits

  var allPermutationsFound = false;
  var allPermuntations = [];
  allPermuntations.push(smallestNumber.toString().replaceAll(",", ""));

  var count = 1;
  allPermuntations.push(
    findTheNextBiggestNumber(smallestNumber, smallestNumber.length).replace(
      ",",
      ""
    )
  );

  //keep finding next biggest
  while (allPermutationsFound == false) {
    if (
      allPermuntations.includes(
        intArr.sort().reverse().toString().replaceAll(",", "")
      )
    ) {
      break;
    }
    allPermuntations.push(
      findTheNextBiggestNumber(
        allPermuntations[count],
        allPermuntations[count].length
      ).replace(",", "")
    );
    count++;
  }

  return allPermuntations.reverse().toString();
}

function findTheNextBiggestNumber(arrInput, arrayLength) {
  var temp = arrInput.toString().replaceAll(",", "");

  let myFunc1 = (num1) => Number(num1);

  var array = Array.from(String(temp), myFunc1); //array to string

  var x = 0,
    y = 0,
    beginningArr = 0,
    pointOfChange = 0,
    substitutionNum = 0,
    newList = [],
    finalInt = 0;

  //starting from the right to left
  for (x = arrayLength - 2; x < arrayLength; x--) {
    newList.unshift(array[x + 1]);
    //if the first number to the right is not accending then this is the point of change
    if (array[x] < array[x + 1]) {
      pointOfChange = array[x]; //assigning point of chnage
      for (y = newList.length - 1; y >= 0; y--) {
        //find the number to swap point of change with
        if (newList[y] > pointOfChange) {
          substitutionNum = newList[y];
          //swap array elements here
          array[x] = substitutionNum;
          newList[y] = pointOfChange;

          beginningArr = array;
          finalInt = beginningArr.slice(0, x + 1).toString(); //beginning
          finalInt += "" + newList.reverse().toString().replace(",", ""); //end
          return finalInt.replace(",", ""); //final number
        }
      }
    }
  }
}
// some example inputs
console.log(solution("326")); // expected ouput 632,623,362,326,263,236
console.log(solution("A 3B2 C6D")); // expected ouput 632,623,362,326,263,236
