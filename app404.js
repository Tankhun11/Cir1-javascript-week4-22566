//1.Regular function
//2.Express function
//3.Anonymous function
//4.Arrow/Lamdda function
const msg = (a,...i)=> {
    return a + "," + i;
};
//Call function
const sayhi = msg(10,20,30,40,50,60,70,Mark,90);
console.log(sayhi);