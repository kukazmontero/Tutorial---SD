<em> Tutorial---SD </em>
  <p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>
   
## :hammer:Funcionalidad del proyecto
- `Funcionalidad`: Entender el funcionamiento de Apache-kafka para streamming




<h1 align='center'>TUTORIAL<h1>
<h3>COMANDOS</h3>
	
📁 Acceso al proyecto

**Descargar el archivo desde el repositorio de github o hacer un clone mediante consola de comandos.**

🛠️ Abre y ejecuta el proyecto
**Antes de trabajar, es necesario estar dentro de la carpeta instalada.**
**Instalar Dependencias**
```
	$sudo apt update
	$sudo apt-get install nodejs
	$sudo apt install npm
	$sudo apt-get install build-essentials
	$sudo apt-get install gcc
	$sudo apt-get install g++
	$sudo snap install docker
```
	
**correr el docker en la carpeta instalada:**
```
	$sudo docker-compose up
```

Iniciamos npm
```
	$npm i node-rdkafka
```	
Topic Docker
```
	$sudo docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
	    --create \
	    --bootstrap-server localhost:9092 \
	    --replication-factor 1 \
	    --partitions 1 \
	    --topic test
```
Iniciamos las conexiones cliente/ servidor

Producer -> 
Servidor
```
	$npm run start:producer	   
```
Cliente
```
	$npm run start:consumer
```
