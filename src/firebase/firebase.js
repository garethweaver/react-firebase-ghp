import app from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyD9BAB5NaXkdbMLeLQ1Sx9G23wyIs7D8Ns',
  authDomain: 'beta-project-e779d.firebaseapp.com',
  databaseURL: 'https://beta-project-e779d.firebaseio.com',
  projectId: 'beta-project-e779d',
  storageBucket: 'beta-project-e779d.appspot.com',
  messagingSenderId: '684952549325',
}

export const getUIConfig = firebase => {
  return {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
  }
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.database()
  }

  signOut = () => this.auth.signOut()

  todos = () => this.db.ref('todos')

  todo = uid => this.db.ref(`todos/${uid}`)
}

export default Firebase
