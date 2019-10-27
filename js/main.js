
document.getElementById("submit").onclick = function () {
    fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=demo",{
        method: "GET",
        credentials: 'omit'
    }).then(res => res.json())
        .then(json => {
        console.log(json.data);
        let arr = json.data;
        if(arr) {
            let attributes = Object.getOwnPropertyNames(arr[0]);
            console.log(attributes);
            for (let i=0; i<arr.length; i++) {
                for (let j=0; j<attributes.length; j++) {
                    let name = `${attributes[j]}`;
                    console.log(name);
                    let innerHTML = document.getElementById(`${attributes[j]}`).innerHTML;
                    document.getElementById(`${attributes[j]}`).innerHTML= innerHTML + '<td>'+ arr[i][name]+'</td>';
                }


                // let innerHTML = document.getElementById("symbol").innerHTML;
                // document.getElementById("symbol").innerHTML= innerHTML + '<td>'+arr[i].symbol+'</td>';

                // innerHTML = document.getElementById("name").innerHTML;
                // document.getElementById("name").innerHTML= innerHTML + '<td>'+arr[i].name+'</td>';
                //
                // innerHTML = document.getElementById("currency").innerHTML;
                // document.getElementById("currency").innerHTML= innerHTML + '<td>'+arr[i].currency+'</td>';
                //
                // innerHTML = document.getElementById("price").innerHTML;
                // document.getElementById("price").innerHTML= innerHTML + '<td>'+arr[i].price+'</td>';
                //
                // innerHTML = document.getElementById("name").innerHTML;
                // document.getElementById("name").innerHTML= innerHTML + '<td>'+arr[i].name+'</td>';
                //
                // innerHTML = document.getElementById("name").innerHTML;
                // document.getElementById("name").innerHTML= innerHTML + '<td>'+arr[i].name+'</td>';
                //
                // innerHTML = document.getElementById("name").innerHTML;
                // document.getElementById("name").innerHTML= innerHTML + '<td>'+arr[i].name+'</td>';
                //
                // innerHTML = document.getElementById("name").innerHTML;
                // document.getElementById("name").innerHTML= innerHTML + '<td>'+arr[i].name+'</td>';
                //
                // innerHTML = document.getElementById("name").innerHTML;
                // document.getElementById("name").innerHTML= innerHTML + '<td>'+arr[i].name+'</td>';
                //
                // innerHTML = document.getElementById("name").innerHTML;
                // document.getElementById("name").innerHTML= innerHTML + '<td>'+arr[i].name+'</td>';
                //
                // innerHTML = document.getElementById("name").innerHTML;
                // document.getElementById("name").innerHTML= innerHTML + '<td>'+arr[i].name+'</td>';
                //
                // innerHTML = document.getElementById("name").innerHTML;
                // document.getElementById("name").innerHTML= innerHTML + '<td>'+arr[i].name+'</td>';
                //
                // innerHTML = document.getElementById("name").innerHTML;
                // document.getElementById("name").innerHTML= innerHTML + '<td>'+arr[i].name+'</td>';
                //
                // innerHTML = document.getElementById("name").innerHTML;
                // document.getElementById("name").innerHTML= innerHTML + '<td>'+arr[i].name+'</td>';
                //
                // innerHTML = document.getElementById("name").innerHTML;
                // document.getElementById("name").innerHTML= innerHTML + '<td>'+arr[i].name+'</td>';
            }
        }
    })
};