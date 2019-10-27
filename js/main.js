document.getElementById("submit").onclick = function () {
    resetTable();
    let attributes;
    let content = document.getElementById('text').value;
    let apiKey = "b18c2oMvG8IIXhOBj1krVOCU5wXLXplSHquaJuBNLNQuaxyEH84PV3ZiPcjC";
    // "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=demo"
    fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=" + content + "&api_token=" + apiKey, {
        method: "GET",
        credentials: 'omit'
    }).then(res => res.json())
        .then(json => {
            let arr = json.data;
            console.log(arr.length);
            if (arr) {
                attributes = Object.getOwnPropertyNames(arr[0]);
                showResult(arr, attributes);
            }
        });

    // SNAP,TWTR,VOD,SNA,UPSN,SPU.F
    function showResult(arr, attributes) {
        for (let i = 0; i < arr.length; i++) {
            let content = document.getElementById('table').innerHTML;
            let id = "row_" + i;
            console.log(id);
            document.getElementById('table').innerHTML = content + `<tr id=${id}>` + '</tr>';
            for (let j = 0; j < attributes.length; j++) {
                let td = document.getElementById(`${id}`).innerHTML;
                document.getElementById(`${id}`).innerHTML = td + '<td>' + arr[i][attributes[j]] + '</td>';
            }
        }
    }

    function resetTable() {
        let header = document.getElementById('header');
        document.getElementById('table').innerHTML = '';
        document.getElementById('table').appendChild(header);
    }

    // function showResult(attributes, arr, callback) {
    //     setTimeout(function () {
    //         for (let i = 0; i < arr.length; i++) {
    //             for (let j = 0; j < attributes.length; j++) {
    //                 let name = `${attributes[j]}`;
    //                 let innerHTML = document.getElementById(name).innerHTML;
    //                 document.getElementById(name).innerHTML = innerHTML + '<td>' + arr[i][name] + '</td>';
    //             }
    //         }
    //         callback && callback();
    //     }, 50);
    // }
    //
    // function resetTable(attributes) {
    //     for (let j = 0; j < attributes.length; j++) {
    //         let name = `${attributes[j]}`;
    //         document.getElementById(name).innerHTML = '';
    //     }
    // }
};

