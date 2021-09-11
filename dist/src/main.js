"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const container_1 = require("../lib/simpleIoCLib/container");
class Main {
    init() {
        console.log('hello world');
        new container_1.Container();
    }
}
exports.Main = Main;
new Main().init();
//# sourceMappingURL=main.js.map