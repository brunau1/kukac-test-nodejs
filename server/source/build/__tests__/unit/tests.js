"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Palindrome_controller_1 = __importDefault(require("../../source/controllers/Palindrome.controller"));
test('expect to return an array that contains palindrome numbers', function () {
    expect(Palindrome_controller_1.default.generatePalindromeNumbers(0, 100)).toBe(Array);
});
