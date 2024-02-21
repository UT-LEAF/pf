function scrollToSectionWithCurtain(sectionId) {
  // カーテン要素を作成
  var curtain = document.createElement("div");
  curtain.id = "curtain"; // IDを'curtain'に設定
  document.body.appendChild(curtain); // bodyにカーテンを追加

  // カーテンを画面全体に表示するために位置を設定
  setTimeout(function () {
    curtain.style.top = "0";
  }, 10); // 10ミリ秒後に実行

  // カーテンが表示された後、指定されたセクションにスクロールする
  setTimeout(function () {
    var target = document.querySelector(sectionId); // 対象のセクションを選択
    target.classList.remove("hidden"); // hiddenクラスを削除してコンテンツを表示
    target.scrollIntoView({
      behavior: "smooth", // スムーススクロールを有効化
    });

    // カーテンを上に引き上げる
    setTimeout(function () {
      curtain.style.top = "-100%"; // カーテンを非表示にするために上に移動

      // カーテンをDOMから削除
      setTimeout(function () {
        document.body.removeChild(curtain);
      }, 300); // 400ミリ秒後に実行
    }, 400); // 800ミリ秒後にカーテンを上に移動開始
  }, 500); // ここを調整してカーテンが下りている時間を変更
}
