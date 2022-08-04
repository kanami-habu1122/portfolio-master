

$('.link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;  //idの上部の距離を取得
  $('body,html').animate({ scrollTop: pos }, 600); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#FFF4E1',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#E67A7A',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	
	$("#splash_text").fadeOut(10);//フェイドアウトでローディングテキストを削除
	$(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
	$(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加
	$("#splash").fadeOut();//#splashエリアをフェードアウト
	$('html,body').animate({ scrollTop: 0 }, '1');
	
});

function fadeAnime() {

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.start_animation').each(function () { //skillというID名が
    var elemPos = $(this).offset().top - 30; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $('.chart__title').addClass('animation_title');
	  $('.chart__bar').addClass('animation_bar');
    } 
  });

  //関数でまとめることでこの後に違う動きを追加することが出来ます
//   $('.start_animation_bar').each(function () { //fadeInDownTriggerというクラス名が
//     var elemPos = $(this).offset().top - 30; //要素より、50px上の
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight) {
//       $('').addClass('start_animation_bar');
//     } 
//   });


}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// // 画面が読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function () {
//   fadeAnime();/* アニメーション用の関数を呼ぶ*/
// });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述