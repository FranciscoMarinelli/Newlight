function promedio(not1,not2) {
    return ( not1 + not2) / 2
}


let nombreAlumno = prompt("Ingrese su nombre y apellido")
let passAlumno = prompt("Ingrese su contraseña")
let nombreIngresado
let passIngresada

for (let i = 0; i < 3; i++) {
    nombreIngresado = prompt("Ingrese usuario")
    passIngresada = prompt("Ingrese contraseña")

    if (nombreIngresado === nombreAlumno && passIngresada === passAlumno){
        alert("BIENVENIDO/A " + nombreAlumno)
        for (let i = 0; i < 1; i++) {
            let nota1 = Number(prompt("Ingrese la primera nota"))
            let nota2 = Number(prompt("Ingrese la segunda nota"))
            let resultadoFinal = promedio(nota1,nota2)
            if (resultadoFinal >= 6){
                alert("SU PROMEDIO ES DE " + resultadoFinal +" ,USTED ESTA APROBADO")
                
            } else {
                alert("SU PROMEDIO ES DE  " + resultadoFinal +" ,USTED ESTA DESAPROBADO")
            }
           
        }
        break
    } else {
        alert("Nombre o contraseña incorrectas")
    }
    
}





