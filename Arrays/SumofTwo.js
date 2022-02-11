//Given a array and a number, check if there is a pair in the array whose sum equals to the given numberand return the pair in an array.
//input: arr:-[1,6,4,8,4,9,4,7], num=11
//output:[4,7]


//Time Complexity:  O(n) * O(n)   => O(n^2)     Space Complexity : O(1)
function SumofTwo(arr,num){
    for(let i=0;i<arr.length;i++){          //O(n)  Time
        for(let j=i+1;j<arr.length;j++){    //O(n)  Time
            if(arr[i] + arr[j] === num){
                return [arr[i],arr[j]];
            }
        }
    }
    return false;
}



//Time Complexity : O(nlogn)  + O(n)  => O(nlogn)   Space Complexity = O(1)
function SumofTwo2(arr,num){
    let first =0;
    let last = arr.length - 1
    arr=arr.sort((a,b)=>{           //O(nlogn)  Time
        return a-b;
    })
    

    while(first<last){                          //O(n)
        if(arr[first] + arr[last] === num){
            return ([arr[first],arr[last]])
        }
        if(arr[first] + arr[last] > num){
            last-=1;
        }
        else{
            first+=1;
        }
    }
    return false;
}











const result = SumofTwo2([1,6,4,8,4,9,4,7],11);
console.log(result)