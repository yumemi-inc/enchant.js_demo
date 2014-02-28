enchant();

window.onload = function() {

    var game_ = new Game(320, 320); // 表示領域の大きさを設定
    game_.fps = 24;                 // ゲームの進行スピードを設定
    game_.preload('./img/start.png', './img/card_spade.png', './img/card_dia.png', './img/card_heart.png', './img/card_club.png'); // ゲームに使う素材を予め読み込み

    game_.onload = function() { // ゲームの準備が整ったらメインの処理を実行します

        /**
        * タイトルシーン
        *
        * タイトルシーンを作り、返す関数です。
        */
        var createStartScene = function() {

            var scene = new Scene();                                // 新しいシーンを作る
            scene.backgroundColor = '#fcc800';                      // シーンの背景色を設定

            // スタート画像設定
            var startImage = new Sprite(236, 48);                   // スプライトを作る
            startImage.image = game_.assets['./img/start.png'];     // スタート画像を設定
            startImage.x = 42;                                      // 横位置調整
            startImage.y = 136;                                     // 縦位置調整
            scene.addChild(startImage);                             // シーンに追加

            // タイトルラベル設定
            var title = new Label('カードが踊ります');              // ラベルを作る
            title.width = 320;
            title.textAlign = 'center';                             // 文字を中央寄せ
            title.color = '#ffffff';                                // 文字を白色に
            title.x = 0;                                            // 横位置調整
            title.y = 96;                                           // 縦位置調整
            title.font = '14px sans-serif';                         // 28pxのゴシック体にする
            scene.addChild(title);                                  // シーンに追加

            // スタート画像にタッチイベントを設定
            startImage.addEventListener(Event.TOUCH_START, function(e) {
                // 現在表示しているシーンをゲームシーンに置き換える
                game_.replaceScene(createGameScene());
            });

            // タイトルシーンを返します。
            return scene;

        };

        /**
        * ゲームシーン
        *
        * ゲームシーンを作り、返す関数です。
        */
        var createGameScene = function() {

            var scene = new Scene(); // 新しいシーンを作る
            scene.backgroundColor = '#fcc8f0';

             // スペードのカードを作ります
            var card1 = new Sprite(50, 75);
            card1.image = game_.assets['./img/card_spade.png'];
            card1.x = 0;             // 初期位置設定x
            card1.y = -75;           // 初期位置設定y
            scene.addChild(card1);   // シーンに追加

            // 以下、アニメーションを設定
            card1.tl.moveTo(135, 122.5, 24, enchant.Easing.QUAD_EASEOUT)          // ①24フレームかけて画面中央に移動
                    .and()                                                        // ↑↓ 同時にアニメーション
                    .rotateTo(360, 24, enchant.Easing.QUAD_EASEOUT)               // 24フレームかけて360度回転
                    .moveTo(85, 60, 6, enchant.Easing.BOUNCE_EASEOUT)             // ②6フレームかけて画面やや左上に移動
                    .scaleTo(0, 1, 5, enchant.Easing.QUAD_EASEIN)                 // ③5フレームかけて幅のスケールを0%に
                    .then(function(){card1.frame = 1})                            // カード画像のフレーム番号を1にして表を表示
                    .scaleTo(1, 1, 5, enchant.Easing.QUAD_EASEOUT)                // ④5フレームかけて幅のスケールを100%に戻す
                    .rotateBy(1080, 24, enchant.Easing.QUAD_EASEINOUT)            // ⑤24フレームかけて1080度回転
                    .scaleTo(0, 1, 5, enchant.Easing.QUAD_EASEIN)                 // ⑥5フレームかけて幅のスケールを0%に
                    .then(function(){card1.frame = 0})                            // カード画像のフレーム番号を0にして裏を表示
                    .scaleTo(1, 1, 5, enchant.Easing.QUAD_EASEOUT)                // ⑦5フレームかけて幅のスケールを100%に
                    .moveTo(135, 122.5, 6, enchant.Easing.QUAD_EASEOUT)           // ⑧6フレームかけて画面中央に移動
                    .moveTo(135, -75, 6, enchant.Easing.QUAD_EASEIN);             // ⑨6フレームかけて画面上部画面外に移動

            // 以下、アニメーションを設定
            var card2 = new Sprite(50, 75);
            card2.image = game_.assets['./img/card_dia.png'];
            card2.x = 320;
            card2.rotation = 90;
            scene.addChild(card2);
            card2.tl.delay(1)                                                     // card1より1フレームだけ開始を遅らせる
                    .moveTo(135, 122.5, 24, enchant.Easing.QUAD_EASEOUT)
                    .and()
                    .rotateTo(360, 24, enchant.Easing.QUAD_EASEOUT)
                    .moveTo(85, 185, 6, enchant.Easing.BOUNCE_EASEOUT)
                    .scaleTo(0, 1, 5, enchant.Easing.QUAD_EASEIN)
                    .then(function(){card2.frame = 1})
                    .scaleTo(1, 1, 5, enchant.Easing.QUAD_EASEOUT)
                    .rotateBy(-1080, 24, enchant.Easing.QUAD_EASEINOUT)
                    .scaleTo(0, 1, 5, enchant.Easing.QUAD_EASEIN)
                    .then(function(){card2.frame = 0})
                    .scaleTo(1, 1, 5, enchant.Easing.QUAD_EASEOUT)
                    .moveTo(135, 122.5, 6, enchant.Easing.QUAD_EASEOUT)
                    .moveTo(135, -75, 6, enchant.Easing.QUAD_EASEIN)

            // 以下、アニメーションを設定
            var card3 = new Sprite(50, 75);
            card3.image = game_.assets['./img/card_heart.png'];
            card3.x = 270;
            card3.y = 320;
            scene.addChild(card3);
            card3.tl.delay(2)                                                     // card1より2フレームだけ開始を遅らせる
                    .moveTo(135, 122.5, 24, enchant.Easing.QUAD_EASEOUT)
                    .and()
                    .rotateTo(360, 24, enchant.Easing.QUAD_EASEOUT)
                    .moveTo(185, 60, 6, enchant.Easing.BOUNCE_EASEOUT)
                    .scaleTo(0, 1, 5, enchant.Easing.QUAD_EASEIN)
                    .then(function(){card3.frame = 1})
                    .scaleTo(1, 1, 5, enchant.Easing.QUAD_EASEOUT)
                    .rotateBy(1080, 24, enchant.Easing.QUAD_EASEINOUT)
                    .scaleTo(0, 1, 5, enchant.Easing.QUAD_EASEIN)
                    .then(function(){card3.frame = 0})
                    .scaleTo(1, 1, 5, enchant.Easing.QUAD_EASEOUT)
                    .moveTo(135, 122.5, 6, enchant.Easing.QUAD_EASEOUT)
                    .moveTo(135, -75, 6, enchant.Easing.QUAD_EASEIN);

            // 以下、アニメーションを設定
            var card4 = new Sprite(50, 75);
            card4.image = game_.assets['./img/card_club.png'];
            card4.x = -75;
            card4.y = 270;
            card4.rotation = 270;
            scene.addChild(card4);
            card4.tl.delay(3)                                                     // card1より3フレームだけ開始を遅らせる
                    .moveTo(135, 122.5, 24, enchant.Easing.QUAD_EASEOUT)
                    .and()
                    .rotateTo(360, 24, enchant.Easing.QUAD_EASEOUT)
                    .moveTo(185, 185, 6, enchant.Easing.BOUNCE_EASEOUT)
                    .scaleTo(0, 1, 5, enchant.Easing.QUAD_EASEIN)
                    .then(function(){card4.frame = 1})
                    .scaleTo(1, 1, 5, enchant.Easing.QUAD_EASEOUT)
                    .rotateBy(-1080, 24, enchant.Easing.QUAD_EASEINOUT)
                    .scaleTo(0, 1, 5, enchant.Easing.QUAD_EASEIN)
                    .then(function(){card4.frame = 0})
                    .scaleTo(1, 1, 5, enchant.Easing.QUAD_EASEOUT)
                    .moveTo(135, 122.5, 6, enchant.Easing.QUAD_EASEOUT)
                    .moveTo(135, -75, 6, enchant.Easing.QUAD_EASEIN)
                    .then(function(){
                        // タイトルラベル設定
                        var text = new Label('I ♥ tl.enchant.js');                // ラベルを作る
                        text.width = 320;
                        text.textAlign = 'center';                                // 文字を中央寄せ
                        text.color = '#ffffff';                                   // 文字を白色に
                        text.y = 145;                                             // 縦位置調整
                        text.font = '32px sans-serif';                            // 28pxのゴシック体にする
                        text.opacity = 0;                                         // 透明にする
                        scene.addChild(text);                                     // シーンに追加
                        text.tl.fadeIn(10);                                       // ゆっくり表示させる
                    });

            return scene;
        }

        // ゲームの_rootSceneをスタートシーンに置き換える
        game_.replaceScene(createStartScene());

    }

    game_.start(); // ゲームをスタートさせます

}
