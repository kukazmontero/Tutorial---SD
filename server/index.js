console.log("Soy el consumer");

const kafka = require('node-rdkafka');

const consumer = new kafka.KafkaConsumer({
    'group.id':'kafka',
    'metadata.broker.list':'localhost:9092'
}, {});

consumer.connect();

consumer.on('ready', () => {
    console.log('consumer listo para recibir mensajes del producer');
    consumer.subscribe(['test2']);
    consumer.consume();
}).on('data', function(data){
    console.log(`Mensaje recibido: ${data.value}`);
});