// Check if a two given String are anagram or not ( Google what Anagram is!)
// input: "hello", "lehlo"  output: true



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

