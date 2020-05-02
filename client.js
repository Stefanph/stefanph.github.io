(function(){
  console.log("we chillin'");
  const firebaseConfig = {
    apiKey: "AIzaSyBkbyNCd9uxXd2w_LKTqbB6EcEPSJ-Ta60",
    authDomain: "parkingspot-269711.firebaseapp.com",
    databaseURL: "https://parkingspot-269711.firebaseio.com",
    projectId: "parkingspot-269711",
    storageBucket: "parkingspot-269711.appspot.com",
    messagingSenderId: "773042628887",
    appId: "1:773042628887:web:1678560e094fca611a6f52",
    measurementId: "G-DH5H0YPMGW"
  };
    firebase.initializeApp(firebaseConfig);

    const googleLoginButton= document.getElementById('googleLoginButton');

    googleLoginButton.addEventListener('click', e => {
      var provider = new firebase.auth.GoogleAuthProvider();
      const auth=firebase.auth();
      const promise = auth.signInWithPopup(provider);
      promise.catch(e => console.log(e.message));
    });

}());


var days=0;
var hours=0;

function showVal_1(val){
  document.getElementById("show_user_1").innerHTML = val;
  days=val;
  calcTotal()
}

function showVal_2(val){
  document.getElementById("show_user_2").innerHTML = val;
  hours=val;
  calcTotal()
}

function calcTotal(){
 document.getElementById("show_user_3").innerHTML=days*hours*15;
}





/* 
var app_firebase;

function loginGoogle(){
  
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'client.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'client.html',
  // Privacy policy url.
  privacyPolicyUrl: 'client.html'
};
ui.start('#firebaseui-auth-container', uiConfig);


  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().languageCode = 'sv';
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...  

  }).catch(function(error) {

    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}

// Initialize the FirebaseUI Widget using Firebase.

/* 

(function(){
  var firebaseConfig = {
    apiKey: "AIzaSyBkbyNCd9uxXd2w_LKTqbB6EcEPSJ-Ta60",
    authDomain: "parkingspot-269711.firebaseapp.com",
    databaseURL: "https://parkingspot-269711.firebaseio.com",
    projectId: "parkingspot-269711",
    storageBucket: "parkingspot-269711.appspot.com",
    messagingSenderId: "773042628887",
    appId: "1:773042628887:web:1678560e094fca611a6f52",
    measurementId: "G-DH5H0YPMGW"
  };
  app_firebase=firebase;
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
      window.location.assign('<your-privacy-policy-url>');
    }
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);

  */   