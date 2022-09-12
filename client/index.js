console.log("Soy el producer");

const kafka = require('node-rdkafka');

var stream = kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
  }, {}, {
    topic: 'test2'
  });

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var cont = 1;
function queueMessage(){
    var rand = getRandomInt(100);    
    const result = stream.write(Buffer.from('Message: '+ rand));
    if(result){
        console.log("Mensaje enviado (",cont,") ->", rand);
        cont =  cont + 1;
    }
    else{
        console.log("Ocurrió algo, mesaje no se envió");
    }
}
setInterval(() => {
    queueMessage();
},5000);