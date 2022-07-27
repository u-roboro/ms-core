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
exports.Avatar = void 0;
const Sequelize = __importStar(require("sequelize"));
exports.Avatar = {
    name: "avatar",
    columns: {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        n: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        gender: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        type: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        filename: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        animation: {
            type: Sequelize.JSON,
            allowNull: false,
        },
        visible: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        min_rank: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        note: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        gold_week: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        gold_month: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        gold_perm: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        cash_week: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        cash_month: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        cash_perm: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        stat_pop: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        stat_time: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        stat_atk: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        stat_def: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        stat_life: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        stat_item: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        stat_dig: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        stat_shld: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        remove_time: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        slug: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    },
};
//# sourceMappingURL=avatar.js.map