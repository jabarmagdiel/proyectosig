const db = require('./src/db'); 
async function test() { 
  const res = await db.query("SELECT count(1) FROM lineas_puntos lp JOIN puntos p ON lp.id_punto = p.id_point WHERE lp.id_linea_ruta = 17 AND p.stop = 'S'"); 
  console.log(res.rows); 
  process.exit(0); 
} 
test();
