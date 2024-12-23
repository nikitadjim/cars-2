let x = 1 
let array = document.getElementsByClassName('def') 
document.getElementById('count').innerText = x
textChange()

function forward() {

    if (x < array.length) {
        hide(array[x - 1].classList, 1)
        x++
        

    setTimeout(()=>{
        show(array[x - 1].classList, 1)
        document.getElementById('count').innerText = x
        textChange()

    }, 1000);



    }
    
}

function backward() {

    if (x != 1) {
        hide(array[x - 1].classList, -1)

        x--
    
    setTimeout(()=>{
        show(array[x - 1].classList, -1)
        textChange()
        document.getElementById('count').innerText = x

    }, 1000);

    } 
    

}

function textChange(){
    if(x == 1){
        document.getElementById('text').innerText = "Радиатор-Спрингс – Маленький городок на трассе 66, с уютной атмосферой и добродушными жителями. Здесь Маккуин находит друзей и учится ценить жизнь за пределами гонок.  "
    }else if(x == 2){
        document.getElementById('text').innerText = "Шепчущий утёс – Скала в форме автомобиля, символ Радиатор-Спрингс. Лёгкий ветер создаёт шёпот, добавляя месту мистической атмосферы."
    }else if(x == 3){
        document.getElementById('text').innerText = "Стадион для гонок – огромное сооружение, где проходят самые важные соревнования. Именно здесь Молния Маккуин впервые почувствовал настоящий накал страстей и вес гонок мирового уровня. "
    }else if(x == 4){
        document.getElementById('text').innerText = "Клаксоновая Долина – одно из самых живописных мест неподалёку от города. Красные скалы, узкие дороги и захватывающие дух виды делают его популярным у местных жителей. Здесь проходит знаменитая трасса для тренировок. "
    }else if(x == 5){
        document.getElementById('text').innerText = "Автозаправка ' У Фло' – культовое место в центре Радиатор-Спрингс. Это не просто заправка, а главный центр жизни города, где жители собираются, чтобы обсудить последние новости, подзарядиться и просто провести время вместе."
    }
}








function show(class_list, n){
    document.documentElement.style.setProperty("--el", -200 * n + 'vw') 
    document.documentElement.style.setProperty("--ex", -200 + 'vw')
    class_list.add('showText')
    setTimeout(()=> {
        class_list.add("yesText")
        document.documentElement.style.setProperty("--el",'0vw')
        document.documentElement.style.setProperty("--ex",'0vw')
    }, 20);
    

}

function hide(class_list, n){
    document.documentElement.style.setProperty("--el", 200 * n + 'vw') 
    document.documentElement.style.setProperty("--ex", 200 + 'vw') 
    
    class_list.remove('yesText')
    setTimeout(()=> {
        class_list.remove('showText')
    }, 1000);


}


document.getElementById("btn_forward").addEventListener("click", forward); 
document.getElementById("btn_backward").addEventListener("click", backward);



// let process = setInterval(()=>{
//     forward()
// }, 5000
// )