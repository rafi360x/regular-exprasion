// literacher and meta characters 
// let see
let re = /hello/i; // this are literals expression
let str = "hello world";
str = "world hello";
str = "hello";
str = "h9llo";
str = "hdshafgjkfllo";
str = "ha llo"
str = "hello";
str = "hello?"
console.log(re.exec(str));
// naw we are see meta charecter 
//let see
re = /^hello/i; // must be open with expression
re = /hello$/; //nust be end with
re = /^hello$/; //must be open and end with;
re = /^h.llo$/; // . anytype of latter
re = /h*llo/;   // * -- if any word or namber one or more not 
re = /he?llo/;
re = /he?ll?o/;
re = /hello?/;
re = /hello\?/;
 // ? -- optanial // jodi ? ar agar word thakla o hoba na thakla  o hoba or ata ake exprassiona 
// onak bar use hota para; 
reTest(re, str)
function reTest(a, b){
    if(a.test(str)){
        console.log(`${a.source} is match with ${b}`);
    }else{
        console.log(`${a.source} don't matched with ${b}`);
    }
}
 