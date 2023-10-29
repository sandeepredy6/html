
    let arr = [ 1, 2, 2, 2, 2, 3, 12 ];
     let n = arr.length;
 
    let maxCount = 0;
    
    let k= -1;
    for(let i = 0; i < n; i++) 
    {
        let count = 0;
        
        for(let j = 0; j < n; j++) 
        {
            if (arr[i] == arr[j])  
        
                count++;
        }
 
        // Update maxCount if count of
        // current element is greater
        if (count > maxCount) 
        {
            maxCount = count;
            k = i;
        }
    }
 
    // If maxCount is greater than n/2
    // return the corresponding element
    if (maxCount > n / 2)
        console.log(arr[k]);
    else
       console.log("fales");

// Driver code

// Function calling
console.log(arr,n);
 