// Crear clase Propietario 
class Propietario {
  constructor(nombre, direccion, telefono) { // En el constructor(función) agregar los parámetros
    this._nombre = nombre  // atributos
    this._direccion = direccion
    this._telefono = telefono
  }
  datosPropietario() { // Método
    return `El nombre del dueño es: ${this._nombre}, con domicilio en "${this._direccion}" y su número de contacto es: ${this._telefono}`
  }
}

// Clase hijo de Propietario
class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono) // accede a los parametros de la clase padre (propietario)
    this._tipo = tipo // atributo agregado 
  } // getters y setters (modificar atributos sin alterar los datos iniciales)
  setTipo(tipo) {
    this._tipo = tipo
  }
  getTipo() {
    return this._tipo
  }
  datosTipoAnimal() { // Método
    return `El tipo de animal es un: ${this._tipo}`
  }
}

// Clase nieta de Propietario
class Mascota extends Animal { // heredar métodos y propiedades
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo) // parámetros heredados de Propietario y Animal
    this._nombreMascota = nombreMascota // atributos agregados
    this._enfermedad = enfermedad
  }
  setNombre(nombreMascota) {
    this._nombreMascota = nombreMascota
  }
  getNombre() {
    return this._nombreMascota
  }
  setEnfermedad(enfermedad) {
    this._enfermedad = enfermedad
  }
  getEnfermedad() {
    return this._enfermedad
  }
  datosMascota() { // Método, se llama en el resultado, y el los if
    return `El nombre de la mascota es "${this._nombreMascota}", y padece de "${this._enfermedad}"`
  }
}

// Se seleccionan los elementos del formulario a trabajar
let formulario = document.querySelector("#formulario")

// Se crea el evento para el formulario
let fichaMedica = (event) => {
  event.preventDefault() // ingreso de datos solicitados en el formulario
  let nombre = document.querySelector("#propietario").value
  let direccion = document.querySelector("#direccion").value
  let telefono = document.querySelector("#telefono").value
  let tipo = document.querySelector("#tipo").value
  let nombreMascota = document.querySelector("#nombreMascota").value
  let enfermedad = document.querySelector("#enfermedad").value
  let resultado = document.querySelector("#resultado")

  // Condición que muestra la informacion según el tipo de mascota en una lista
  if (tipo === 'perro') {
    const perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
    resultado.innerHTML = `<li>${perro.datosPropietario()}</li><br>
<li>${perro.datosTipoAnimal()}. ${perro.datosMascota()}</li>`
}
else if (tipo === 'gato') {
  const gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
  resultado.innerHTML = `<li>${gato.datosPropietario()}</li><br>
<li>${gato.datosTipoAnimal()}. ${gato.datosMascota()}</li>`
}
else { (tipo === 'conejo') 
    const conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
  resultado.innerHTML = `<li>${conejo.datosPropietario()}</li><br>
<li>${conejo.datosTipoAnimal()}. ${conejo.datosMascota()}</li>`
}

  const mascota = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)

  resultado.innerHTML = `<li>${mascota.datosPropietario()}</li><br>
<li>${mascota.datosTipoAnimal()}. ${mascota.datosMascota()}</li>`
}
// Método (escuchador) que inicia el envío del formulario
formulario.addEventListener("submit", fichaMedica)
