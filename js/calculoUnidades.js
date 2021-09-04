//funcion para manejador de eventos

function init(){
    var op1=prompt('Ingrese la cantidad de metros', '');
    var operaciones=document.getElementById('operaciones');

    if(op1<=0){
        alert('Ingrese cantidad correcta, Recarge la pagina');
    }else{
    var contenido="<header>";
    contenido+="\t <h1> Calcular</h1> \n";
    contenido+="</header>\n";

    contenido+="<nav>";
    contenido+="<ul>\n";
    contenido+="\t<li>\n";
    contenido+="\t\t <a href=\" javasxript:void(0)\"><input type='button' value='Pies'> </input> </a>\n";
    contenido+="\t</li>\n";
    contenido+="\t<li>\n";
    contenido+="\t\t <a href=\" javasxript:void(0)\"><input type='button' value='Pulgadas'> </input> </a>\n";
    contenido+="\t</li>\n";
    contenido+="\t<li>\n";
    contenido+="\t\t <a href=\" javasxript:void(0)\"><input type='button' value='Yardas'> </input> </a>\n";
    contenido+="\t</li>\n";
    contenido+="<br>"
    contenido+="</ul>\n";
    contenido+="</nav> \n";

    operaciones.innerHTML=contenido;
    var opciones=document.getElementsByTagName('a');

    for(var i=0;i<opciones.length;i++){
        switch(i){
            case 0:
                //Funcion Sumar
            opciones[i].onclick=function (){
                resultado.innerHTML="<p class=\"letterpress\">"+ op1 + " Metros son equivalentes a "+(parseFloat(op1)*parseFloat(3.281))+" Pies </p>\n";
            }
            break;
            case 1:
                opciones[i].onclick=function (){
                    resultado.innerHTML="<p class=\"letterpress\">"+ op1 + " Metros son equivalentes a "+(parseFloat(op1)*parseFloat(39.37))+" Pulgadas </p>\n";
                }
            break;
            case 2:
                opciones[i].onclick=function(){
                    resultado.innerHTML="<p class=\"letterpress\">"+ op1 + " Metros son equivalentes a "+(parseFloat(op1)*parseFloat(1.094))+" Yardas </p>\n";
                }
            break;
        }
    }
    }
}
window.onload=init();