/* 
Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. 
*/

const input = 'a whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];
for(let inputIndex = 0; inputIndex < input.length; inputIndex ++){
  //console.log('InputIndex: ' + inputIndex);
  for(let vowel = 0; vowel < vowels.length; vowel++){
    // console.log(vowel);
    if(input[inputIndex] === vowels[vowel]){
      if(input[inputIndex] === 'e'){
        resultArray.push('ee');
      }else if(input[inputIndex] === 'u'){
        resultArray.push('uu');
      }else{
        resultArray.push(input[inputIndex]);
      };
    };
  };
};

console.log(resultArray.join('').toUpperCase());
