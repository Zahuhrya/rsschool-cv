window.onload= function(){
    let step = 0;
    let AnswerCheck = false
    let res
    let FinalScore=0
    let AddScore = 5
    let IsCorrect=true
    let Added=true
    const score=document.querySelector(".score")
    const button = document.querySelector(".submit_button")
    const correct = new Audio('../assets/win.mp3');
    const error=new Audio('../assets/error.mp3');
    const answ = document.querySelector(".answer_list")
    const quest = document.querySelector(".quest_audio")
    const Title = document.querySelector(".quest_name")
    const TitleImg = document.querySelector(".quest_img")
    const img=document.querySelector(".info_img")
    const NameBird=document.querySelector(".info_name")
    const NameDesc=document.querySelector(".info_desc")
    const aud=document.querySelector(".info_audio")
    const ResScore=document.querySelector(".score_end")
    const result = document.querySelector(".result")
    const main = document.querySelector(".main-page")

    function ShowQuestion(questionNumber){
        if(step===6){
            result.style.display='block'
            main.style.display='none'
            ResScore.innerHTML = 'Поздравляю вы набрали '+FinalScore+' из 30 очков'
        }
        Title.innerHTML='*****'
        TitleImg.setAttribute('src','../assets/bird_img.jpg')
        res = Math.floor(Math.random() * 6)
        console.log(res)
        quest.setAttribute('src',birdsData[step][res]['audio'])
        let answer = ''
        for (let key in birdsData[step]){
            answer += `<li class="answer" data-v ="${key}">${birdsData[step][key]['name']}</li>`
        } 
        answ.innerHTML= answer;
    }
    
    document.onclick= function(event){
        if(event.target.classList.contains('answer')){
                img.style.display='block'
                img.setAttribute('src',birdsData[step][event.target.dataset.v]['image'])
                NameBird.innerHTML=birdsData[step][event.target.dataset.v]['name']
                NameDesc.innerHTML=birdsData[step][event.target.dataset.v]['description']
                aud.setAttribute('src',birdsData[step][event.target.dataset.v]['audio'])
                aud.style.display='block'
                if(res == event.target.dataset.v && IsCorrect===true){
                    AnswerCheck = true
                    IsCorrect=false
                }
                if(event.target.classList.contains('answer') && AnswerCheck === true){
                    event.target.style.color='green'
                    if(Added===true){
                        FinalScore+=AddScore
                        Added=false 
                    }
                    score.innerHTML='Score '+FinalScore
                    button.style.backgroundColor='lightseagreen'
                    correct.currentTime=0
                    correct.play()
                    Title.innerHTML=birdsData[step][event.target.dataset.v]['name']
                    TitleImg.setAttribute('src',birdsData[step][event.target.dataset.v]['image'])
                }else{
                    event.target.style.color='red'
                    AddScore=AddScore-1
                    error.currentTime=0
                    error.play()
                }
        }
        if(event.target.classList.contains('submit_button')&&AnswerCheck === true){
            AddScore=5
            Added=true
            console.log(FinalScore)
            step++
            button.style.backgroundColor='teal'
            aud.style.display='none'
            img.style.display='none'
            NameBird.innerHTML=''
            NameDesc.innerHTML=''
            aud.setAttribute('src','')
            AnswerCheck = false
            ShowQuestion(step)
            IsCorrect=true
            console.log(step)
        }

    }
    ShowQuestion(step)
}