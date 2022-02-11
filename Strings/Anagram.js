// Check if a two given String are anagram or not ( Google what Anagram is!)
// input: "hello", "lehlo"  output: true




//Aloorithm: 1.check if the length of both string is equal or not.
//           2 convert the string into array.
//           3.Sort the array
//           4.Convert the array back into string
//           5. Check if equal or not!

//Time Complexity :[O(n) + O(nlogn) + O(n) + O(n) + O(nlogn) + O(n) => 4O(n) + 2O(nlogn) => O(nlogn)]
//Space Complexity : [O(n) + O(n)  => O(n)]
function Anagram(string1, string2) {
    if (string1.length != string2.length) {
        return false;
    }
    else {
        var s1 = string1.split("")                  //O(n) time;
        s1 = s1.sort()                              //o(nlogn) time;
        s1 = s1.join() || s1.toString()              //O(n) time; 

        var s2 = string2.split("")                   //O(n) time;
        s2 = s2.sort()                              //o(nlogn) time; 
        s2 = s2.join() || s2.toString()            //O(n) time

        return s1 === s2;
    }
}


//Algorithm: 1.check if length of both the string is equal or not
//           2.run a loop, iterating through each charcter in the given strings;
//           3.take out the ASCII value of each character and add it to variable
//           4.after calculating the sum of ASCII values for both the string, compare them!

//Time Complexity: O(n) + O(n) + O(n) => 3O(n) => O(n),  Space Complexity: O(1)
function Anagram2(str1, str2) {
    let sum1 = 0
    let sum2 = 0;
    str1 = str1.toLowerCase();   //O(n) time
    str2 = str2.toLowerCase();   //O(n) time
    if (str1.length != str2.length)
        return false;

    for (let id in str1) {                          //O(n) time
        sum1 += parseInt(str1.charCodeAt(id));   

        sum2 += parseInt(str2.charCodeAt(id));   
    }
    return sum2 === sum1;
}



//Algorithm: 1.iterate through each charater in the first string
//           2.Create an empty map {object in javascript}
//           3.check if the charater is present in the map or not, if not insert the character as key and the value for it as 1.
//           4.if present, add 1 to the value for the corresponding key(character) in the map.
//           5.Now iterate through each character in the second string.
//           6.check if the character is present in the map, if present then subtract -1 from the value of the corresponding key(character)
//           7.if not, return false.
//           8. Now iterate through the map itself
//           9. if any value is either more or less than 0, return false.
//           10. if none found as less or more than zero in the map, return true.



//Time complexity: O(n) + O(n)  + O(n)  => O(n)   Spcae Complexity : O(1)
function Anagram3(str1,str2){
    str1= str1.toLowerCase();
    str2= str2.toLowerCase();
    let map={};
    let char;
    for(let i=0;i<str1.length;i++){     // O(n) Time
        char = str1[i];
        if(char in map){
            map[char]+=1;
        }
        else{
            map[char]=1;
        }
    }
    for(let i = 0;i<str2.length;i++){       // O(n) Time
        char = str2[i];
        if(char in map){
            map[char]-=1;
        }
        else{
            return false;
        }
    }
    for(let id in map){             // O(n) Time
        if(map[id] !=0){
            return false;
        }
    }
    return true;
}









const result = Anagram3("hello", "HELLO");
console.log(result)

