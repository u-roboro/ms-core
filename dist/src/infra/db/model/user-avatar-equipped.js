"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAvatarEquipped = void 0;
const Sequelize = __importStar(require("sequelize"));
exports.userAvatarEquipped = {
    name: "user_avatar_equipped",
    columns: {
        head: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        body: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        eyes: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        flag: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        background: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        foreground: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
        },
    },
};
//# sourceMappingURL=user-avatar-equipped.js.map