
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '357467334695776',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });
    FB.AppEvents.logPageView();
  };
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  function statusChangeCallback(response) {
    if(response.status === 'conected'){
      console.log('Que traanza');
      location.href="http://localhost:8080/APIFacebook/index.html";
    }else{
      console.log("No se pudo bro");
    }
  }
