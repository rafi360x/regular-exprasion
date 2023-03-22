 // naw we are see the regular expression 
 // lets see
 
 let reg;
 reg = /hello/i;  // i = case insensitive
 console.log(reg);
 console.log(reg.source);
 // naw we are see the built in function in regular exprassion
 //exec()--this function work over the string or element or etc, if the string have regular exprassion 
 // so it will be work over the string and throw a array, or if there have no exprassion so this function 
 // return null value;
 let val = "HeLlo world";
 val = "hell world";
 val = "This is hello world";
 val = "acdefhellogsj";
 val = "hello hello hello";
 val = "world hello";
 let dis = reg.exec(val);

 // naw we are define the secend function 
 // test() - if the value match it return true / or dont match it return false
 dis = reg.test(val);


 // na wwe are see the another function colled match()
 // match() -- it became semilar than exec() function it return array and null but it will 
 // work ;

 dis = val.match(reg);


 // naw we see the another function
 // search() -- if the expression value match on the string then it return the index value of match exprassion
 // or if it dont match it return -1;
 // lets see
 val = "world hello";

 // naw we are see the regular function 
 // replace() -- it can replace a exprassion and throw a different value of exprassion 
 // let see

 let disk2 = val.replace(reg, "rafi");
 dis = val.search(reg);
 console.log(dis);
 console.log(val);
 console.log(reg.source);
 console.log(disk2);
 
 