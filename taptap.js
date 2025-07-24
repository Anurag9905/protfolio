

document.body.addEventListener(`click`,(event)=>{
    const circle =document.createElement(`div`)
    circle.className=`bubble`;

  const x = event.clientX;
  const y = event.clientY;

  circle.style.left = `${x-50}px`
  circle.style.top= `${y-50}px`

  const color = ["red", "blue", "orange", "green","purple", "white","yellow", "wheat"];
  circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

  const message=["Hi","Hello","hey","How","Are","You"];
  circle.textContent=message[Math.floor(Math.random()*message.length)];
  
  document.body.appendChild(circle);

    setTimeout(()=>{
    circle.remove();
  } ,5000)
})