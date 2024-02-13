let net = require(`net`)
let client = new net.Socket()
let startTime;
client.connect(1337, `localhost`, function (){
    console.log(`Connected`)
    startTime = Date.now()
    client.write(`Hi`)
})
client.on(`data`, function (data){
    let endTime = Date.now()
    let duration = endTime - startTime
    console.log(`Total time: ${duration}ms`);
    console.log(data.toString())
    client.destroy()
})
client.on(`close`, function (){
    console.log(`closed`)
})