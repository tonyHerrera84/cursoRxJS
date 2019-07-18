import { range, of, fromEvent } from 'rxjs';
import { map, first, take, takeWhile } from 'rxjs/operators'

export function example8() {
    /** start coding */
    /* Utility to show content into the view */
    const displayLog = (content)=> {
        let element = document.createElement('div');
        element.innerHTML = content;
        const logContainer = document.getElementById("first-take-takewhile");
        logContainer.appendChild(element);
    }

    const grid = document.getElementById('grid');
    const clicks = fromEvent(grid, 'click').pipe(
        map( val => [
            Math.floor(val.offsetX/50),
            Math.floor(val.offsetY/50)
        ]),
        // first(),
        // take(3),
        // takeWhile(val => val[0] > 3),
        takeWhile(([col, row]) => col > 3)
    );
    const subscription = clicks.subscribe(evt => {
        displayLog(evt)
    })


    /** end coding */
}