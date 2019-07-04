import { from } from 'rxjs';

export function example2() {
    /** start coding */
    /* Utility to show content into the view */
    const displayLog = (content)=> {
        let element = document.createElement('div');
        element.innerHTML = content;
        const logContainer = document.getElementById("from");
        logContainer.appendChild(element);
    }

    const myArr = [1,2,3,4,5,6,7,8];
    const myString = 'Hola mundo';
    const myPromise = new Promise(resolve => setTimeout(() => {
        resolve('Promesa');
    }, 3000))

    const observable = from(myArr);
    const observable2 = from(myString);
    const observable3 = from(myPromise);
    const subscription = observable.subscribe(val => displayLog(val));
    const subscription2 = observable2.subscribe(val => displayLog(val));
    const subscription3 = observable3.subscribe(val => displayLog(val));
    /** end coding */
}