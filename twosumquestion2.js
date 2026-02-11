let ar=[1,2,3,4,5,6]
let found=false;

let target=6
let left=0
let right=ar.length-1
while(left<right)
{
    let sum=ar[left]+ar[right]
    if(sum>target)
    {
        right--;
    }
    else if(sum<target)
    {
        left++;
    }
    else{
        console.log(left,right)
        found=true;
        break;
    }
}
if(found!==true)
{
    console.log("no pair found")
}