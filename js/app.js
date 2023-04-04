const setCount = document.getElementById('set-count');
// const endDate = document.getElementById('end-date');
const btn = document.getElementById('btn');
endDate = '4 Apr 2023 10:00 AM'
document.getElementById('end-date').innerText=endDate;
function fun1(){
    endDate=setCount.value
    document.getElementById('end-date').innerText=endDate;
    // endDate.innerHtml=setCount.value
}

btn.addEventListener('click',fun1);

// endDate = '4 Apr 2023 10:00 AM'
// document.getElementById('end-date').innerText=endDate;
// document.getElementById('end-date').innerHTML=endDate;
const input = document.querySelectorAll('input');

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    if (diff<0) return;
    //convert into days
    const days =Math.floor(diff/3600/24);
    input[0].value=days;

    // convert into hours
    const hours = Math.floor((diff/3600)%24)
    input[1].value=hours;

    // convert into minutes
    const minutes  = Math.floor((diff/60)%60);
    input[2].value=minutes;

    // convert into seconds
    const second = Math.floor(diff%60);
    input[3].value=second;
    }

// clock();
setInterval(
    () => {
        clock()
    },
    1000
);