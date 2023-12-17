"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCategoryIncome = void 0;
const auth_1 = require("../services/auth");
const custom_http_1 = require("../services/custom-http");
const config_1 = __importDefault(require("../../config/config"));
class EditCategoryIncome {
    constructor() {
        this.inputNameElement = document.getElementById('input-name-income');
        this.btnSaveElement = document.getElementById('btn-save-income');
        this.addInputNameIncome();
        this.newNameIncome();
    }
    addInputNameIncome() {
        let result = localStorage.getItem('BlockName');
        if (result) {
            JSON.parse(result);
            result = result.replace(/[^а-яё]/gi, ' ');
            if (this.inputNameElement) {
                this.inputNameElement.placeholder = result;
            }
        }
    }
    newNameIncome() {
        const that = this;
        let resultId = localStorage.getItem('BlockId');
        if (resultId) {
            JSON.parse(resultId);
            resultId = resultId.replace(/[^1-9]/gi, ' ');
            resultId = parseInt(resultId).toString();
        }
        if (this.btnSaveElement) {
            this.btnSaveElement.onclick = function () {
                var _a;
                const userInfo = auth_1.Auth.getUserInfo();
                if (!userInfo) {
                    location.href = '#/login';
                }
                try {
                    const result = custom_http_1.CustomHttp.request(config_1.default.host + '/categories/income/' + resultId, "PUT", {
                        title: (_a = that.inputNameElement) === null || _a === void 0 ? void 0 : _a.value
                    });
                }
                catch (error) {
                    console.log(error);
                }
            };
        }
    }
}
exports.EditCategoryIncome = EditCategoryIncome;
//# sourceMappingURL=editCategoryIncome.js.map