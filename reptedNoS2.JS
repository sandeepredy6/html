
    let arr = [ 1, 2, 2, 2, 2, 3, 12 ];
     let n = arr.length;
 
    let maxCount = 0;
    
    let k= -1;
    for(let i = 0; i < n; i++) {
    
        let count = 0;
        
        for(let j = 0; j < n; j++) 
        {
            if (arr[i] == arr[j])  
        
                count++;
        }
 
        if (count > maxCount) 
        {
            maxCount = count;
            k = i;
        }
 
      { if (maxCount > n / 2)
        console.log(arr[k]);
    else
       console.log("fales");
        }
console.log(arr,n);
        }
    