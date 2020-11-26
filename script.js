var apuestas = [];

function newCompra() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    if (num1.value == num2.value) {
        var name = document.getElementById("nombre");
        var lastname = document.getElementById("apellido");
        var age = document.getElementById("edad");
        var adress = document.getElementById("dir");
        var phone = document.getElementById("tel");
        var nombreg = document.getElementById("nombreg");
        var apellidog = document.getElementById("apellidog");
        var v = 0;
        var datos = [name, lastname, age, adress, phone, num1, num2];
        datos.forEach(k => {
            if (k.value != '') {
                v++;
            }
        });

        if (v == 7) {
            var nCompra = new Persona(name.value, lastname.value, age.value, adress.value, phone.value, num1.value);
            apuestas.push(nCompra.getAllParams());
            console.log("Total apuestas realizadas: ", apuestas);
            datos.forEach(k => {
                k.value = '';
            });
            alert("REGISTRO EXITOSO.")
        }
        else {
            alert("FALTAN DATOS");
        }

    }
    else {
        alert("LOS NÚMEROS INGRESADOS DEBEN SER IGUALES");
    }

}

function abc() {

    var ganador = '202020'; 
    var gExactos = [];
    var y = 0;
    apuestas.forEach(e => {
        if (e.apuesta == ganador) {
            nombreg.innerText = e.nombre;
            apellidog.innerText = e.apellido
            console.log("Nombre: ", e.nombre);
            console.log("Apellido: ", e.apellido);
            console.log("Edad: ", e.edad);
            console.log("Direccion: ", e.direccion);
            console.log("Telefono: ", e.telefono);
            console.log("Numero apostado: ", e.apuesta);
            console.log("-------------------");
            gExactos.push(y);
        }
        y++;

    });

    console.log("\nBuscando ganadores de cuatro (4) dígitos\n");
    var a = 0;
    var g4Digitos = [];
    apuestas.forEach(k => {

        var count = 0;
        for (let i = 0; i < 6; i++) {
            if (k.apuesta.toString()[i] == ganador[i]) {
                count++;
            }
        }

        if (count >= 4 && count < 6) {
            console.log("Nombre: ", k.nombre);
            console.log("Apellido: ", k.apellido);
            console.log("Edad: ", k.edad);
            console.log("Direccion: ", k.direccion);
            console.log("Telefono: ", k.telefono);
            console.log("Numero apostado: ", k.apuesta);
            console.log("-------------------");
            g4Digitos.push(a);
        }
        a++;
    });


    console.log("\nBuscando ganadores del 10% por estar cerca a los ganadores\n");
    // Unir los dos Arrays
    var indices = gExactos.concat(g4Digitos);
    console.log(indices)

    var f = 0;
    indices.forEach(k => {
        let pAntes = apuestas[(k-1)];
        console.log("Nombre: ", pAntes.nombre);
        console.log("Apellido: ", pAntes.apellido);
        console.log("Edad: ", pAntes.edad);
        console.log("Direccion: ", pAntes.direccion);
        console.log("Telefono: ", pAntes.telefono);
        console.log("Numero apostado: ", pAntes.apuesta);
        console.log("-------------------");

        let pDespues = apuestas[(k+1)];
        console.log("Nombre: ", pDespues.nombre);
        console.log("Apellido: ", pDespues.apellido);
        console.log("Edad: ", pDespues.edad);
        console.log("Direccion: ", pDespues.direccion);
        console.log("Telefono: ", pDespues.telefono);
        console.log("Numero apostado: ", pDespues.apuesta);
        console.log("-------------------");
    });


}


class Persona {
    constructor(nombre, apellido, edad, direcccion, telefono, apuesta) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direcccion;
        this.telefono = telefono;
        this.apuesta = apuesta;
    }

    getTel() {
        return this.telefono;
    }

    getDir() {
        return this.direccion;
    }

    getFullName() {
        return this.nombre + " " + this.apellido;
    }

    getEdad() {
        return this.edad;
    }

    getApuesta() {
        return this.apuesta;
    }

    getAllParams() {
        var allParams = {
            nombre: this.nombre,
            apellido: this.apellido,
            telefono: this.telefono,
            edad: this.edad,
            direccion: this.direccion,
            apuesta: this.apuesta
        }
        return allParams;
    }

    setGanador(tipo) {
        this.tipoGanancia = tipo;
    }

}