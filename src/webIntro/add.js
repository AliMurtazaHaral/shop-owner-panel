const firebaseConfig = {
    apiKey: "AIzaSyBpvLHWCfl2jaMPJw36sWx-LCJ--bmhH80",
    authDomain: "fyp1-3d00d.firebaseapp.com",
    projectId: "fyp1-3d00d",
    storageBucket: "fyp1-3d00d.appspot.com",
    messagingSenderId: "709153003016",
    appId: "1:709153003016:web:46fd17482708829d54e3bd",
    measurementId: "G-Q7N3LXF53T"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


// Sign up function
function signUp() {
    const email = 'abc@gmail.com';
    const password = 'asdfghjk';
    console.log(email, password);
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}