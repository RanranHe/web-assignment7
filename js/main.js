document.getElementById("submit").onclick = function () {
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
            if (arr) {
                attributes = Object.getOwnPropertyNames(arr[0]);
                showResult(attributes, arr, resetTable(attributes));
            }
        });

    function showResult(attributes, arr, callback) {
        setTimeout(function () {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < attributes.length; j++) {
                    let name = `${attributes[j]}`;
                    let innerHTML = document.getElementById(name).innerHTML;
                    document.getElementById(name).innerHTML = innerHTML + '<td>' + arr[i][name] + '</td>';
                }
            }
            callback && callback();
        }, 50);
    }

    function resetTable(attributes) {
        for (let j = 0; j < attributes.length; j++) {
            let name = `${attributes[j]}`;
            document.getElementById(name).innerHTML = '';
        }
    }
};

