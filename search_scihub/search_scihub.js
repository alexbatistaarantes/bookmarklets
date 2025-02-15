javascript:( function(){
    var current_url = window.location.href;
    var scihub_url = "https://sci-hub.se/";
    window.open( scihub_url + current_url, '_blank' ).focus()
}() )