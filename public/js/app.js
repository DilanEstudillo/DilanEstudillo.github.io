
function register() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var passwordA = document.getElementById('passwordA').value;
  if (password == passwordA) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function () {
        check();
        swal("Sign up Successful", "You clicked the button!", "success");
        setTimeout( window.location="/iniciar-sesion",5000);
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("passwordA").value = "";
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        swal(errorMessage, "You clicked the button!", "error");
      }); email - password.html
  } else {
    console.log('the second password does not match')
    swal("The second password does not match", "You clicked the button!", "error");
  }

}

function entry() {
  var emailL = document.getElementById('emailL').value;
  var passwordL = document.getElementById('passwordL').value;
  firebase.auth().signInWithEmailAndPassword(emailL, passwordL)
    .then(function (req, res) {
      if (true) {
        observer();
        informati();
      }
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      swal(errorMessage, "You clicked the button!", "error");
      console.log(errorCode);
      console.log(errorMessage);
    }); emailL - passwordL.html
}


function observer() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('user activate');
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

    } else {
      setTimeout( window.location="/iniciar-sesion");
      console.log('user not activate')
    }
  });
}
function informati() {
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;
  if (user) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    console.log(user.emailVerified);
    uid = user.uid;
    if (user.emailVerified == true) {
      swal("Login Successful", "You clicked the button!", "success");
      setTimeout( window.location="/nuevo-proyecto",3000);
    } else {
      swal("You need verified your Email", "You clicked the button!", "warning");
      setTimeout( window.location="/iniciar-sesion",5000);
    }
  }

}

function closes() {
  firebase.auth().signOut()
    .then(function () {
      console.log('Sign Out Successfully');
      observer();
      swal("Sign Out Successfully", "You clicked the button!", "success");
      setTimeout( window.location="/iniciar-sesion");
    })
    .catch(function (error) {
      console.log(error);
    });
}

function check() {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    console.log('Sent......');
  }).catch(function (error) {
    console.log(error);
  });
}

function resetPass() {
  var auth = firebase.auth();
  var emailR = document.getElementById('emailR').value;

  if (emailR != "") {
    auth.sendPasswordResetEmail(emailR).then(function () {
      swal("Email has been sent to you", "You clicked the button!", "warning");
      setTimeout( window.location="/iniciar-sesion",3000);
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      swal(errorMessage, "You clicked the button!", "error");
    });
  } else {
    swal("Please put tour email first", "You clicked the button!", "warning");

  }

}