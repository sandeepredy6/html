let a=[1,3,7,10]
let b=[7,3,1,10,22,44,11,25]
let isSubset = true
for(let i=0;i<a.length;i++){
    let gotValue = false
    for(let j=0;j<b.length;j++){
     if(a[i] == b[j]) gotValue = true;
    }
    if(gotValue == false)  {
        isSubset = false
        break
    }
}// i

if(isSubset == true) console.log("Yes it is Sub Set")
else console.log("No it is  Not Sub Set")