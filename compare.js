function compareJSON(obj1, obj2) {
    const sortedKeys1 = Object.keys(obj1).sort();
    const sortedKeys2 = Object.keys(obj2).sort();
    const stringifiedObj1 = JSON.stringify(Object.fromEntries(
      sortedKeys1.map(key => [key, obj1[key]])
    ));
  
    const stringifiedObj2 = JSON.stringify(Object.fromEntries(
      sortedKeys2.map(key => [key, obj2[key]])
    ));
  
    return stringifiedObj1 === stringifiedObj2;
  }
  
  const obj1 = { name: "Person 1", age: 5 };
  const obj2 = { age: 5, name: "Person 1" };
  console.log(compareJSON(obj1, obj2)); 
  