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
![Captura de pantalla de 2024-11-17 03-22-04](https://github.com/user-attachments/assets/89fc29f5-9454-48ee-96ce-6098cc66b908)
![Captura de pantalla de 2024-11-17 03-22-30](https://github.com/user-attachments/assets/f3866633-db4b-423e-bbfe-89f3fe7f2183)
![Captura de pantalla de 2024-11-17 03-22-40](https://github.com/user-attachments/assets/89f1f90f-ac20-4480-910b-2ff430997294)
![Captura de pantalla de 2024-11-17 03-32-35](https://github.com/user-attachments/assets/62b0bb31-b5a1-4279-95e6-4f1fe2ff1e96)
![Captura de pantalla de 2024-11-17 03-32-46](https://github.com/user-attachments/assets/c30b8216-89a5-4778-9556-4775708d835b)


### 4. Inicializa el contenedor de la aplicación
Una vez tengamos la base de datos importada tenemos que iniciar el contenedor de la aplicacion con el siguiente comando:  
    docker start node-contenedor  
O desde docker desktop vamos a containers y en node-contenedor le damos al icono de start  

### 5. Ingresar a la aplicacion
Cuando el contenedor este en funcionamiento accedemos a la siguiente url:  
    localhost:3000  
Si todo salió bien tendriamos que poder ver la aplicación funcionando
![Captura de pantalla de 2024-11-17 03-39-21](https://github.com/user-attachments/assets/a581c7aa-08dd-4782-85e7-04c2339aa2cf)
