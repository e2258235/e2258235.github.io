

console.log("jQuery-testを読み込みました。");

//クリックするとopenのタグが付いたり消えたりする
//openが付いていると.openの処理が発動する
$("#page").on("click", function(){
    $(".drower").toggleClass("open");
})

function updateClock(){
    // 現在の時刻の取得
    const now = new Date();
    // 時間(hour)の文字列変換
    const hours = String(now.getHours()).padStart(2, '0');
    // 時間(minute)の文字列変換
    const minutes = String(now.getMinutes()).padStart(2, '0');
    // 時間(second)の文字列変換
    const seconds = String(now.getSeconds()).padStart(2, '0');
    // それぞれを一つの文字列にする
    const timeString = `${hours}:${minutes}:${seconds}`;

    $(".clock").text(timeString);
}

// 初期表示
updateClock();
// 1秒ごとに時計を更新
setInterval(updateClock, 1000);

//日にちの取得
let today = new Date();
//月と年を取得
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// 初期値を保存
let initialMonth = currentMonth;
let initialYear = currentYear;

const monthNames = [
    "1月", "2月", "3月", "4月", "5月", "6月",
    "7月", "8月", "9月", "10月", "11月", "12月"
];

function generateCalendar(month, year) {
    const calendarTitle = document.getElementById("month_number");
    const calendarBody = document.getElementById("calendar-body");

    //対象のタグがないなら、処理を行わない
    if (!calendarTitle || !calendarBody) return;

    //月の一日目の取得
    const firstDay = new Date(year, month, 1).getDay();
    //月末(週)の取得
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    //年、月の表示をセット
    calendarTitle.textContent = `${year}年 ${monthNames[month]}`;
    //日付のクリア(日付を新しく入れるため)
    calendarBody.innerHTML = "";

    let date = 1;

    //6週分の行を作る
    for (let i = 0; i < 6; i++) {
        //行の新規作成
        let row = document.createElement("tr");

        //7日分の列を作る
        for (let j = 0; j < 7; j++) {
            //セルの新規作成
            let cell = document.createElement("td");

            //空白のセルの判定および設定
            //一日目より前の日は空白
            if (i === 0 && j < firstDay) {
                cell.textContent = "";
            } 
            //晦日を超えたら空白に
            else if (date > daysInMonth) {
                cell.textContent = "";
            } 
            else {
                cell.textContent = date;
                if (j === 0) {
                    cell.classList.add("holiday");
                }
                date++;
            }

            row.appendChild(cell);
        }

        //7日分のセルを作ったらtbodyにセットする
        calendarBody.appendChild(row);
        //もし月末を超えたらbreakする
        if (date > daysInMonth) break;
    }
}

//グローバル関数として公開
window.changeMonth = function (offset) {
    currentMonth += offset;

    //月が0未満になったら12月にする
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    //11月を超えたら1月にする 
    else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    //カレンダーを書き換える
    generateCalendar(currentMonth, currentYear);
};

//月のリセット
window.resetMonth = function () {
    currentMonth = initialMonth;
    currentYear = initialYear;
    generateCalendar(currentMonth, currentYear);
};

//初期化(ページをロードした場合に発動)
window.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("month_number");
    const body = document.getElementById("calendar-body");

    //タイトルやカレンダーbodyがあれば初期表示
    if (title && body) {
        generateCalendar(currentMonth, currentYear);
    }
});


//const monthString = '${monthNames}のカレンダー';
//$("#month_number").text(monthString);