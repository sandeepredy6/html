let num =[9, 4, 5, 9, 7, 4]
// 6
let dup =[]// dup[0] =9 ,,dup[1]=4
for(let i=0;i<num.length;i++){
    dup[i] = num[i]
    let count=0
    let isPrev = false
    // check previos number list
    for(let k=0;k<i;k++){
        if(num[i] == num[k]) isPrev = true
    }
    if(isPrev == false){
        for(let j=i+1;j<num.length;j++){
            if(num[i] == num[j]) {
                count++
                break
            }// if
        }// j
        if(count == 0) {
            console.log("res--->"+num[i])
            break
        }
    }
    
}// i
console.log("ends")