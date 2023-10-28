function findLength(num){
    let len=0
    while(num != 0){
        num = num /10;
        num=num | 0
        len++
    }
    return len
 }
 let n=9321
 let m=1235
 let nLen = findLength(n)
 let mLen = findLength(m)
 if(nLen == mLen){
    let CArr = [0,0,0,0,0,0,0,0,0,0]// 0--9
   
    let nr,mr
     while(n != 0){
        nr = n % 10;
        mr= m % 10
        n = n / 10;
        n = n | 0;
        m = m / 10
        m = m | 0
        CArr[nr]++// nArr[2]++
        CArr[mr]--
    }
    let isAnagram = true
    for(let i =0;i<=9;i++){
        if(CArr[i] != 0){
            isAnagram = false
            break
        }
    }
      if(isAnagram == true) console.log("Both are anagrams")
    else console.log("Not Anagrams")
 }
 else console.log("Not Anagrams")