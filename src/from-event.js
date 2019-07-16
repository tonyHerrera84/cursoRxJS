import { fromEvent} from 'rxjs';

export function example5() {
    /** start coding */
    /* Utility to show content into the view */
    const displayLog = (content)=> {
        let element = document.createElement('div');
        element.innerHTML = content;
        const logContainer = document.getElementById("from-event");
        logContainer.appendChild(element);
    }

    const actionBtn = document.getElementById('action-btn');
    const source = fromEvent(actionBtn, 'click');

    source.subscribe(evt => {
        displayLog(`click en  (${evt.x}, ${evt.y})`);
    })

    fromEvent(document, 'mousemove').subscribe(evt => {
        displayLog(`hover en  (${evt.x}, ${evt.y})`);
    })

    /** end coding */
}