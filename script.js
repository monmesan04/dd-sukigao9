<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>DD 好き顔9選</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="app">
  <header class="topbar"><button class="tiny" id="topBtn">TOP</button><div class="logo">SUKIGAO <b>9</b></div><div class="save">自動保存</div></header>

  <main id="app">
    <section class="screen active" id="home">
      <div class="eyebrow">DD IDOL FAN-MADE</div>
      <h1>株式会社DD<br><span>好き顔9選</span></h1>
      <p class="lead">51人から、あなたの「顔が好き」TOP9を決めよう。</p>
      <div class="hero-card">
        <div class="heart">♡</div>
        <h2>推しランキングじゃなくて、<br>顔だけで直感勝負！</h2>
        <p>予選ではランダムな2〜4人から複数選択。<br>その後、本選・最終戦・決勝へ進みます。</p>
      </div>
      <button class="primary" id="startBtn">好き顔9選をはじめる</button>
      <button class="secondary" id="resumeBtn" hidden>途中から再開する</button>
      <p class="note">非公式のファン制作サイトです。株式会社DD・各グループ・各権利者とは関係ありません。</p>
    </section>

    <section class="screen" id="prelim">
      <div class="phase">🌱 PRELIMINARY</div>
      <div class="progress"><span id="prelimProgress"></span></div>
      <p class="counter" id="prelimCounter"></p>
      <h2>この中で好きな顔を<br>選んでね</h2>
      <p class="hint">複数OK。直感でどうぞ♡</p>
      <div class="member-grid" id="prelimGrid"></div>
      <div class="bottom-row"><button class="back" id="prelimBack">← ひとつ前</button><button class="primary small" id="prelimNext">次へ →</button></div>
      <p class="selected-count" id="selectedCount"></p>
    </section>

    <section class="screen" id="prelimClear">
      <div class="big-emoji">🎉</div><div class="phase">PRELIMINARY CLEAR</div>
      <h2>予選終了！</h2>
      <p id="prelimResultText"></p>
      <div class="stat" id="prelimStat"></div>
      <button class="primary" id="mainIntroBtn">🔥 本選へ</button>
      <button class="secondary" id="retryBtn">予選をもう一度やる</button>
    </section>

    <section class="screen" id="mainIntro">
      <div class="phase">🔥 MAIN ROUND</div>
      <h2>本選</h2>
      <p>ここから候補同士を比べます。<br><b>1位 → 2位</b>の順にタップしてください。</p>
      <div class="hero-card"><p>本選は3ラウンド。<br>表示された2〜4人の中から、まず一番好きな顔、次に二番目に好きな顔を選びます。</p></div>
      <button class="primary" id="mainStartBtn">本選スタート</button>
    </section>

    <section class="screen" id="main">
      <div class="phase">🔥 MAIN ROUND <span id="mainRoundLabel"></span></div>
      <div class="progress"><span id="mainProgress"></span></div>
      <p class="counter" id="mainCounter"></p>
      <h2 id="mainQuestion">① 一番好きな顔は？</h2>
      <p class="hint" id="mainHint">まず1位をタップ</p>
      <div class="member-grid compact" id="mainGrid"></div>
      <div class="bottom-row"><button class="back" id="mainBack">↶ ひとつ前</button></div>
    </section>

    <section class="screen" id="lastIntro">
      <div class="phase">⚔️ LAST BATTLE</div>
      <h2>本選 最終戦</h2>
      <p>決勝進出をかけて、ボーダー付近の候補をもう一度比較します。</p>
      <button class="primary" id="lastStartBtn">最終戦スタート</button>
    </section>

    <section class="screen" id="last">
      <div class="phase">⚔️ LAST BATTLE</div>
      <div class="progress"><span id="lastProgress"></span></div>
      <p class="counter" id="lastCounter"></p>
      <h2>① 一番好きな顔は？</h2>
      <p class="hint">決勝進出をかけて、まず1位をタップ</p>
      <div class="member-grid compact" id="lastGrid"></div>
    </section>

    <section class="screen" id="finalIntro">
      <div class="big-emoji">👑</div><div class="phase">FINALISTS</div>
      <h2>決勝進出メンバー決定！</h2>
      <p>ここからは完全二択。<br>あなたの好き顔TOP9を1位から9位まで決めます。</p>
      <div class="stat" id="finalistStat"></div>
      <button class="primary" id="finalStartBtn">👑 決勝へ</button>
    </section>

    <section class="screen" id="final">
      <div class="phase">👑 FINAL ROUND</div>
      <div class="progress"><span id="finalProgress"></span></div>
      <p class="counter" id="finalCounter"></p>
      <h2>どっちの顔が好き？</h2>
      <p class="hint">直感で1人をタップ</p>
      <div class="duel" id="finalDuel"></div>
    </section>

    <section class="screen" id="result">
      <div class="phase">YOUR SUKIGAO 9</div>
      <h1>あなたの<br><span>好き顔9選 👑</span></h1>
      <p>あなたの「顔が好き」TOP9</p>
      <div class="ranking" id="ranking"></div>
      <button class="primary" id="copyBtn">結果テキストをコピー</button>
      <button class="secondary" id="restartBtn">もう一度やる</button>
      <p class="note">画像・氏名等に関する権利は、それぞれの権利者に帰属します。写真を使用する場合は、利用条件を確認したうえでご自身で用意してください。</p>
    </section>
  </main>
