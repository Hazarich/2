"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 1.
function getFirstWord(a) {
    return a.split(/ +/)[0].length;
}
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}
function getAllProductNames(a) {
    var _a;
    return ((_a = a === null || a === void 0 ? void 0 : a.products) === null || _a === void 0 ? void 0 : _a.map(prod => prod === null || prod === void 0 ? void 0 : prod.name)) || [];
}
function hey1(a) {
    return "hey! i'm " + a.name();
}
hey1({ name: () => "roma", cuteness: 100 });
hey1({ name: () => "vasya", coolness: 100 });
// 4.2
class AbstractPet {
    name() {
        return '';
    }
}
class Cat extends AbstractPet {
}
class Dog extends AbstractPet {
}
function hey2(abstractPet) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat();
let b = new Dog();
hey2(a);
hey2(b);
function hey3(a) {
    return "hey! i'm " + a.name() + (a.type === "cat" ? (" cuteness: " + a.cuteness) : (" coolness: " + a.coolness));
}
hey3({ name: () => "roma", type: "cat", cuteness: 100 });
hey3({ name: () => "vasya", type: "dog", coolness: 100 });
// 5.
function stringEntries(a) {
    return Array.isArray(a) ? a : Object.keys(a);
}
// 6. (Only typings, as async/await not supported)
function world(a) {
    return Promise.resolve("*".repeat(a));
}
function hello() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield world(10);
    });
}
hello().then(r => console.log(r)).catch(e => console.log("fail"));
