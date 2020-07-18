(function(){
    if (window.myBookmarlet !== undefined){
        myBookmarlet();
    } else {
        document.body.appendChild(document.createElement('script')).src='https://a41e5c030666.ngrok.io/static/js/bookmarklet.js?r='+Math.floor(Math.random()*9999999999999999999);
    }
})();
