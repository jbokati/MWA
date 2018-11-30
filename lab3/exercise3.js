var EventEmitter = require('events');

class Gym extends EventEmitter{
    constructor(){
        super();
        setInterval(()=>{
            this.emit('go','Athlete is working out.')
        }
        ,1000);
    }
}
var gymInstance = new Gym();
gymInstance.on('go',(data)=>console.log(data))