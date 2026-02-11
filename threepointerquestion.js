let ar=[0,1,2,0,1,1,2,0];
let low=0
let mid=0
let high=ar.length-1
function swap(arr,a,b)
{
    let temp=arr[a]
    arr[a]=arr[b]
    arr[b]=temp
}
while(mid<=high)
{
    if(ar[mid]===0)
    {
        swap(ar,mid,low)
        low++;
        mid++;

    }
    else if(ar[mid]===2)
    {
        swap(ar,mid,high)
        high--
        
    }
    else{
        mid++;
    }
}
console.log(ar)