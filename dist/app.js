"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const app_1 = require("firebase/app");
const lite_1 = require("firebase/firestore/lite");
const firebaseConfig = {
    apiKey: "AIzaSyAQZ1Jw-71Eutw0MP7ZI5Ad_q-x4-ull4w",
    authDomain: "fillthecoin.firebaseapp.com",
    projectId: "fillthecoin",
    storageBucket: "fillthecoin.appspot.com",
    messagingSenderId: "25696958939",
    appId: "1:25696958939:web:593ffa05c53753d21a0ffe",
    measurementId: "G-09570HMES4"
};
const appFirebase = (0, app_1.initializeApp)(firebaseConfig);
console.log(appFirebase);
const db = (0, lite_1.getFirestore)(appFirebase);
console.log(db);
// Get a list of cities from your database
function getCities(db) {
    return __awaiter(this, void 0, void 0, function* () {
        const citiesCol = (0, lite_1.collection)(db, 'cities');
        const citySnapshot = yield (0, lite_1.getDocs)(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return cityList;
    });
}
const appExpress = (0, express_1.default)();
const hbs = (0, express_handlebars_1.create)({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo() {
            return 'FOO!';
        },
        bar() {
            return 'BAR!';
        },
    },
});
appExpress.engine('handlebars', hbs.engine);
appExpress.set('view engine', 'handlebars');
appExpress.set('views', './views');
appExpress.get('/', (req, res, next) => {
    res.render('home', {
        showTitle: true,
        // Override foo helper only for this rendering.
        helpers: {
            foo() {
                return 'foo.';
            },
        },
    });
});
appExpress.listen(3000);
//# sourceMappingURL=app.js.map