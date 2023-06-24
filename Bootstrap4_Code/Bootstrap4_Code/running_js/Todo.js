
const btn1 = document.querySelector('#p1Button');
const btn2 = document.querySelector('#p2Button');
const btn3 = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const select = document.querySelector('#select');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;



btn1.addEventListener('click',function(){
  if(!isGameOver)
  {
    p1Score += 1;
    if(p1Score === winningScore)
    {
      isGameOver = true;
      p1Display.classList.add('winner');
      p2Display.classList.add('loser');

    }
    p1Display.textContent = p1Score;
  }
})

btn2.addEventListener('click',function(){
  if(!isGameOver)
  {
    p2Score += 1;
    if(p2Score === winningScore)
    {
      isGameOver = true;
      p2Display.classList.add('winner');
      p1Display.classList.add('loser');
    }
    p2Display.textContent = p2Score;
  }
})

select.addEventListener('change',function(){
  winningScore = parseInt(this.value);
  reset();
})

btn3.addEventListener('click',reset)

function reset(){
    isGameOver = false;
    p1Score =0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('loser','loser');
}

const fakeRequestPromise = (url) =>{
  return new Promise((success,fail) =>{
    const delay = Math.floor(Math.random() * 4500)+500;
    setTimeout(()=>{
      if(delay>4000){
        fail('connect timeout');
      }
      else{
        success(`here is your fake data from ${url}`);
      }
    },delay)
  })
}

fakeRequestPromise('naver.com')
.then((data)=>{
  console.log('1it worked');
  console.log(data);
  return fakeRequestPromise('naver2.com')
})
.then((data)=>{
  console.log('2it worked');
  console.log(data);
})
.catch((err)=>{
  console.log('rejected');
  console.log(err);

})