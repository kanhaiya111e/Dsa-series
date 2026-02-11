let ar=[-1,-2,3,-5,6,7]
let maxSofar=ar[0]
let minSofar=ar[0]
let maxProduct=ar[0]
for(let i=1;i<ar.length;i++)
{
    if(ar[i]<0)
    {
        let temp=maxSofar
        maxSofar=minSofar
        minSofar=temp
    }
    if(ar[i]>maxSofar*ar[i])
    {
        maxSofar=ar[i]
    }
    else{
        maxSofar=maxSofar*ar[i]
    }
    if(ar[i]<minSofar*ar[i])
    {
        minSofar=ar[i]
    }
    else
    {
        minSofar=minSofar*ar[i]
    }
    if(maxProduct<maxSofar)
    {
        maxProduct=maxSofar
    }
}
console.log(maxProduct)