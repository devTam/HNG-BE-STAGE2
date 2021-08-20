"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 5000;
app.use(express_1.default.static('client'));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
