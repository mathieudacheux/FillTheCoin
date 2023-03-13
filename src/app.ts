import express from 'express'
import { create } from 'express-handlebars'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAQZ1Jw-71Eutw0MP7ZI5Ad_q-x4-ull4w",
  authDomain: "fillthecoin.firebaseapp.com",
  projectId: "fillthecoin",
  storageBucket: "fillthecoin.appspot.com",
  messagingSenderId: "25696958939",
  appId: "1:25696958939:web:593ffa05c53753d21a0ffe",
  measurementId: "G-09570HMES4"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

const appExpress = express()

const hbs = create({
  // Specify helpers which are only registered on this instance.
  helpers: {
    foo() {
      return 'FOO!'
    },
    bar() {
      return 'BAR!'
    },
  },
})

appExpress.engine('handlebars', hbs.engine)
appExpress.set('view engine', 'handlebars')
appExpress.set('views', './views')

appExpress.get('/', (req, res, next) => {
  res.render('home', {
    showTitle: true,

    // Override foo helper only for this rendering.
    helpers: {
      foo() {
        return 'foo.'
      },
    },
  })
})

appExpress.listen(3000)