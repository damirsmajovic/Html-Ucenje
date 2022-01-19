operator=prompt("Unesite operaciju");
while(operator!=="STOP"){
 prvibroj=parseInt(prompt("Unesite prvi broj"))
 drugibroj=parseInt(prompt("Unesite drugi broj"))
if(operator==="+"){
 console.log(prvibroj+drugibroj)
}
if(operator==="-"){
 console.log(prvibroj-drugibroj)
}
if(operator==="*"){
 console.log(prvibroj*drugibroj)
}
if(operator==="/"){
 console.log(prvibroj/drugibroj)
}
operator=prompt("Unesi operaciju")
}