import { range, of, fromEvent } from 'rxjs';
import { map, filter, tap} from 'rxjs/operators'

export function example7() {
    /** start coding */
    /* Utility to show content into the view */
    const displayLog = (content)=> {
        let element = document.createElement('div');
        element.innerHTML = content;
        const logContainer = document.getElementById("tap");
        logContainer.appendChild(element);
    }

    const grid = document.getElementById('grid');
    const clicks = fromEvent(grid, 'click').pipe(
        tap( val => displayLog('before' + val)),
        map( val => [
            Math.floor(val.offsetX/50),
            Math.floor(val.offsetY/50)
        ]),
        filter( val => (val[0] + val[1]) % 2 != 0),
        tap( val => displayLog('after' + val)),
    );
    const subscription = clicks.subscribe(evt => {
        displayLog(evt)
    })


    /** end coding */
}