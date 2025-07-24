const cricketQuiz = [
  {
    question: "Who won the first ever Cricket World Cup?",
    options: ["India", "West Indies", "Australia", "England"],
    answer: "West Indies"
  },
  {
    question: "How many players are there in a standard cricket team?",
    options: ["10", "11", "12", "9"],
    answer: "11"
  },
  {
    question: "Who is known as the 'Little Master'?",
    options: ["Rahul Dravid", "MS Dhoni", "Sachin Tendulkar", "Virat Kohli"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "What does LBW stand for?",
    options: ["Leg Before Wicket", "Leg Behind Wicket", "Long Ball Wicket", "Left Bat Wide"],
    answer: "Leg Before Wicket"
  },
  {
    question: "In which year did India win its first Cricket World Cup?",
    options: ["1979", "1987", "1983", "1992"],
    answer: "1983"
  },
  {
    question: "How many runs is a boundary worth if the ball crosses the boundary without touching the ground?",
    options: ["4", "6", "2", "5"],
    answer: "6"
  },
  {
    question: "Who was the captain of the Indian cricket team in the 2011 World Cup?",
    options: ["Virat Kohli", "Sourav Ganguly", "MS Dhoni", "Yuvraj Singh"],
    answer: "MS Dhoni"
  },
  {
    question: "What is the shape of a cricket pitch?",
    options: ["Circular", "Square", "Rectangular", "Triangular"],
    answer: "Rectangular"
  },
  {
    question: "How many legal deliveries are there in an over?",
    options: ["5", "6", "7", "8"],
    answer: "6"
  },
  {
    question: "Who holds the record for the fastest century in ODIs?",
    options: ["AB de Villiers", "Chris Gayle", "Shahid Afridi", "Virender Sehwag"],
    answer: "AB de Villiers"
  },
  {
    question: "Which country is known as the origin of cricket?",
    options: ["Australia", "India", "England", "South Africa"],
    answer: "England"
  },
  {
    question: "What color ball is used in Test cricket?",
    options: ["White", "Red", "Pink", "Yellow"],
    answer: "Red"
  },
  {
    question: "Who is the highest run-scorer in international cricket?",
    options: ["Ricky Ponting", "Virat Kohli", "Kumar Sangakkara", "Sachin Tendulkar"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "What does a hat-trick in cricket mean?",
    options: ["Three sixes in a row", "Three wickets in three consecutive balls", "Three boundaries in an over", "Three run outs in one match"],
    answer: "Three wickets in three consecutive balls"
  },
  {
    question: "What is the maximum number of overs allowed per bowler in a T20 match?",
    options: ["2", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is the length of a cricket pitch?",
    options: ["20 yards", "18 yards", "22 yards", "25 yards"],
    answer: "22 yards"
  },
  {
    question: "Who was the first cricketer to score a double century in ODIs?",
    options: ["Rohit Sharma", "Sachin Tendulkar", "Virender Sehwag", "Martin Guptill"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "What is DRS in cricket?",
    options: ["Direct Run System", "Decision Review System", "Dismissal Rate Strategy", "Delivery Rotation Style"],
    answer: "Decision Review System"
  },
  {
    question: "Which of these is not a fielding position?",
    options: ["Silly point", "Gully", "Wicketkeeper", "Bouncer"],
    answer: "Bouncer"
  },
  {
    question: "What does the term 'maiden over' mean?",
    options: ["An over where the bowler takes a wicket", "An over where no runs are scored", "An over with only boundaries", "An over bowled by a new player"],
    answer: "An over where no runs are scored"
  }
];

function RandomQuestion(){
// const data=new Set();

// while(data.size!=5){
// const index=Math.floor(Math.random()*cricketQuiz.length)
// data.add(cricketQuiz[index]);

// }
// return [...data];
cricketQuiz.sort(()=>Math.random()-0.5);

return cricketQuiz.slice(0,5);
  
}

const form=document.querySelector(`form`);

const problem= RandomQuestion();
const original_answer={}

problem.forEach( (obj,index)=> {
    
   const div_element=document.createElement(`div`)
   div_element.className=`question`;
   original_answer[`q${index+1}`]= obj.answer;
   
   const para=document.createElement(`p`)
   para.textContent=`${index+1}. ${obj[`question`]}`;
   div_element.appendChild(para);

   obj.options.forEach((data)=>{
    const label=document.createElement(`label`);
    const input=document.createElement(`input`);
    input.type="radio";
    input.name=`q${index+1}`;
    input.value=data;

    label.appendChild(input);
    label.appendChild(document.createTextNode(data))
    div_element.appendChild(label);
    div_element.appendChild(document.createElement(`br`));
   })

   form.appendChild(div_element)
});

const button =  document.createElement('button');
button.type = 'submit'
button.className = "submit-btn"
button.textContent = "Submit";

form.appendChild(button);


form.addEventListener(`submit`,(event)=>{
   event.preventDefault();
  const data= new FormData(form)

  let result=0;

  for(let [key,value] of data.entries()){
     if(value===original_answer[key]){
      result++;
     }
  }
  const out= document.getElementById(`out`);
  out.innerHTML=`${result} out of 5 is correct`;

   form.reset();

})
