//find the first pair in an given array whose sum is 0(Considering there is atleast 1 pair and the array is sorted);
// input: [-5,-4,-3,-2,0,2,4,6,9]  output: [-4,4];



//Time Complexity: O(n^2)  Space Complexity: O(1);
function SumZero(array){
    for(const el of array)              //Iterating through each item in the array
    {
        for(let i=0; i<array.length ; i++){         //Again iterating each array and finding the sum.
            if(el + array[i] === 0)
            {
                return [el,array[i]]
            }
        }
    }
}


//Time Complexity: O(n)  Space Complexity: O(1);
function SumZero2(array){
    var first = 0;
    var last = array.length -1;
    while(first < last){
        if(array[first] + array[last] == 0){         // IF sum is 0 return the pair
            return [array[first],array[last]]
        }
        else if(array[first] + array[last] > 0){     // If the sum is more than zero then the positive number should be decreased in order to get close to 0
            last-=1;
        }
        else{
            first+=1;                                //// If the sum is less than zero then the negative number should be decreased in order to get close to 0
        }
    }
}





//CALLING THE FUNCTION:
const result = SumZero([-5,-4,-3,-2,0,2,4,6,9]);
console.log(result)
