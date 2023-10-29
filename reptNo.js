let arr = [ 1, 1, 2, 4, 4, 4, 6, 6, 9];
let n = arr.length;
 
 let maxCount = 0;
    let index= -1; // sentinels
     
    for(let i = 0; i < n; i++) 
    {
        let count = 0;
        for(let j = 0; j < n; j++) 
        {
            if (arr[i] == arr[j])
                count++;
        }
 
       
        if (count > maxCount) 
        {
            maxCount = count;
            index = i;
        }
    }
 
    
    if (maxCount > n / 2)
        console.log(arr[index]);
    else
       console.log("false");

console.log(n);
 