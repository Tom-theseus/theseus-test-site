// 動作確認用のスクリプト

document.addEventListener('DOMContentLoaded', function() {

  // 現在のURL表示
  document.getElementById('current-url').textContent = window.location.href;

  // 表示日時(JST)
  const now = new Date();
  const formatted = now.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById('current-time').textContent = formatted + ' (JST)';

  // ブラウザ情報
  document.getElementById('user-agent').textContent = navigator.userAgent;

  // 画像読み込みボタン
  document.getElementById('show-image-btn').addEventListener('click', function() {
    const area = document.getElementById('image-area');
    if (area.querySelector('img')) {
      area.innerHTML = '';
      this.textContent = '画像を読み込む';
    } else {
      area.innerHTML = '<img src="logo.png" alt="Theseus logo" onerror="this.parentElement.innerHTML=\'<p style=&quot;color:#ff6b6b;font-size:13px&quot;>logo.pngが読み込めなかった。同じフォルダにアップロードされてるか確認</p>\'">';
      this.textContent = '画像を隠す';
    }
  });
});
