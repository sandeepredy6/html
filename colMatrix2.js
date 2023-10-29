let matrix = [ 
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
  ]
let rSum = [0,0,0,0]            

for(let c=0;c<4;c++){
    for(let r=0;r<3;r++){
rSum[c] = rSum[c] + matrix[r][c] // [0][0],[0][1],[0][2],[0][3]
}
}  

for(let i=0;i<4;i++){
console.log("col"+(i+1)+" Sum--->"+rSum[i])
}
