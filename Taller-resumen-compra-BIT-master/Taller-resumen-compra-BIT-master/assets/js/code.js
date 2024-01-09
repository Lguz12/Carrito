//* *//
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//*variable deL total numero de productos */
let TotalNumeroProductos = document.querySelector('.TotalNumeroProductos')
let valordeprocutosactual = TotalNumeroProductos.innerText
//*variable valor descuento */
let descuento = document.querySelector('.descuento')


//*Evento añadir elemento al carrito  *//
let BotonAdd = document.querySelectorAll(".botonControl")
BotonAdd.forEach(BotonADD => {
    BotonADD.addEventListener('click', e => {
        //**Variable cantidad de producto */
        let cantidadProducto = document.querySelector(`#${e.target.dataset.idCantidad}`)
        let cantidadProductoactual = cantidadProducto.innerText
        //*Variable valor de producto */
        let ValorTotal = document.querySelector('.ValorTotal')
        let ValorTotalActual = ValorTotal.innerText
        let PrecioProducto = document.querySelector(`#${e.target.dataset.idValor}`)
        let PrecioProductoACTUAL = PrecioProducto.innerText
        ValorTotal.innerHTML = " "
        console.log(valordeprocutosactual);

        if (e.target.dataset.accion == 'sumar') {
            valordeprocutosactual++
            if (valordeprocutosactual == 7) {
                cantidadProductoactual++
                ValorTotalActual = parseInt(ValorTotalActual) + parseInt(PrecioProductoACTUAL) - 50
                descuento.innerHTML = `50.000`
            } else {

                cantidadProductoactual++
                ValorTotalActual = parseInt(ValorTotalActual) + parseInt(PrecioProductoACTUAL)
            }

        } else
            if (cantidadProductoactual > 1) {
                valordeprocutosactual--
                if (valordeprocutosactual == 6) {
                    cantidadProductoactual--
                    ValorTotalActual = parseInt(ValorTotalActual) - parseInt(PrecioProductoACTUAL) + 50
                    descuento.innerHTML = '0'
                } else {

                    cantidadProductoactual--
                    ValorTotalActual = parseInt(ValorTotalActual) - parseInt(PrecioProductoACTUAL)

                }


            } else {
                ValorTotalActual = parseInt(ValorTotalActual)
            }

        TotalNumeroProductos.innerHTML = valordeprocutosactual
        cantidadProducto.innerHTML = cantidadProductoactual
        ValorTotal.innerHTML = `${ValorTotalActual}.000`

    })
});


//*Evento eliminar cada elemento del carrito */
let botonCadaProducto = document.querySelectorAll('.botonQuitar')
botonCadaProducto.forEach(boton =>
    boton.addEventListener('click', e => {
        let ValorTotal = document.querySelector('.ValorTotal')
        let ValorTotalActual = ValorTotal.innerText
        let PrecioProducto = document.querySelector("#h_3")
        let ProductoCantidad = document.querySelector('#h5_3')
        let ProductoCantidad1 = ProductoCantidad.innerText
        let PrecioProductoACTUAL = PrecioProducto.innerText
        if (e.target.parentNode.id == 'TercerProducto') {
            e.target.parentNode.classList.add('d-none')
            console.log(ProductoCantidad1);
            console.log(parseInt(ValorTotalActual));
            TotalNumeroProductos.innerHTML = valordeprocutosactual
            if (valordeprocutosactual == 7) {
                
                ValorTotalActual = parseInt(ValorTotalActual) - parseInt(PrecioProductoACTUAL) - 50
                descuento.innerHTML = `50.000`
            } else {
                
                descuento.innerHTML='0'
                ValorTotalActual = parseInt(ValorTotalActual) + parseInt(PrecioProductoACTUAL)
            }
            valordeprocutosactual = valordeprocutosactual - ProductoCantidad1
            
            ValorTotalActual = parseInt(ValorTotalActual) - (parseInt(PrecioProductoACTUAL) * ProductoCantidad1)
            console.log(parseInt(ValorTotalActual));
            console.log(parseInt(PrecioProductoACTUAL));
            console.log(ProductoCantidad1);
            console.log((parseInt(PrecioProductoACTUAL) * ProductoCantidad1));
            ValorTotal.innerHTML = `${ValorTotalActual}.000`
        } else if (e.target.parentNode.id == 'SegundoProducto') {
            e.target.parentNode.classList.add('d-none')

        } else if (e.target.parentNode.id == 'PrimerProducto') {
            e.target.parentNode.classList.add('d-none')
        }
    }))

//*Evento eliminar todo el carrito */
let añadir = document.querySelector('.añadir')
document.querySelector('#btnBorrarCarro').addEventListener('click', () => {
    Swal.fire({
        title: "Esta seguro?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, vaciar carrito",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            let borrarcarro = document.querySelector(".eliminarCarrito")

            borrarcarro.remove()
            añadir.innerHTML += `
<h2> no hay nada</h2>
`
            TotalNumeroProductos.innerHTML = 0
            valordeprocutosactual = 0
            ValorTotal.innerHTML = 0
            descuento.innerHTML = 0
            prueba.forEach(boton =>
                boton.addEventListener('click', e => {
                    console.log(e.target);
                    if (e.target.id == "envioNormal") {
                        ValorTotal.innerHTML = 0

                    } else {
                        ValorTotal.innerHTML = `${5}.000`
                    }
                }))

            let totalproducto = document.querySelector(".Totalproductos")
            totalproducto.innerHTML = 0
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
})


let prueba = document.querySelectorAll('.prueba')

let ValorTotal = document.querySelector('.ValorTotal')
let ValorTotalActual = ValorTotal.innerText
prueba.forEach(boton =>
    boton.addEventListener('click', e => {
        console.log(e.target);
        if (e.target.id == "envioNormal") {
            ValorTotal.innerHTML = `${parseInt(ValorTotalActual)}.000`

        } else {
            ValorTotal.innerHTML = `${parseInt(ValorTotalActual) + 5}.000`
        }
    }))
// evento de location.hrref
let transferencia = document.querySelectorAll('.prueba1')
transferencia.forEach(boton =>
    boton.addEventListener('click', e => {
        if (e.target.id == "pagoTransferencia") {
            window.location.href = 'https://www.google.com/'
        }
    }))
/*Prueba tarjeta */
let tarjeta = document.querySelectorAll('.prueba3')
let formulario = document.querySelector('.formulario')
tarjeta.forEach(boton =>
    boton.addEventListener('click', e => {
        if (e.target.id == "pagoTC") {
            formulario.classList.remove("d-none")
        }
    }))

let cerrar = document.querySelector('.boton')
cerrar.addEventListener('click', e => {
    if (e.target.id == "botoncerrar") {
        formulario.classList.add("d-none")
    }
})


