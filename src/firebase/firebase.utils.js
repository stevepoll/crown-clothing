import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB1vwDx0CVRgLa1ApuDd_Ot0Qy-hILVkxM",
  authDomain: "crown-db-bd5a4.firebaseapp.com",
  databaseURL: "https://crown-db-bd5a4.firebaseio.com",
  projectId: "crown-db-bd5a4",
  storageBucket: "crown-db-bd5a4.appspot.com",
  messagingSenderId: "713692464327",
  appId: "1:713692464327:web:57330964114fa0ecefeae2",
  measurementId: "G-4LX982JNVZ"
}

firebase.initializeApp(config)

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase
