// Solicitamos al usuario que ingrese el costo del producto para calcular el precio de venta

while(true){
    var precioCosto = parseFloat(prompt("Ingrese el costo del producto"));

    if(!isNaN(precioCosto) && precioCosto !=null && precioCosto != ""){
        // alert ('es numero');
        break;
    }else{
        alert('no es número');
    continue;
    }
}
    precioCostoM = precioCosto.toFixed(2);
    document.write("<h3> El costo de tu producto es: "+precioCostoM+"</h3>");


// Calculamos el 25% de margen de los productos
function CalcularMargen(precioCosto){
    return (precioCosto*0.3333);
}

var margen = CalcularMargen(precioCosto);
margenM = margen.toFixed(2);

    document.write("<h3> Margen del 25% para tu producto: "+margenM+"</h3>");

// Calculamos el precio del producto sin IGV
function SumarMargen(precioCosto){
    return (precioCosto * 1.3333);
}

var preciConMargen = SumarMargen(precioCosto);
preciConMargen = preciConMargen.toFixed(2);

    document.write("<h3> El precio del producto sin IGV es: "+preciConMargen+"</h3>");

// Calcular el precio de venta sugerido
function CalcularPrecioVenta (preciConMargen){
    return (preciConMargen * 1.18);
}

var precioVenta = CalcularPrecioVenta (preciConMargen);
precioVentaM= precioVenta.toFixed(2);

document.write("<h3> El precio sugerido de venta del producto es: "+precioVentaM+"</h3>");