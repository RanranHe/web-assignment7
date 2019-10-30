import * as rxjs from 'rxjs';

window.load = function () {
    submit_subscription.unsubscribe();
};

// get submit button
let btn_submit = document.getElementById("submit");
// attach click event to submit button
let submitEvent = rxjs.fromEvent(btn_submit, 'click');
// subscribe function to event
let submit_subscription = submitEvent.subscribe(submit);


// submit event
function submit() {
    let attributes;
    // get client input
    let content = document.getElementById('text').value;
    // regular expression
    let pattern = new RegExp('^[\\w.]+(,[\\w.]+)*$');

    // check whether the input matches regular expression
    if (pattern.test(content)) {
        // empty the table
        resetTable();

        // custom api
        let apiKey = "b18c2oMvG8IIXhOBj1krVOCU5wXLXplSHquaJuBNLNQuaxyEH84PV3ZiPcjC";
        // "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP.L&api_token=demo"
        // fetch function with GET request
        fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=" + content + "&api_token=" + apiKey, {
            method: "GET",
            credentials: 'omit'
        }).then(res => res.json()) // parses JSON response into native JavaScript objects
            .then(json => {
                let arr = json.data; // get results from response
                if (arr !== null && arr !== undefined) {
                    // get attributes of stock
                    attributes = Object.getOwnPropertyNames(arr[0]);
                    document.getElementById('result_2').innerHTML = json.symbols_requested;
                    document.getElementById('result_1').innerHTML = json.symbols_returned;
                    showResult(arr, attributes); // add results to table
                } else {
                    alert("No results. Please try again.");
                }
            }).catch(error => console.error('error:', error));
    } else { // if doesn't match pattern
        alert("The input needs to be separated by comma without space in front of each symbol. Please try again.");
    }


    // SNAP,TWTR,VOD,SNA,UPSN,SPU.F,a,aa
    // add results to table
    function showResult(arr, attributes) {
        for (let i = 0; i < arr.length; i++) {
            let table = document.getElementById('table').innerHTML; // get table
            let id = "row_" + i;
            // add new line to table with id
            document.getElementById('table').innerHTML = table + `<tr id=${id}>` + '</tr>';

            // add data into corresponding cells
            for (let j = 0; j < attributes.length; j++) {
                let td = document.getElementById(`${id}`).innerHTML; //get the table line
                // add content to this line
                document.getElementById(`${id}`).innerHTML = td + '<td>' + arr[i][attributes[j]] + '</td>';
            }
        }
    }

    // empty the table
    function resetTable() {
        // get the first line of table
        let header = document.getElementById('header');
        // empty table
        document.getElementById('table').innerHTML = '';
        // attach the first line
        document.getElementById('table').appendChild(header);
    }
}
