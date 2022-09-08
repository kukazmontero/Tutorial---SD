console.log("Soy el producer");

const kafka = require('node-rdkafka');

var stream = kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
  }, {}, {
    topic: 'test2'
  });

function queueMessage(){
    const result = stream.write(Buffer.from('Benajmin Tello TE ODIO!!!!'));
    if(result){
        console.log("Mensaje enviado!!");
    }
    else{
        console.log("Ocurrió algo, mesaje no se envió");
    }
}
setInterval(() => {
    queueMessage();
},3000);