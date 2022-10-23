let isStarted = false;
const field = document.createElement('div');
const Timer = document.createElement('div');
Timer.classList.add('Timer');
Timer.innerText='Time'
let cellsize = 100;
const Moves = document.createElement('div');
const MovesText = document.createElement('div');
const Title =document.createElement('div');
const Audio = document.createElement('audio');
const Check = document.createElement('input');
const Volume = document.createElement('div');
Volume.innerText = 'Volume(On/Off)'
Volume.setAttribute('class','Volume')
Check.setAttribute('class','check')
Check.setAttribute('type','checkbox')

Audio.setAttribute('src','https://allsoundsaround.com/wp-content/uploads/2020/12/rezkiy-zvuk-dlya-smenyi-kadra-v-videomontaje-3525-6.mp3?_=1')
Title.innerText = 'Gem Puzzle'
Title.classList.add('Title')
MovesText.classList.add('Movestxt')
Moves.classList.add('Moves');
let movesCount = 0;
Moves.innerText= movesCount;
MovesText.innerText='Moves';
field.setAttribute('class','field')
document.body.append(Audio);
document.body.append(Volume);
document.body.append(Check);
document.body.append(Title);
document.body.append(field);
document.body.append(MovesText)
document.body.append(Timer);
document.body.append(Moves);
const secondel = document.createElement('div');
secondel.classList.add('second');

const dots = document.createElement('div');

dots.classList.add('dot');
const minuteel = document.createElement('div');
minuteel.classList.add('minute');
const buttonP = document.createElement('button');
const buttonS = document.createElement('button');
buttonP.classList.add('play');
buttonS.classList.add('stop');
buttonP.innerHTML="Shuffle and Start"
buttonS.innerHTML="Stop"
dots.innerHTML=':';
secondel.innerHTML='00';
minuteel.innerHTML="00"
document.body.append(minuteel);
document.body.append(dots);
document.body.append(secondel);
document.body.append(buttonP);
document.body.append(buttonS);

let second=00,
    minute=00,
    interval


function StartTimer(){
    second++
    if(second<=9){
        secondel.innerHTML = "0"+ second;
    }
    if(second>9){
        secondel.innerHTML =second;
    }
    if(second>60){
        minute++
        minuteel.innerHTML = '0'+minute;
        second = 0;
        secondel.innerHTML = '0'+second;
    }
}

let empty={
    value:16,
    left:0,
    top:0
}
let cells=[];
cells.push(empty);
const numbers=[...Array(15).keys()]
.sort(()=>Math.random()-0.5);

function match(index){
    const cell = cells[index]
    if(cell.value===cell.top*4+cell.left+1){
        cell.element.style.backgroundColor='lightgreen';
    }else{
        cell.element.style.backgroundColor='lightgray';
    }
}

function move(index){
    const cell = cells[index]
    const leftDiv=Math.abs(empty.left - cell.left);
    const TopDiv=Math.abs(empty.top - cell.top);
    if(leftDiv + TopDiv >1){
        return
    }

    cell.element.style.left = `${empty.left * cellsize}px`;
    cell.element.style.top = `${empty.top * cellsize}px`;

    const emptyLeft=empty.left;
    const emptyTop=empty.top;
    empty.left=cell.left;
    empty.top=cell.top;
    cell.left=emptyLeft;
    cell.top=emptyTop;

    movesCount++
    Moves.innerText= movesCount;


    const ifFinished=cells.every(cell=>{
        cell.value===cell.top*4+cell.left+1;
    })

    if(ifFinished){
        alert('Hooray! You solved the puzzle in '+minute+':'+second+' and '+movesCount+' moves!')
    }
    if(Check.checked){
        Audio.play()
    }
}
for (let i=1;i<=15;i++){
    var cell = document.createElement('div')
    const value =numbers[i-1]+1;
    cell.setAttribute('class','cell')
    cell.innerHTML = value;
    let left= i %4;
    let top =(i -left )/4;
    cells.push({
        left:left,
        top:top,
        element:cell,
        value:value
    });    
    
    cell.style.left = `${left * cellsize}px`;
    cell.style.top = `${top * cellsize}px`;
    
    field.append(cell);
    match(i)
    cell.addEventListener('click',()=>{
        move(i);
        match(i);
        if(!isStarted){
            isStarted=true;
            clearInterval(interval);
            interval=setInterval(StartTimer,1000);  
        }
    })
}


buttonP.addEventListener('click',()=>{
    empty={
        value:16,
        left:0,
        top:0
    }
    second=00
    minute=00
    secondel.innerHTML='00';
    minuteel.innerHTML='00';
    cells=[]
    cells.push(empty);
    while (field.firstChild) {
        field.removeChild(field.firstChild);
    } 
    clearInterval(interval);
    interval=setInterval(StartTimer,1000);
    const numbers=[...Array(15).keys()]
    .sort(()=>Math.random()-0.5);
    for (let i=1;i<=15;i++){
        var cell = document.createElement('div')
        const value =numbers[i-1]+1;
        cell.setAttribute('class','cell')
        cell.innerHTML = value;
        let left= i %4;
        let top =(i -left )/4;
        cells.push({
            left:left,
            top:top,
            element:cell,
            value:value
        });    
        
        cell.style.left = `${left * cellsize}px`;
        cell.style.top = `${top * cellsize}px`;
        
        field.append(cell);
        match(i)
        cell.addEventListener('click',()=>{
            move(i);
            match(i);
        })
    }
    movesCount=0;
    Moves.innerText= movesCount;
})

buttonS.addEventListener('click',()=>{
    cells=[]
    cells.push(empty);
    console.log(cells)
    while (field.firstChild) {
        field.removeChild(field.firstChild);
    }  
    clearInterval(interval);
    second=00
    minute=00

    secondel.innerHTML='00';
    minuteel.innerHTML='00';

    movesCount=0;
    Moves.innerText= movesCount;
})
