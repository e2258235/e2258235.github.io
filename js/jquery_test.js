// $('セレクタ').メソッド();
    // 何を       どう処理するか
// →これが一行で完結する

console.log("jQuery-testを読み込みました。");

//セレクタ
//これで内部のtextを抽出
let test_p1 = $("#test-p1").text();
console.log(test_p1);

let test_p2 = $(".test-p2").text();
console.log(test_p2);

let p_123 = $('.p').text();
console.log(p_123);

//メソッド
//taggle(表示・非表示)
function toggle()
{
    //$("#test-p1").hide();
    //$("#test-p1").show();
    $("#test-p1").toggle();
}

function slide()
{
    //スライドダウン(表示させる)
    //$("test-p1").slideDown();

    //スライドアップ(非表示にさせる)
    //$("test-p1").slideUP();

    $("test-p1").slideToggle();
}

function fade()
{
    //フェードイン
    //$("test-p1").fadeIn();
    
    //フェードアウト
    //$("test-p1").fadeOut();

    $("test-p1").fadeToggle();
}
function color()
{
    $("test-p1").css("color", "red");
    $("test-p1").css("fontSize", "64px");
}
function custumAnimate()
{
    //JSON形式(オブジェクトを簡易的に管理するもの)プロパティを渡す
    //常にオブジェクトの状態を保持しているため連結可能
    $("test-p1").animate(
        {
            "fontSize": "64px",
        }
    ).animate(
        {
            "fontSize": "16px",
        }
    );
}

//イベントハンドラ
//focusイベントを取得する
$('input-1').on("focus", function(){
    console.log("インプットタグがフォーカスされました");
});

//clickイベント
$("h3").on("click", function(){
    console.log("h3タグがクリックされました");
    //h3の次の兄弟要素をslideToggleする
    //$("h3").next().slideToggle();
    //h3限定でフォーカスすることが出来る
    $(this).next().slideToggle();
});