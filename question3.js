//using slow fast pointer
let ar=[-1,2,3,-4,-7,8]
let slow=0
let fast=0
while(fast<ar.length)
{
    if(ar[fast]<0)
    {
        let temp=ar[slow]
        ar[slow++]=ar[fast]
        ar[fast]=temp

    }
    fast++;
}
console.log(ar)
// using two pointer
let arr=[-1,2,3,-4,-7,8]
let right=arr.length-1
let left=0
while(left<right)
{
    if(arr[right]>0)
    {
        right--
    }
    else if(arr[left]<0)
    {
        left++

    }
    else{
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
}
console.log(arr)