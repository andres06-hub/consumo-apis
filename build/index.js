"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("./config/index"));
//////////////////////////////////////////////////
app_1.default.listen(index_1.default.port, () => {
    console.log(`

        ********************************************
        🛡️  :: Server on PORT :: ${index_1.default.port} :: 🛡️
                name Project ${index_1.default.name} 
        ********************************************
    `);
});
