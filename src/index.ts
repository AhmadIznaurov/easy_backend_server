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


import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
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
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});