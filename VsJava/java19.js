console.log("learn about promises");
// Promise: it has three ways resolve, reject and pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("function:Your promise has been resolved");
                resolve();
            }
            else {
                console.log("function:Your promise has not been resolved");
                reject('sorry not fulfilled');
            }
        }, 2000);
    })
}
func1().then(function(){
    console.log(' Keshav:thanks for resolving');
}).catch(function(error){
    console.log('very bad bro '+ error);
})