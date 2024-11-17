# Guía de Instalación y Ejecución del Proyecto docker

## Pasos para ejecutar el proyecto docker

### 1. Abrir consola en la carpeta del proyecto

Descargamos el proyecto y en la raiz abrimos la consola  
Si estas en visual estudio apretamos ctrl + ñ  
Podemos ingresar con: cd docker  

### 2. Ejecutar docker compose

Una vez estamos en la carpeta docker ejecutamos el siguiente comando: docker compose up --build -d  
Con este comando vamos a descargar las imágenes necesarias para el proyecto, creara la red interna para que los contenedores se puedan comunicar y levantará los contenedores de MySQL y phpMyAdmin.  

### 3. Importar la base de datos
Cuando se hayan terminado de crear las imagenes y ejecutado los contenedores de mysql y phpmyadmin tenemos que ingresar a localhost:8080  
Las credenciales para poder ingresar son:  
    user=root  
    password=aragon  
Si da error al ingresar las credenciales solamente tenemos que esperar un poco más hasta que se termine de crear e inicializar los contenedores  
Importamos la base de datos que se encuentra en ./mysql/mysql-contenedor.sql  

### 4. Inicializa el contenedor de la aplicación
Una vez tengamos la base de datos importada tenemos que iniciar el contenedor de la aplicacion con el siguiente comando:  
    docker start node-contenedor  
O desde docker desktop vamos a containers y en node-contenedor le damos al icono de start  

### 5. Ingresar a la aplicacion
Cuando el contenedor este en funcionamiento accedemos a la siguiente url:  
    localhost:3000  
Si todo salió bien tendriamos que poder ver la aplicación funcionando