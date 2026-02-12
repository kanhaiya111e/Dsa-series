let ar=[1,2,3,4,5]
let right=ar.length-1
let left=0
while(left<right)
{
    let temp=ar[left]
    ar[left]=ar[right]
    ar[right]=temp
left++
right--
}
console.log(ar)
let slow=0
let fast=0
let arr=[1,2,3,4,5,6]
while(fast<arr.length)
{
    if(arr[fast]%2==0)
    {
        let temp=arr[slow]
        arr[slow]=arr[fast]
        arr[fast]=temp
        slow++
    }
    fast++
}
console.log(arr)