let ar=[1,0,2,3,0,5,6,0]
let fast=0;
let slow=0
while(fast<ar.length)
{
    if(ar[fast]!==0)
    {
        let temp=ar[fast]
        ar[fast]=ar[slow]
        ar[slow]=temp
        slow++
    }
    fast++;

}
console.log(ar)