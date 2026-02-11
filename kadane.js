let ar=[-5,-2,-8,-1]

let start=0
let end=0
let maxSum=ar[0]
let currentSum=ar[0]
let maxStart=0
let maxEnd=0
for (let i=1;i< ar.length;i++)
{

    if (currentSum+ar[i]>ar[i])
    {
        currentSum=currentSum+ar[i]
        end=i
        
    }
    else{
        currentSum=ar[i]
        start=i
        end=i
        
    }
    if(currentSum>maxSum)
    {
        maxSum=currentSum
        maxStart=start
        maxEnd=end

    }
}
let uniqueArr=ar.slice(maxStart,maxEnd+1)
console.log(maxSum,uniqueArr)