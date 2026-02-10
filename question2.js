let ar=[1,1,2,3,3,4,4,5,6,6]
let slow=0
let fast=0
while(fast<ar.length)
{
    if(ar[fast]!=ar[slow])
    {
        slow++
        
        ar[slow]=ar[fast]
    }
    fast++
}
let uniquearray=ar.slice(0,slow+1)
console.log(uniquearray)