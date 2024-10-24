// conexão com mysql
import mysql from   "mysql2/promise";

const pool = mysql.createPool({
    host    : 'localhost',
    user    : 'usuarioclinica',
    password: 'senhaclinica',
    database: 'clinicabd',
});

export default pool;
// conexão com mysql