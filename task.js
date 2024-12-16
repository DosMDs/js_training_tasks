const findUniqueElements = (array) => {
    const result = [];
    const duble = [];
    for (let i = 0; i < array.length; i++){
      const element = array[i];
      
      let find;
      for (let j = i + 1; j < array.length; j++) {
        if (element === array[j]) {
          find = true;
          break;
        };
      };
      
      if (find){
        duble.push(element);
      } else {
        let find;
        for (let j = 0; j < duble.length; j++) {
            if (element === duble[j]) {
                find = true;
                break;
            };
        };
        if (!find) result.push(element);
      } 
    }
    return result
  };
  
  const result = findUniqueElements([1, 2, 2, 3, 4, 4, 5]);
  console.log(result); // [1, 3, 5]