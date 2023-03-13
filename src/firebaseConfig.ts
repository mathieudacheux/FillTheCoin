import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyAQZ1Jw-71Eutw0MP7ZI5Ad_q-x4-ull4w',
  authDomain: 'fillthecoin.firebaseapp.com',
  projectId: 'fillthecoin',
  storageBucket: 'fillthecoin.appspot.com',
  messagingSenderId: '25696958939',
  appId: '1:25696958939:web:593ffa05c53753d21a0ffe',
  measurementId: 'G-09570HMES4',
}

const appFirebase = initializeApp(firebaseConfig)
const database = getFirestore(appFirebase)

export default database
