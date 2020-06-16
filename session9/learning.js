//Vi du 1
// let sandals[
//     {
//         name: "Sandal 1",
//         price: 30000,
//         size: 37,
//         publisher: ""
//     };

//     {
//         name: "Sandal 2",
//         price: 50000,
//         size: 40,
//         publisher: "Ha Cute"
//     }
// ]
// // chuyen mang/object --> string
// let jsonData = JSON.stringify(sandals);
// console.log(jsonData);
// localStorage.setItemm("sandals", jsonData);

// //chuyen string --> mang/object
// let string = localStorage.getItem("sandals");
// let arr = JSON.parse(string);
// console.log(arr);

// let sandals = [
//     {
//         name: "Sandal 1",
//         price: 30,
//         size: 40,
//         publisher: "P1"
//     },
//     {
//         name: "Sandal 2",
//         price: 40,   
//         size: 43,
//         publisher: "P2"
//     }
// ];

// localStorage.setItem("sandals", JSON.stringify(sandals));

//read

//Vi du 2
function showSandals(){
    //lay tu localstorage: string
    let jsonData = localStorage.getItem("sandals");
    console.log(jsonData)
    //convert string --> mang
    let sandals = JSON.parse(jsonData);
    //hien thi ra man hinh
    let html = `<ul>`;
    for(let sandal of sandals)
    {
        html += `
        <li>
            Name: <b>${sandal.name}</b><br>
            Price: <i>${sandal.price}</i><br>
            Size: <mark>${sandal.size}</mark><br>
            Publisher: <small>${sandal.publisher}</small>
        </li>
        `;
    }
    html += `</ul>`;
    console.log(html);
    document.getElementById("app").innerHTML = html;
}

function addSandals(sandal){
    //lay du lieu tu localstorage
    let sandals = JSON.parse(localStorage.getItem("sandals"));
    //them du lieu vao mang
    sandals.push(sandal);
    //luu lai vao trong localstorage
    localStorage.setItem("sandals",JSON.stringify(sandals));
}

function updateSandals(name, data){
    //lay tu du lieu ra
    let sandals = JSON.parse(localStorage.getItem("sandals"));
    //dua vao name lay ra dep can sua
    let foundIndex= sandals.findIndex(function(item){
        return item.name == name;
    });
    if(foundIndex >= 0) {
        //neu tim thay thi sua
        sandals[foundIndex] = data;
    }else {
        console.log("Not found");
    }

    //luu lai localstorage
    localStorage.setItem("sandals",JSON.stringify(sandals));
}

function deleteSandals(name){
    //lay tu du lieu ra
    let sandals = JSON.parse(localStorage.getItem("sandals"));
    //dua vao name lay ra dep can sua
    let foundIndex= sandals.findIndex(function(item){
        return item.name == name;
    });
    if(foundIndex >= 0) {
        //neu tim thay thi sua
        sandals.splice(foundIndex,2);
    }else {
        console.log("Not found");
    }

    //luu lai localstorage
    localStorage.setItem("sandals",JSON.stringify(sandals));
}