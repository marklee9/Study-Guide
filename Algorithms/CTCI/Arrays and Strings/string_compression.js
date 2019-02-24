/*

String Compression: 

Implement a method to perform basic string compression 
using the counts of repeated characters. For example, 
the string aabcccccaaa would become a2blc5a3. If the "compressed"
string would not become smaller than the original string, 
your method should return the original string. You can assume 
the string has only uppercase and lowercase letters(a - z).

*/

function stringCompression(string) {
  let result = "";

  let letter = string[0];
  let counter = 1; 
  for (let i = 1; i < string.length; i++) {
    let ch = string[i];

    if (letter === ch) {
      counter++;
    } else {
      result += letter + counter;
      letter = ch;
      counter = 1;
    }
  }

  return result + letter + counter;
}