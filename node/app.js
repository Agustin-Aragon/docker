const mysql = require('mysql2');
const express = require('express');
const app = express()
const dotenv = require('dotenv');

dotenv.config()

const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

app.get('/', (req, res) => {
    conexion.query('SELECT * FROM materia', (error, resultados) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error al consultar la base de datos');
      } else {
        let html = '<style>ul{list-style-type: none;}</style><h1>Materias</h1><ul>';
        resultados.forEach(materia => {
          html += `<li>${materia.id}. ${materia.nombre}.</li>`;
        });
        html += '<ul>'
        res.send(html);
      }
    });
  });


const PORT = process.env.DB_PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});