function createArrayOfTiers(num) {
    const numStr = '' + num; 
    
      const result = [];
  
      for (let i = 1; i <= numStr.length; i++) {
          result.push(numStr.slice(0, i)); 
      }
  
    return result.sort();
    return(num)
  }
  console.log(createArrayOfTiers(420));    
  console.log(createArrayOfTiers(2017));  
  
      
  
  function factorial(n){
    if(n === 0 || n === 1)
      return 1;
    
    return n * factorial(n-1);
  }


  function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '')                    
}

console.log(disemvowel("This website is for losers LOL!"))



