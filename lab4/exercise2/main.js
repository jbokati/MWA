/**
 *  Write a Node program that has a function checkSystem() that checks if the system memory size is at least 4 GB 
 *  and the processor has more than 2 cores (use os core module)
 * 
 *  1. When you call the function, you should receive an immediate message on the console "Checking your system...".
 *  2. If the system doesn't have enough memory we should print a message to the console: "This app needs at least 4 GB of RAM"
 *  3. If the system doesn't have at least 2 cores, print this message to the console: "Processor is not supported"
 *  4. If the system has enough specs, print the following message "System is checked successfully."
 * 
 *  Solve the exercise using Observables
 */

 // Way 1: 

 const os = require('os');

 function checkSystem(){
     console.log("Checking your system..");
    const totalCpus = os.cpus().length;
    const totalMemory = (os.totalmem()/1000000000);
    if(totalMemory < 4){
        console.log("This app needs at least 4 GB of RAM.");

        return ;
    }

    if(totalCpus < 2){
        console.log("Processor is not supported.");

        return ;
    }
    
    console.log("System is checked successfully.")
 }
 
 checkSystem();


 // Way 2: Observable 
 const os = require('os');
 const { Observable } = require('rxjs');

 const observable$ = Observable.create((observer) =>{
    observer.next("Checking your system...");
    const totalCpus = os.cpus().length;
    const totalMemory = (os.totalmem()/1000000000);
    if(totalMemory < 4){
        observer.next("This app needs at least 4 GB of RAM");
    }else if(totalCpus < 2){
       observer.next("Processor is not supported.");
    }else{
        observer.complete();
    }


 });

 function checkSystem(){
    observable$.subscribe(
        (data) => {console.log(data)},
        (error) => console.log(error),
        () => console.log("System is checked successfully.")
    )
}
 
checkSystem();