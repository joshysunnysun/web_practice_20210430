let thisH1 = document.getElementsByTagName("h1")[0];

let timer = setInterval(showTime,1000);//方法的執行，參數一:呼叫的方法(required), 參數二:更新頻率(單位:毫秒)(required)
function showTime(){
    let currentTime = new Date();//每秒都要抓取一個新的時間(當下的時分秒)
    thisH1.innerHTML = currentTime.toLocaleTimeString();//show更新的時間
}