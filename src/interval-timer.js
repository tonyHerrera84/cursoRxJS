import { interval, timer } from 'rxjs';

export function example4() {
    /** start coding */
    /* Utility to show content into the view */
    const displayLog = (content)=> {
        let element = document.createElement('div');
        element.innerHTML = content;
        const logContainer = document.getElementById("interval-timer");
        logContainer.appendChild(element);
    }

    const source = interval(500);
    const subscription = source.subscribe(data => displayLog(data));
    timer(4000).subscribe(() => subscription.unsubscribe());


    const source2 = timer(4000, 300);
    const subscription2 = source2.subscribe(data => displayLog(`sub2 -> ${data}`));
    timer(6000).subscribe(()=>subscription2.unsubscribe());
    /** end coding */
}