// 1

async function getIPAddressWrapper(callback:any) {
    try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        callback(data.ip);
    } catch (error) {
        console.log(error);
    }
}
/*
// 2

async function getIPAddress1() {
    try{
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    }
    catch(error){
        console.log(error);
    }
}

getIPAddress1()

// 3

async function fetchDataFromUrl(url: string) {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        throw (error)
    }
}


// 3.1 async/await + Promise.all

async function asyncAwaitPromiseAll(){
    try{
        const url = 'https://random-data-api.com/api/name/random_name'

        const promise1 = fetchDataFromUrl(url);
        const promise2 = fetchDataFromUrl(url);
        const promise3 = fetchDataFromUrl(url);

        const results = await Promise.all([promise1, promise2, promise3])

        for(let i = 0; i < 3; i++){
            results[i] = results[i].name
        }

        console.log(results);
    }
    catch(error){
        console.log(error);
    }
}

asyncAwaitPromiseAll()

// 3.2 Async/await

async function asyncAwait(){
    try{
        const url = 'https://random-data-api.com/api/name/random_name'
        let names = [];
        let ranInd = 0;
        let response;
        let data;
        let values;

        for (let i = 0; i < 3; i++) {
            response = await fetch(url);
            data = await response.json();
            values = Object(data);
            ranInd = Math.floor(Math.random() * values.length);
            names[i] = values[ranInd];
        }

        console.log(names);
    }
    catch(error){
        console.log(error);
    }
}

asyncAwait()

// 3.3

function getNames(url: string, mountOfRequest: number): Promise<string[]> {
    const promises = Array.from({ length: mountOfRequest }, () => fetchName(url))
    return PromiseAll(promises);
}


function PromiseAll<T>(promises: Promise<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const results: T[] = [];
        promises.forEach(element => {
            element.then(data => {
                results.push(data);
                if (results.length === promises.length) resolve(results);
            })
        });
    });
}


function fetchName(url: string): Promise<string> {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error("Error:" + response.status);
            }
        }).then(data => data.name);
}


getNames("https://random-data-api.com/api/name/random_name", 3).then(data => console.log(data));

// 4.1 without async/await

let attempts = 1
function fetchRandomUser() {
    return new Promise((resolve, reject) => {
        const getUser = () => {
            fetch('https://random-data-api.com/api/users/random_user')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }
                    return response.json();
                })
                .then(user => {
                    if (user.gender === 'female') {
                        resolve(user);
                    } else {
                        getUser();
                        attempts++
                    }
                })
                .catch(error => {
                    reject(error);
                });
        };

        getUser();
    });
}

fetchRandomUser()
    .then(user => {
        console.log('User female:', user, "Attempts:", attempts);
    })
    .catch(error => {
        console.error('Error:', error);
    })

// 4.2 with async/await

let attempts1 = 1
async function getFemale1(){
    try{
        const url = 'https://random-data-api.com/api/users/random_user'
        let response = await fetch(url)
        let {gender} = await response.json()
        if (await gender === "Female") {
            return gender
        }
        else {
            attempts1++
            return getFemale1();
        }
    }
    catch(error){
        console.log(error);
    }
}

getFemale1().then(gender => console.log(gender + ' attempts: ' + attempts1))*/
//5
async function example() {
    await getIPAddressWrapper((ip:any) => {
        console.log(`Мій поточний IP-адреса: ${ip}`);
    });
}
example()
//6
async function first(){
    try {
        const response = await fetch(`'https://api64.ipify.org?format=json'`)
        const data = await response.json()
        return data.ip;
    }
    catch (error){
        console.log(error)
    }
}
async function secondFunction (callback: (param: string) => void){
    const ip = await first()
    callback(ip)
}
secondFunction(ip=>{
    console.log('Текущий IP-адрес:', ip);
})