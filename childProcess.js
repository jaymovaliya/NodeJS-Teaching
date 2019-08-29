const exec = require('child_process').exec


// first argument:- Command you want to fire
// second argument:- error first callback
exec('ls',(stderr,stdout)=>{
    if(stderr){
        console.log("Printing Err",stderr)
    }
    else{
        console.log("Output",stdout)
    }
})