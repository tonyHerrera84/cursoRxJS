import { range, of, fromEvent } from 'rxjs';
import { map, first, take, takeWhile, takeLast, tap, skip } from 'rxjs/operators'

export function example9() {
    /** start coding */
    /* Utility to show content into the view */
    const displayLog = (content)=> {
        let element = document.createElement('div');
        element.innerHTML = content;
        const logContainer = document.getElementById("last-takelast-skip");
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
        takeWhile(([col, row]) => col > 3),
        tap(val => console.log('valid in takeWhile: ' + val)),
        takeLast(3)
    );
    const subscription = clicks.subscribe(evt => {
        displayLog(evt)
    })


    /** end coding */
}