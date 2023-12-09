// Solicitamos al usuario que ingrese el precio de costo del producto al cual se va a calcular el IGV

while(true){
    var precioCosto = parseFloat(prompt("Ingrese el precio de costo del producto"));

    if(!isNaN(precioCosto) && precioCosto !=null && precioCosto != ""){
        // alert ('es numero');
        break;
    }else{
        alert('no es número');
    continue;
    }
}
    precioCostoM = precioCosto.toFixed(2);
    alert("El precio de costo del producto a calcular es:"+precioCostoM);
    console.log("El precio de costo del producto a calcular es:"+precioCostoM);
    document.write("<h3> El precio de costo del producto a calcular es:"+precioCostoM+"</h3>");


// Sumar el IGV al producto
function CalcularIva(precioCosto){
    return (precioCosto*0.18);
}

var iva = CalcularIva(precioCosto);
ivaM = iva.toFixed(2);

    alert("El IGV es:"+ivaM);
    console.log("El IGV del producto ingresado es:"+ivaM);
    document.write("<h3> El IGV del producto ingresado es:"+ivaM+"</h3>");

// Sumar el IGV al precio del producto
function SumarIva(precioCosto){
    return (precioCosto + (precioCosto * 0.18));
}

var precioConIva = SumarIva(precioCosto);
precioConIvaM = precioConIva.toFixed(2);

    alert("El precio del producto con IGV incluido es:"+precioConIvaM);
    console.log("El precio del producto con IGV incluido es:"+precioConIvaM);
    document.write("<h3> El precio del producto con IGV incluido es:"+precioConIvaM+"</h3>");

// Calcular el precio de venta sugerido
function CalcularPrecioVenta (precioConIva){
    return (precioConIva * 1.18);
}

var precioVenta = CalculaPrecioVenta (precioConIva);
precioVentaM= precioVenta.toFixed(2);

alert("El precio sugerido de venta del producto es:"+precioVentaM);
console.log("El precio sugerido de venta del producto es:"+precioVentaM);
document.write("<h3> El precio sugerido de venta del producto es:"+precioVentaM+"</h3>");

