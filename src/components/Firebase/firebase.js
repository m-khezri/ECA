import app from 'firebase/app';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCggkW2Ma2UYD4hG-hucaDFe0un_NYZuHM",
  authDomain: "eca-app-7c45e.firebaseapp.com",
  databaseURL: "https://eca-app-7c45e.firebaseio.com",
  projectId: "eca-app-7c45e",
  storageBucket: "eca-app-7c45e.appspot.com",
  messagingSenderId: "304053307286"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    // *** Auth API ***

    const doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

    const doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

    const doSignOut = () => this.auth.signOut();

    const doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    const doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }
}

export default Firebase;