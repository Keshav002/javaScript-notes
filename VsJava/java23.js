console.log("Learn about error handling");
let a = "Keshav Bro";
a = undefined;
if (a!=undefined){
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}


try {
    eryrtenen
    // console.log('You are inside try block');
    
} catch (error) {
    console.log('Are you okay');
    // console.log(error);
    console.log(error.name);
    console.log(error.message);  
    //finally will run alwaya whether the error came or not
}finally{
    console.log('finally we will run this');
}