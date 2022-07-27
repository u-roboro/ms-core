"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonNotFoundError = void 0;
const errors_1 = require("urobo/build/main/errors");
class CommonNotFoundError extends errors_1.BaseError {
    constructor() {
        super("GAAAAA", 404, {
            name: "Not Found",
            type: "system",
        });
    }
}
exports.CommonNotFoundError = CommonNotFoundError;
//# sourceMappingURL=common-not-found-error.js.map