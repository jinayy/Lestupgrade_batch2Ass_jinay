var arr=["name","rno","college","city","marks"];
for(var i=0;i<arr.length;i++)
{
    if(arr[i].includes("a")==true)
    {
        console.log(arr[i]);
    }
    else
    {
        continue;
    }
}