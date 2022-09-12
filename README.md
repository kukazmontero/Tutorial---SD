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

Instalar node-rdkafka
```
	$npm i node-rdkafka
```	
Crear topic ingresando al container kafka en docker
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
Cliente
```
	$npm run start:producer	   
```
Consumer ->
Servidor
```
	$npm run start:consumer
```
## Autores

| [<img src="https://www.geekmi.news/__export/1644190196029/sites/debate/img/2022/02/06/zenitsu4.jpg_172596871.jpg" width=115><br><sub>Abel Baulloza</sub>](https://github.com/Dharknight) |  [<img src="https://www.unotv.com/uploads/2020/08/loco-valdes.jpg" width=115><br><sub>Diego Carrillo</sub>](https://github.com/Carro1331) |  [<img src="https://zonadeprensard.com/wp-content/uploads/2022/01/Inosuke-Hashibara-Demon-Slayer-1200x675.jpg" width=115><br><sub>Kukaz Montero</sub>](https://github.com/kukazmontero) |
| :---: | :---: | :---: |
