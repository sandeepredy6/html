let matrix = [ 
    [11,12,13],
    [14,15,16],
    [17,18,19]
  ]
let rSum = [0,0,0]            
for(let r=0;r<3;r++){
for(let c=0;c<3;c++){
rSum[r] = rSum[r] + matrix[r][c] // [0][0],[0][1],[0][2]
}
}  

for(let i=0;i<3;i++){
console.log("Row "+(i+1)+" Sum--->"+rSum[i])
}