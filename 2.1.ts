// 1.
function getFirstWord(a: string): number {
    return a.split(/ +/)[0].length;
}

// 2.
interface User {
    name: string;
    surname: string;
}

interface UserNamings {
    fullname: string;
    initials: string;
}

function getUserNamings(a: User): UserNamings {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}

// 3.
interface Product {
    name: string;
}

function getAllProductNames(a?: { products?: Product[] }): string[] {
    return a?.products?.map(prod => prod?.name) || [];
}

// 4.1
interface NamedEntity {
    name: () => string;
    cuteness?: number;
    coolness?: number;
}

function hey1(a: NamedEntity){
    return "hey! i'm " + a.name();
}
hey1({name: () => "roma", cuteness: 100});
hey1({name: () => "vasya", coolness: 100});

// 4.2
class AbstractPet {
    name(): string {
        return '';
    }
}

class Cat extends AbstractPet {}
class Dog extends AbstractPet {}

function hey2(abstractPet: AbstractPet): string {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat();
let b = new Dog();
hey2(a);
hey2(b);

// 4.3
interface Animal {
    name: () => string;
    type: string;
    cuteness?: number;
    coolness?: number;
}

function hey3(a: Animal): string {
    return "hey! i'm " + a.name() + (a.type === "cat" ? (" cuteness: " + a.cuteness) : (" coolness: " + a.coolness));
}
hey3({name: () => "roma", type: "cat", cuteness: 100});
hey3({name: () => "vasya", type: "dog", coolness: 100});

// 5.
function stringEntries<T>(a: T[] | Record<string, T>): T[] {
    return Array.isArray(a) ? a : Object.keys(a) as any[];
}

// 6. (Only typings, as async/await not supported)
function world(a: number): Promise<string> {
    return Promise.resolve("*".repeat(a));
}
async function hello(): Promise<string> {
    return await world(10);
}
hello().then(r => console.log(r)).catch(e => console.log("fail"));
