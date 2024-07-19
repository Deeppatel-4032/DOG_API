
let getprint = document.getElementById("getloop");
let printimg = document.getElementById("printimg");
const getData = () => {
    fetch("https://dog.ceo/api/breeds/list/all").then((res) => {
        return res.json();
    }).then(list => {
        let listofbreeds = list.message;
        console.log(listofbreeds);
        for(let key in listofbreeds){
            if(listofbreeds[key].length == 0) {
                getprint.innerHTML += `<li onclick="return listImg('${key}')">${key}</li>`;
            } else {
                let orderlist =  `<ul>`;
                listofbreeds[key].forEach(el => {
                    orderlist += `<li>${el}</li>`;
                });
                orderlist += `</ul>`;
                getprint.innerHTML += `<li onclick="return listImg('${key}')">${key} ${orderlist}</li>`;
            }
        }
    }).catch(err => {
        console.log("error 404", err);
    });
}
getData();

const listImg = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`).then((res) => {
        return res.json();
    }).then(list => {
         imgList = list.message;
        printimg.innerHTML = "";
        imgList.forEach((imgURL) => {
            printimg.innerHTML +=  `<div class="col-3 " style="max-width: 100%; max-height:100%;object-fit:cover;">
                                         <img src="${imgURL}" width="100%" height="100%">
                                    </div>`
        })
    }).catch(error => {
        console.log("error 404", error);
    });
}

