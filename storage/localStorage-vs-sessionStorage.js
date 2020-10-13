console.log('Session', sessionStorage);
console.log('Local', localStorage)
let key = ['username', 'password', 'email'];
let value = ['shazilarif', 'ilovecats','shazilarif@gmail.com']
var i = 0;
var j = 0;
function handler(){
    if(i >= key.length) return alert('added all session items!')
    this.sessionStorage.setItem(key[i], value[i++]);
    console.log(sessionStorage)
}

function handler2(){
    if(j >= key.length) return alert('added all local/persistent items!')
    this.localStorage.setItem(key[j], value[j++]);
    console.log(sessionStorage)
}
/**
 * local vs session
 * 
 * one is persistent , the other isn't. session is cleared afer a tab is closed
 * local exists until explicitly removed
 * both are stored on your local machine
 */