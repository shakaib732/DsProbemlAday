//Count the number of unique numbers in a given sorted array.
//Input: [1,1,2,2,3,4,4,5,6,7,8,8] ;   Output=8;



//Time Complexity: O(n)    Space Complexity: O(n)
function CountUnique(arr){
    let set = new Set(arr)
    return set.size;
}





//Time Complexity: O(n) +   O(n)  => O(n)     Space Complexity: O(1);  
function CountUnique2(arr){
    let map={};
    let char;
    for(let i=0;i<arr.length;i++){      //O(n) time
        char = arr[i];
        if(char in map){
            map[char]+=1;
        } 
        else{
            map[char]=1;
        }
    }
    char=0;
    for(let id in map){                 //O(n) time
        char++;
    }
    return char;
}





// Time Complexity: O(n)      Space Complexity:  O(1)
function CountUnique3(arr){
    let i=0;
    for(let j=0;j<arr.length;j++){
        if(arr[i] != arr[j]){
            i++;
            arr[i]=arr[j]
        }
        
    }
    return i+1;
}




const result = CountUnique3([1,1,2,2,3,4,4,5,6,7,8,8,9,10,10,99,99,99]);
console.log(result);