// function validarNip(){
//     let flag = 1;
// 	let pin = document.getElementById("pin").value;
//     console.log(pin);
//     if (pin === nip) {
//         flag = 0;
//     } else {
//         flag = 1;
//     }
// return flag;
// }

// function oportunidadesNip(nip) {
//     for (let index = 0; index < 3; index++) {
//         validarNip(nip);
//     }
// }

function validarNip(){
    //let flag = 0;
	let pin = document.getElementById("pin").value;
    console.log(pin);
    do{
        if (pin == nip) {
            flag = 0;
            alert(`¡Bienvenido!`);
        } else {
            flag = flag + 1;
            alert(`Intente de nuevo, PIN incorrecto`);
        }
        console.log("Voy aqui abajo");
    console.log("Voy hasta abajo");
    console.log(flag);
    }while(flag > 3);
return "Hola munda";
}
console.log(validarNip())
const nip = 1234;
let flag = 0;