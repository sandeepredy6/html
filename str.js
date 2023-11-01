let str="swiss"
let i=str;
let dup =[]
for(let i=0;i<str.length;i++){
    dup[i] = str[i]
    let count=0
    let isPrev = false
    // check previos number list
    for(let k=0;k<i;k++){
        if(str[i] == str[k]) isPrev = true
    }
    if(isPrev == false){
        for(let j=i+1;j<str.length;j++){
            if(str[i] == str[j]) {
                count++
                break
            }// if
        }// j
        if(count == 0) {
            console.log("res--->"+str[i])
            break
        }
    }}