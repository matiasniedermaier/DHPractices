const  http  =  require ( 'http' ) ;
const router = require ('./router');
let result = '';

http . createServer ( ( req ,  res )  =>  {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	
	// Sistema de ruteo
	result = router(req.url);
	res.end(result);

} ) . listen ( 3030 ,  'localhost' ,  ( )  =>  console . log ( 'Servidor que se ejecuta en el puerto 3030' ) ) ;
