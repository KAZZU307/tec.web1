
function MenuDesplegable() {
	document.getElementsByClassName("navegacion-menucabecera")[0].classList.toggle("responsive");
}
var fecha_actual = new Date();

var dia=fecha_actual.getDate();
var mes=fecha_actual.getMonth()+1;
var anio=fecha_actual.getFullYear();

var hours=fecha_actual.getHours();
var Minutes=fecha_actual.getMinutes();
var Seconds=fecha_actual.getSeconds();

var month = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",);
var dayofweek = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado",);
document.write(dia+' / '+mes+' / '+anio+'       '+hours+' : '+Minutes+' : '+Seconds);
