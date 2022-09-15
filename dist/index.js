"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// configuracion .env 
dotenv_1.default.config();
// create app
const app = (0, express_1.default)();
const port = process.env.port || 8000;
//define la route de la app
app.get('/', (req, resp) => {
    //send hello word
    resp.send('welcome to my API Restfull:  Express + JS+ Swagger + Mongoose');
});
app.get('/hello', (req, resp) => {
    //send hello word
    resp.send('welcome to GET route: Helloo! ');
});
// Execute APP and Listen 
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Runnig at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map