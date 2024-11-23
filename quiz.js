const questions=[
    {
        question :"which is largest animal in the world?",
        answer:[
            
                {text:"shark",correct:false},
                {text:"blue-whale",correct:true},
                {text:"elephant",correct:false},
                {text:"giraffe",correct:false},
            
        ]
    },
    {
        question :"which is the smallest city in the world?",
        answer:[
            
                {text:"vetican-city",correct:true},
                {text:"paris",correct:false},
                {text:"bhutan",correct:false},
                {text:"nepal",correct:false},
            
        ]
    },
    {
    question : "which is the largest desert in the world?",
    answer : [
        
            {text:"kalahanri",correct:false},
            {text:"gobi",correct:false},
            {text:"sahara",correct:false},
            {text:"antartica",correct:true},
        
    ]
}
];
const ques = document.getElementById("question");
const answerbtn = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-button");

var currentquesindex=0;
var score=0;

function startquiz(){
    currentquesindex=0;
    score=0;
    nextbtn.innerHTML="NEXT";
    showques();
}

function showques(){
    resetanswer(); //it can be anywhere as it is just for hiding previous options
    let curques = questions[currentquesindex];
    let quesno=currentquesindex+1;
    ques.innerHTML=quesno + "." + curques.question;

    curques.answer.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.right_option=answer.correct;
        }
        button.addEventListener("click",selectAns);
    });


}
function resetanswer(){
    nextbtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function selectAns(e) {
    const selectedbtn=e.target;
    const iscorrect =selectedbtn.dataset.right_option==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button=>{
        if(button.dataset.right_option==="true"){
            button.classList.add("correct");
        }
        // else{
        //     button.classList.add("incorrect")
        // }
        // button.disabled=true;
        //agar ye else wala part add kiya to sari incorect chije bi dikh jayegi dispite having marked and it will be difficult to find which wrong answer have you marked
    });
    nextbtn.style.display="block"

}
function showScore(){
    resetanswer();
    ques.innerHTML=`you scored ${score}`;
    nextbtn.innerHTML="play again"
    nextbtn.style.display="block"
}
function handlenextbtn(){
    currentquesindex++;
    if(currentquesindex<questions.length){
        showques();
    }
    else{
        showScore();
    }
}
nextbtn.addEventListener("click",()=>{
    if(currentquesindex<questions.length){
        handlenextbtn();
    }
    else{
        startquiz();
    }
})
startquiz();

