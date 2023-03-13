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
exports.userPost = exports.userGet = void 0;
const express_1 = __importDefault(require("express"));
const firebaseConfig_1 = __importDefault(require("../firebaseConfig"));
const lite_1 = require("firebase/firestore/lite");
const appExpress = (0, express_1.default)();
const userGet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, lite_1.collection)(firebaseConfig_1.default, 'user');
        const usersData = yield (0, lite_1.getDocs)(users);
        const usersList = usersData.docs.map((doc) => doc.data());
        return usersList;
    }
    catch (error) {
        res.send(error);
    }
});
exports.userGet = userGet;
const userPost = appExpress.post('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, lite_1.collection)(firebaseConfig_1.default, 'user');
        const usersData = yield (0, lite_1.getDocs)(users);
        const usersList = usersData.docs.map((doc) => doc.data());
        res.status(200).json(usersList);
        return usersList;
    }
    catch (error) {
        res.send(error);
    }
}));
exports.userPost = userPost;
//# sourceMappingURL=userController.js.map