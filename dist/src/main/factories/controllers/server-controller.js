"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateByWhereController = exports.makeUpdateBySlugController = exports.makeUpdateByIdController = exports.makeFindByWhereController = exports.makeFindBySlugController = exports.makeFindByIdController = exports.makeFindAllController = exports.makeDeleteByWhereController = exports.makeDeleteBySlugController = exports.makeDeleteByIdController = exports.makeCreateController = void 0;
const repositories_1 = require("../../../infra/db/repositories");
const generic_1 = require("../../../presentation/controllers/generic");
const makeCreateController = () => {
    return new generic_1.CreateGenericController(new repositories_1.ServerRepository());
};
exports.makeCreateController = makeCreateController;
const makeDeleteByIdController = () => {
    return new generic_1.DeleteByIdGenericController(new repositories_1.ServerRepository());
};
exports.makeDeleteByIdController = makeDeleteByIdController;
const makeDeleteBySlugController = () => {
    return new generic_1.DeleteBySlugGenericController(new repositories_1.ServerRepository());
};
exports.makeDeleteBySlugController = makeDeleteBySlugController;
const makeDeleteByWhereController = () => {
    return new generic_1.DeleteByWhereGenericController(new repositories_1.ServerRepository());
};
exports.makeDeleteByWhereController = makeDeleteByWhereController;
const makeFindAllController = () => {
    return new generic_1.FindAllGenericController(new repositories_1.ServerRepository());
};
exports.makeFindAllController = makeFindAllController;
const makeFindByIdController = () => {
    return new generic_1.FindByIdGenericController(new repositories_1.ServerRepository());
};
exports.makeFindByIdController = makeFindByIdController;
const makeFindBySlugController = () => {
    return new generic_1.FindBySlugGenericController(new repositories_1.ServerRepository());
};
exports.makeFindBySlugController = makeFindBySlugController;
const makeFindByWhereController = () => {
    return new generic_1.FindByWhereGenericController(new repositories_1.ServerRepository());
};
exports.makeFindByWhereController = makeFindByWhereController;
const makeUpdateByIdController = () => {
    return new generic_1.UpdateByIdGenericController(new repositories_1.ServerRepository());
};
exports.makeUpdateByIdController = makeUpdateByIdController;
const makeUpdateBySlugController = () => {
    return new generic_1.UpdateBySlugGenericController(new repositories_1.ServerRepository());
};
exports.makeUpdateBySlugController = makeUpdateBySlugController;
const makeUpdateByWhereController = () => {
    return new generic_1.UpdateByWhereGenericController(new repositories_1.ServerRepository());
};
exports.makeUpdateByWhereController = makeUpdateByWhereController;
//# sourceMappingURL=server-controller.js.map