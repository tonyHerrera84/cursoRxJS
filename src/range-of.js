import { range, of } from 'rxjs';

export function example3() {
    /** start coding */
    /* Utility to show content into the view */
    const displayLog = (content)=> {
        let element = document.createElement('div');
        element.innerHTML = content;
        const logContainer = document.getElementById("range-of");
        logContainer.appendChild(element);
    }

    const source = of(1,2,3,4,5,6);
    const source2 = of(
        [1,2,3,4,5],
        'Hola mundo',
        {foo: 'bar'},
        function sayHello() {
            return 'Hola!!!'
        }
    )

    const source3 = range(9,10000);

    const subscription = source3.subscribe( data => displayLog(data));

    /** end coding */
}