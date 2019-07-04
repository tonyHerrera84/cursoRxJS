import { Observable } from 'rxjs';

export default () => {
    /** start coding */
    /* Utility to show content into the view */
    const displayLog = (content)=> {
        let element = document.createElement('div');
        element.innerHTML = content;
        const logContainer = document.getElementById("log-container");
        logContainer.appendChild(element);
    }

    const hello = Observable.create(function(observer) {
        observer.next('Hola ');
        setTimeout(()=>{
            observer.next('Mundo ');
        }, 2000);
        setTimeout(()=>{
            observer.next(' :)');
            observer.complete();
        }, 4000);
    });

    const obser = {
        next: evt => displayLog(evt),
        error: err => console.err('Error = ', err),
        complete: () => displayLog('Terminado.')
    }
    
    const subscribe = hello.subscribe(obser);
    const subscribe2 = hello.subscribe(obser);
    subscribe.unsubscribe();
    /** end coding */
}