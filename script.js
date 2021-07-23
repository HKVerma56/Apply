
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user").style.display="block";
    document.getElementById("signin").style.display="none";
    if (user != null) {
      var name = user.displayName;
  document.getElementById("user").innerHTML=""+name+"";

  } else {
    // No user is signed in.
    document.getElementById("signin").style.display="block";
    document.getElementById("user").style.display="none";
  }
};

function login(){
  closeForm();
  var user_email=document.getElementById("login_email").value;
  var user_pass=document.getElementById("login_psw").value;
  firebase.auth().signInWithEmailAndPassword(user_email,user_pass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

}
