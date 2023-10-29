let mat=[[1,2,3,4],[4,5,6,7],[7,8,9,6]]
let csum=[0,0,0,0]
for(let c=0;c<4;c++){
    for(let r=0;r<3;r++){
        csum[c]=csum[c]+mat[r][c]
    }
}
for(let i=0;i<4;i++){
    console.log("column"+(i+1)+"sum-->"+csum[i])
}