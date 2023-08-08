/* localStorage (mahalliy server) */

/*localStorage.setItem('ism','Jamshid');*/
/*localStorage.setItem('familiya','Siddikov');*/
/*localStorage.setItem('yoshi',18);*/
/*localStorage['ism'] = "Ravshan";*/
/*localStorage['familiya'] = "Soatov";*/
/*localStorage['yoshi'] = 19;*/
/*localStorage.removeItem('ism');*/
/*localStorage.removeItem('familiya');*/
/*localStorage.removeItem('yoshi');*/
/*localStorage.clear();*/
/*let uningIsmi = localStorage.getItem('ism');*/
/*let uningFamiliyasi = localStorage.getItem('familiya');*/
/*let uningYoshi = localStorage.getItem('yoshi');*/
/*console.log(uningIsmi,uningFamiliyasi,uningYoshi);*/

/* HTTPS requests (HTTPS so'rovlari) */

/*let sorov = new XMLHttpRequest();
sorov.open('get','https://getty.uz/serverdan/malumot/olish');
sorov.send();
sorov.onload = function (){
    console.log(sorov.responseText);
}*/

/* JSON in JS */

/*let jsFile = {"ism": "Asal","yoshi": 17};*/
/*let jsonFile = '{"ism": "Saida","yoshi": 18}';*/
/*console.log(JSON.stringify(jsFile));*/    /* JSni JSONga o'zgartirish */
/*console.log(JSON.parse(jsonFile));*/      /* JSONni JSga o'zgartirish */

let sorov = new XMLHttpRequest();
sorov.open('get','jsonFile.json');
sorov.send();
sorov.onload = function (){
    let jsFile = JSON.parse(sorov.responseText)
    console.log(jsFile);
}

