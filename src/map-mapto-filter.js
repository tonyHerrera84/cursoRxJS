import { range, of, fromEvent } from 'rxjs';
import { map, filter} from 'rxjs/operators'

export function example6() {
    /** start coding */
    /* Utility to show content into the view */
    const displayLog = (content)=> {
        let element = document.createElement('div');
        element.innerHTML = content;
        const logContainer = document.getElementById("map-mapto-filter");
        logContainer.appendChild(element);
    }

    const grid = document.getElementById('grid');
    const clicks = fromEvent(grid, 'click').pipe(
        map( val => [
            Math.floor(val.offsetX/50),
            Math.floor(val.offsetY/50)
        ]),
        filter( val => (val[0] + val[1]) % 2 != 0)
    );
    const subscription = clicks.subscribe(evt => {
        displayLog(evt)
    })


    /** end coding */
}