</div>
<script>
const MEMBERS = [{"id": "m00", "name": "気まぐれプリンス", "group": "mesemoa", "image": "images/m00.jpg"}, {"id": "m01", "name": "とみたけ", "group": "mesemoa", "image": "images/m01.jpg"}, {"id": "m02", "name": "あおい", "group": "mesemoa", "image": "images/m02.jpg"}, {"id": "m03", "name": "ノックソ", "group": "mesemoa", "image": "images/m03.jpg"}, {"id": "m04", "name": "野崎弁当", "group": "mesemoa", "image": "images/m04.jpg"}, {"id": "m05", "name": "ようた", "group": "pandadragon", "image": "images/m05.jpg"}, {"id": "m06", "name": "ぱっち", "group": "pandadragon", "image": "images/m06.jpg"}, {"id": "m07", "name": "なるき", "group": "pandadragon", "image": "images/m07.jpg"}, {"id": "m08", "name": "たいが", "group": "pandadragon", "image": "images/m08.jpg"}, {"id": "m09", "name": "なぎ", "group": "pandadragon", "image": "images/m09.jpg"}, {"id": "m10", "name": "青野精一郎", "group": "relit", "image": "images/m10.jpg"}, {"id": "m11", "name": "黄ノ瀬はるき", "group": "relit", "image": "images/m11.jpg"}, {"id": "m12", "name": "綾野れん", "group": "relit", "image": "images/m12.jpg"}, {"id": "m13", "name": "滝かなた", "group": "relit", "image": "images/m13.jpg"}, {"id": "m14", "name": "仁科ひびき", "group": "relit", "image": "images/m14.jpg"}, {"id": "m15", "name": "宮前まさや", "group": "relit", "image": "images/m15.jpg"}, {"id": "m16", "name": "朝賀立", "group": "relit", "image": "images/m16.jpg"}, {"id": "m17", "name": "しゅん", "group": "nanacronicle", "image": "images/m17.jpg"}, {"id": "m18", "name": "かける", "group": "nanacronicle", "image": "images/m18.jpg"}, {"id": "m19", "name": "こむぎ", "group": "nanacronicle", "image": "images/m19.jpg"}, {"id": "m20", "name": "しま", "group": "nanacronicle", "image": "images/m20.jpg"}, {"id": "m21", "name": "おと", "group": "nanacronicle", "image": "images/m21.jpg"}, {"id": "m22", "name": "とら", "group": "nanacronicle", "image": "images/m22.jpg"}, {"id": "m23", "name": "げんと", "group": "nanacronicle", "image": "images/m23.jpg"}, {"id": "m24", "name": "たける", "group": "milkymonster", "image": "images/m24.jpg"}, {"id": "m25", "name": "りんと", "group": "milkymonster", "image": "images/m25.jpg"}, {"id": "m26", "name": "りょう", "group": "milkymonster", "image": "images/m26.jpg"}, {"id": "m27", "name": "ひい", "group": "milkymonster", "image": "images/m27.jpg"}, {"id": "m28", "name": "いなふ", "group": "milkymonster", "image": "images/m28.jpg"}, {"id": "m29", "name": "はるか", "group": "milkymonster", "image": "images/m29.jpg"}, {"id": "m30", "name": "しずく", "group": "milkymonster", "image": "images/m30.jpg"}, {"id": "m31", "name": "てん", "group": "milkymonster", "image": "images/m31.jpg"}, {"id": "m32", "name": "慧楽 壱", "group": "ramune", "image": "images/m32.jpg"}, {"id": "m33", "name": "今泉 光耀", "group": "ramune", "image": "images/m33.jpg"}, {"id": "m34", "name": "五十嵐 夕", "group": "ramune", "image": "images/m34.jpg"}, {"id": "m35", "name": "紫咲 伊織", "group": "ramune", "image": "images/m35.jpg"}, {"id": "m36", "name": "早瀬 颯馬", "group": "ramune", "image": "images/m36.jpg"}, {"id": "m37", "name": "マンチ漢", "group": "wanneko", "image": "images/m37.jpg"}, {"id": "m38", "name": "ゴールデンくんか君", "group": "wanneko", "image": "images/m38.jpg"}, {"id": "m39", "name": "ぺるしゃ御来光", "group": "wanneko", "image": "images/m39.jpg"}, {"id": "m40", "name": "チワワ・ジャップ・Jr", "group": "wanneko", "image": "images/m40.jpg"}, {"id": "m41", "name": "羅我魔fin.88", "group": "wanneko", "image": "images/m41.jpg"}, {"id": "m42", "name": "とあ", "group": "cafe", "image": "images/m42.jpg"}, {"id": "m43", "name": "きくちょー", "group": "cafe", "image": "images/m43.jpg"}, {"id": "m44", "name": "あづ", "group": "solo", "image": "images/m44.jpg"}, {"id": "m45", "name": "さっさー", "group": "solo", "image": "images/m45.jpg"}, {"id": "m46", "name": "渚こうた", "group": "solo", "image": "images/m46.jpg"}, {"id": "m47", "name": "ぜあらる。", "group": "solo", "image": "images/m47.jpg"}, {"id": "m48", "name": "え〜すけ", "group": "solo", "image": "images/m48.jpg"}, {"id": "m49", "name": "とみながー", "group": "solo", "image": "images/m49.jpg"}, {"id": "m50", "name": "橙野 電機", "group": "solo", "image": "images/m50.jpg"}];
const GROUPS = {"mesemoa": "MeseMoa.", "pandadragon": "パンダドラゴン", "relit": "ReLIT", "nanacronicle": "ナナロニクル", "milkymonster": "MilkyMonster", "ramune": "ラムネ商店街", "wanneko": "わんちゃんわんわんねこにゃんにゃん", "cafe": "DD LIVE CAFE cosmic!!", "solo": "ソロ / タレント"};
</script>
<script src="script.js"></script>
</body>
</html>