// Link: https://www.codewars.com/kata/533c46b140aafec05b000d31
function translate(sentence) {
	const vowels = ['a', 'e', 'i', 'o', 'u']
  const panctuations = ['.', '!', '?', ':', ';']
  const numbers = [0,1,2,3,4,5,6,7,8,9]
  const arr = []

  const is_up = s => s.at(0).charCodeAt(0) >= 65 && s.at(0).charCodeAt(0) <= 95
  
  const strings = sentence.split(' ').forEach((str, idx) => {
    str.split('').reduce(())
  });


  console.log(strings)

};

translate('hello world')