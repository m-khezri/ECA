import app from 'firebase/app';

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
  }
}

export default Firebase;