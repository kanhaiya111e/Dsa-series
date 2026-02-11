let ar=[1,2,3,4,5,6]
let map={}
let target=6
for(let i=0;i<ar.length;i++)
{
    let complement=target-ar[i]
    if(map[complement]!==undefined)
    {
        console.log("indices are",map[complement],i)
    }
    map[ar[i]]=i
    
}