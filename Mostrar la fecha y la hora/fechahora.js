function ventanafecha(){
    var miFecha, fecha, dia, mes, ano, minutos, hora, nombremes, diasemana, datewin;

    miFecha=new Date();
    fecha=miFecha.getDate();
    dia=miFecha.getDay();
    mes=miFecha.getMonth();
    ano=miFecha.getFullYear();
    hora=miFecha.getHours();
    minutos=miFecha.getMinutes();

if (hora<10) {
    hora="0"+hora;
}

if (minutos<10) {
    minutos="0"+minutos;
}

diasemana=new Array("domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado");
nombremes=new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", 
"agosto", "septiembre", "octubre", "noviembre", "diciembre");

datewin=window.open("","ventanafecha", "height=130, width=300");

datewin.document.write("<html><head><title>Fecha y Hora<\/title><\/head><body>");
datewin.document.write("<b>Hoy es "+ diasemana[dia] + ". " + fecha + " de " + nombremes[mes] + " de " + ano + " ");
datewin.document.write("<br \/> Son  las "+ hora + ":" + minutos +".<\/br>");
datewin.document.write("<form><input type='button' value='De acuerdo' onClick='window.close()''><\/form>");
datewin.document.write("<\/body><\/html>");
datewin.document.close();
}


