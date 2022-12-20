"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.OptionText = exports.OptionIcon = exports.OptionView = exports.BalanceTotalHidden = exports.BalanceTotal = exports.Subtitle = exports.AccountView = exports.TotalBalance = exports.WelcomeText = exports.UserIconView = exports.OptionsIcon = exports.UpperView = exports.Container = void 0;
var styled_components_1 = require("styled-components");
var react_native_1 = require("react-native");
var width = react_native_1.Dimensions.get('window').width;
// @ts-ignore
exports.Container = styled_components_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 20%;\n\n  padding: 40px 24px 8px 24px;\n\n  background-color: #820AD1;\n  justify-content: space-around;\n"], ["\n  width: 100%;\n  height: 20%;\n\n  padding: 40px 24px 8px 24px;\n\n  background-color: #820AD1;\n  justify-content: space-around;\n"])));
// @ts-ignore
exports.UpperView = styled_components_1["default"].View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"])));
// @ts-ignore
exports.OptionsIcon = styled_components_1["default"].View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-direction: row;\n\n"], ["\n  flex-direction: row;\n\n"])));
// @ts-ignore
exports.UserIconView = styled_components_1["default"].View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 40px;\n  aspect-ratio: 1;\n  justify-content: center;\n  align-items: center;\n  background-color: #A75DD9;\n  border-radius: 100px;\n"], ["\n  width: 40px;\n  aspect-ratio: 1;\n  justify-content: center;\n  align-items: center;\n  background-color: #A75DD9;\n  border-radius: 100px;\n"])));
// @ts-ignore
exports.WelcomeText = styled_components_1["default"].Text(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n"], ["\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n"])));
// @ts-ignore
exports.TotalBalance = styled_components_1["default"].View(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 24px;\n"], ["\n  padding: 24px;\n"])));
// @ts-ignore
exports.AccountView = styled_components_1["default"].View(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex-direction: row;\n  justify-content: space-between;\n"], ["\n  flex-direction: row;\n  justify-content: space-between;\n"])));
// @ts-ignore
exports.Subtitle = styled_components_1["default"].Text(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight:600;\n  margin-bottom:8px;\n"], ["\n  font-size: 16px;\n  font-weight:600;\n  margin-bottom:8px;\n"])));
// @ts-ignore
exports.BalanceTotal = styled_components_1["default"].Text(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: 20px;\n  font-weight:700;\n  margin-top:8px;\n"], ["\n  font-size: 20px;\n  font-weight:700;\n  margin-top:8px;\n"])));
// @ts-ignore
exports.BalanceTotalHidden = styled_components_1["default"].View(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-top: 8px;\n  height: 30px;\n  width: 70%;\n  background-color: #C1BEC2;\n  border-radius: 2px;\n"], ["\n  margin-top: 8px;\n  height: 30px;\n  width: 70%;\n  background-color: #C1BEC2;\n  border-radius: 2px;\n"])));
// @ts-ignore
exports.OptionView = styled_components_1["default"].TouchableOpacity(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  align-items: center;\n  margin: 0 10px;\n"], ["\n  align-items: center;\n  margin: 0 10px;\n"])));
// @ts-ignore
exports.OptionIcon = styled_components_1["default"].View(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  width: ", "px;\n  aspect-ratio: 1;\n  background-color: #E6E6E6;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100px;\n"], ["\n  width: ", "px;\n  aspect-ratio: 1;\n  background-color: #E6E6E6;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100px;\n"])), width * 0.18);
// @ts-ignore
exports.OptionText = styled_components_1["default"].Text(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-size: 14px;\n  font-weight: 700;\n"], ["\n  font-size: 14px;\n  font-weight: 700;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
