a=[1,2,3,4]
b=a.map((el,i)=>{
if(i%2!==0){
 return el*2
}
else{
 return el
}
})
console.log(b);