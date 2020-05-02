var CountryList = [

{

 country: "Україна",
 capital:"Київ",
 count: 40000000

},
{

 country: "Грузія",
 capital:"Тбілісі",
 count: 10000000

},
{

 country: "Великобританія",
 capital:"Лондон",
 count: 100000000

},
{

 country: "США",
 capital:"Вашингтон",
 count: 300000000

} ];

window.onload = function (){
    let countries = document.getElementById('countries');
    for (let i = 0; i < CountryList.length; i++){
        let li = document.createElement('li');
        //li.innerText = CountryList[i];
        for (let key in CountryList[i]){
            let p = document.createElement('p');
           // checkCountryCapital (CountryList[i][key]);
            if (CountryList[i][key] === 'Україна'){
                p.innerText = CountryList[i][key];
                p.style.backgroundColor = 'blue';
            }
            if (CountryList[i][key] === 'Київ'){
                p.innerText = CountryList[i][key];                   p.style.backgroundColor = 'yellow';
            }
            if (CountryList[i].count){
                CountryList[i].count /= 100;
                p.innerText =` ${CountryList[i].count} млн`;
            }
           p.innerText = CountryList[i][key];
            li.appendChild(p);
        }
        countries.appendChild(li);
    }    
}

//function checkCountryCapital (value){
//    let p = document.createElement('p');
//    if (value === 'Україна'){
//        return{}
//        p.innerText = value;
//        p.style.backgroundColor = 'blue';
//    }
//    if (value === 'Київ'){
//        p.innerText = value;     
//        p.style.backgroundColor = 'yellow';
//    }
//}


//SECOND TASK


let modal = document.getElementById('modal');
let openBut = document.getElementById('openModal');
let close = document.getElementById('closeModal');

openBut.onclick = function (){
    modal.style.display = 'block';
}

close.onclick = function (){
    modal.style.display = 'none';
}

window.onclick = function (event){
    if (event.target == modal){
        modal.style.display = 'none';
    }    
}

//THIRD TASK
let click = document.getElementById('click');
    click.onclick = function () {
    let list = document.getElementById("list");
    for (let i = 0; i < 5; i++) {
        let li = document.createElement('li');
        li.innerText = `Новий айтем ${i + 1}`;
        list.appendChild(li);
    }
        console.log(list.childNodes.length); //чомусь на один елемент більше показує
};


let changeCol = document.getElementById('changeCol');
changeCol.addEventListener('click', function () {

    let selElem = document.getElementById('selElem').value;
    let setCol = document.getElementById('selCol').value;
    if (selElem < 0 || selElem > list.childNodes.length - 1){
        alert('Error');
    }
    let tmp = list.childNodes[selElem];
            console.log(tmp);
    tmp.style.backgroundColor = setCol;
         
        
    
})



