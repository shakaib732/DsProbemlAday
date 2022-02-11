//Given two array, find fi the second array id a sub-qequence of the first. 
// input : arr1=[3,5,2,4,1,6,4,2,3,7,5], arr2=[2,1,2,3]


//Time Complexity: O(n)     Spcae Complexity: O(1);
function subSequence(arr1, arr2) {
    var pos1 = 0;
    var pos2 = 0;
    while (pos1 != arr1.length - 1) {
        if (arr1[pos1] == arr2[pos2]) {
            pos2 += 1;
        }
        pos1 += 1;
    }
    return pos2 === arr2.length ;
}



//Time Complexity: O(n)  + O(n)    => O(n)     Space Complexity :  O(1)

function subSequence2(arr1,arr2){
    let map={};
    let pos=0;

    for(let i=0; i<arr1.length;i++){        //O(n) Time
        if(arr2[pos] ==  arr1[i]){
            map[pos] = i;
            pos+=1;
        }
        
    }
    var last=0;
    if(pos!=arr2.length){
        return false;
    }
    else{
        for(let id in map){             //O(n) Time
            if(last>id){
                return false;
            }
            else{
                last = id;
            }
        }
    }
    return true;

}


const result = subSequence2([3,5,2,4,1,6,4,2,3,7,5], [2,1,2,3] )
console.log(result);