document.addEventListener('keydown', (e) => {
    switch (event.code) {
      case 'Escape':
        alert("インスタントモードに切り替えました。"); 
        //処理
        const elm = document.getElementsByClassName('x78zum5 xdt5ytf xg6iff7 x1n2onr6');

        if (0 < elm.length) {
            [...elm].forEach(function(v){ return v.remove() })
        }
      //終了
      break;
    }
});


//window.location.replace(""); //ページを更新し続ける

alert("インスタントモードを使うには、「Esc」キーを押してください。"); 


