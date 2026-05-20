"use strict";
// import express from 'express'
//
// const app = express()
//
// app.get('/', (req, res) => {
//     res.send('Hello World')
// })
//
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000')
// })
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    const htmlContent = `
        <h1 style="color: blue";>Мое приветствие</h1>
        <p>
            <span style="color: red;">
                Hello Everyone I am professional sport nutritionist and health coach. 
                My favorite bussines free time is front and back coding especially backend!
            </span>
        </p>
    `;
    res.send(htmlContent);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map