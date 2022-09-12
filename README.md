# Tutorial---SD
**************COMANDOS********************
correr el docker en la carpeta instalada:
	$sudo docker-compose up
Instalar nodejs
	$sudo apt-get install nodejs
	$sudo apt install npm
	
Iniciamos npm
	$npm i node-rdkafka
	
Topic Docker
	$sudo docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
	    --create \
	    --bootstrap-server localhost:9092 \
	    --replication-factor 1 \
	    --partitions 1 \
	    --topic test
	    
Iniciamos las conexiones cliente/ servidor

Producer -> 
Servidor
	$npm run start:producer	   
Cliente
	$npm run start:consumer
