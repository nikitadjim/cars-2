let items = ["Маккуин", "Мэтр", "Док Хадсон", "Салли", "Гвидо", "Луиджи"]
let items_link = ["../img/mq.png", "../img/mater.png", "../img/doc.png", "../img/Sally.png", "../img/gvido.png", "../img/luigi.png"]
let items_text = [
    "Молния Маккуин – самоуверенный и талантливый гоночный автомобиль, живёт ради побед. В процессе приключений понимает важность дружбы, честности и команды. Учится быть скромнее и ответственнее благодаря жителям Радиатор-Спрингс.",
    " Мэтр – ржавый эвакуатор с большим сердцем, любящий шутки и розыгрыши. Хотя выглядит неуклюже, часто помогает находчивыми решениями. Искренне предан друзьям, особенно Маккуину, и всегда видит хорошее даже в сложных ситуациях.  ", 
    " Док Хадсон – старый, мудрый автомобиль с загадочным прошлым. В прошлом был известным гонщиком, трижды чемпионом, но ушёл после травмы. Строг, но заботлив, учит Маккуина ценить жизнь за пределами гонок.", 
    "Салли – стильный голубой Порше, переехавшая из большого города в Радиатор-Спрингс ради спокойной жизни. Заботится о городе, вдохновляет Маккуина на перемены. Добрая, умная и романтичная, верит в лучшее в людях.", 
    "Гвидо – энергичный вилочный погрузчик из Италии, работающий с Луиджи в шиномонтаже. Любит гонки, виртуозно меняет шины, мечтает работать с великими гонщиками. Весёлый, верный и трудолюбивый.", 
    " Луиджи – жизнерадостный итальянский автомобиль, владеющий магазином шин. Большой фанат Феррари, гордится своей работой и культурой. Его дружелюбие и энтузиазм помогают создать атмосферу уюта в Радиатор-Спрингс."
]


const input_search = document.getElementById('input_search')
const output_search = document.getElementById('output_search')


document.documentElement.style.setProperty("--es",1 + 'vw')

outputItems()

document.getElementById("btn_search").addEventListener('click', () => {
    if(input_search.value != ""){

        output_search.innerHTML = ""
        document.getElementById("img_search").src = "../img/empty.png"
        document.getElementById("text").innerText = ""
        document.documentElement.style.setProperty("--es",1 + 'vw')

        
        let flag = true
        items.forEach(item => {
            if (item.toLowerCase() == input_search.value.toLowerCase()) {
                output_search.innerHTML = ""
            
                const li = document.createElement('li');
                //li.innerText = item;
            
                const btn = document.createElement('button');
                btn.id = 'btn_item'
                btn.innerText = "О Персонаже"
                li.appendChild(btn);
                
                output_search.appendChild(li);
                
                document.getElementById("img_search").src = items_link[items.indexOf(item)]
                flag=false
                input_search.value = ""
                document.documentElement.style.setProperty("--es", 0 + 'vw')
            
                if(document.getElementById('btn_item')){
                    document.getElementById("btn_item").addEventListener('click', () => {
                    
                    
                        document.getElementById("text").innerText = items_text[items.indexOf(item)]
                    
                    })
                }
            
            
            }
            else if(flag){
                output_search.innerHTML = "Персонаж Не Найден"
                flag=true
            }
        
        })
    }
    
})





document.getElementById("btn_clear_search").addEventListener('click', () => {
    input_search.value = ""
    document.getElementById("text").innerText = ""
    document.documentElement.style.setProperty("--es",1 + 'vw')

    outputItems()
})



function outputItems(){
    output_search.innerHTML = ""
    document.getElementById("img_search").src = "../img/empty.png"
    items.forEach(item => {
        
        const li = document.createElement('li');
        li.innerText = item;
        output_search.appendChild(li);
    
})
}
