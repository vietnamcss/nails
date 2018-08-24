/* Write here your custom javascript codes */

var CustomScripts = function () {

    return {
        Init: function () {          
            LoadGoogleAnalytics();
            LoadFBPage();
        }
    }

}();

//LoadGoogleAnalytics
function LoadGoogleAnalytics()
{
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-102589095-2', 'auto');
    ga('send', 'pageview');
}

function blinker() {
    $('.blink_me').fadeOut(500);
    $('.blink_me').fadeIn(500);
}

function LoadFBPage()
{
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}



setInterval(blinker, 1500); //Runs every second