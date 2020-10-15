// https://dev.to/coderbyte/a-javascript-interview-question-asked-at-google-19f1
// challenge: implement event emitter from scratch
class EventEmitter{
    constructor(){
        this.events = {};
    }
    on(eventName, callback){
        if(!this.events[eventName]) this.events[eventName] = [];
        this.events[eventName].push(callback);
    }
    emit(eventName, data){
        if(!this.events[eventName]) throw new Error(`No event ${eventName} registered`)
        for(const eventCallBack of this.events[eventName]) eventCallBack(data);
    }
    removeListener(eventName, callback){
        if(!this.events[eventName]) throw new Error(`No event ${eventName} registered`);
        for(let i = 0; i < this.events[eventName]; i++){
            if(this.events[eventName][i] === callback) this.events[eventname].splice(i, 1);
        }      
    }
}

let superbowl = new EventEmitter()

const cheer = function (eventData) {
  console.log('RAAAAAHHHH!!!! Go ' + eventData.scoringTeam)
}

const jeer = function (eventData) {
  console.log('BOOOOOO ' + eventData.scoringTeam)
}

superbowl.on('touchdown', cheer)
superbowl.on('touchdown', jeer)

superbowl.emit('touchdown', { scoringTeam: 'Patriots' }) // Both cheer and jeer should have been called with data

superbowl.removeListener('touchdown', jeer)

superbowl.emit('touchdown', { scoringTeam: 'Seahawks' }); // Only cheer should have been called