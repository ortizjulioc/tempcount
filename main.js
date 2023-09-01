const miStorage = window.localStorage;
var historialTemp = []
const listaHistorial = document.getElementById("lista")
const btnhistorial = document.getElementById("btnReset") 
const btnAbrehistorial = document.getElementById("abreHistorial") 
const llamarHistorial = document.getElementById("historial")
const btnBorrar = document.getElementById("btnborrar")
var menuAbierto = false; 




var btn = document.getElementById('btnConvertir');
function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('input').value); //varinputTemperature  tempInput
    const fromUnit = document.getElementById('selectBase').value; // varfromUnit  fromTemp
    const toUnit = document.getElementById('selectFinal').value;    //vartoUnit  toTemp

    
    let convertedTemperature;

    if (fromUnit === toUnit) {
        convertedTemperature = inputTemperature;
    } else if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            convertedTemperature = (inputTemperature * 9 / 5) + 32; 
        } else if (toUnit === 'kelvin') {
            convertedTemperature = inputTemperature + 273.15;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedTemperature = (inputTemperature - 32) * 5 / 9;
        } else if (toUnit === 'kelvin') {
            convertedTemperature = (inputTemperature + 459.67) * 5 / 9;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedTemperature = inputTemperature - 273.15;
        } else if (toUnit === 'fahrenheit') {
            convertedTemperature = (inputTemperature * 9 / 5) - 459.67;
        }
    }
    let datosTemperatura = {
        "medidaInicial": fromUnit,
        "medidaFinal": toUnit,
        "valorInicial": inputTemperature,
        "valorFinal": convertedTemperature
    }
    historialTemp.push(datosTemperatura);
    miStorage.setItem("Historial", JSON.stringify (historialTemp))
    

    document.getElementById('resultado').textContent = `Resultado: ${convertedTemperature.toFixed(2)} ${toUnit}`;

}

btn.addEventListener("click", (e) => {
    convertTemperature();
})

function getHistorial() {
    let historialDelLocalStorage = JSON.parse(miStorage.getItem("Historial"));
    historialTemp = historialDelLocalStorage
    listaHistorial.innerHTML = ""
    historialDelLocalStorage.forEach(temperatura => {
        const li = document.createElement('li');
        li.textContent = `${temperatura.medidaInicial}  ${"("} ${temperatura.valorInicial} ${")"} ${temperatura.medidaFinal} ${"("} ${temperatura.valorFinal} ${")"}`
        listaHistorial.appendChild(li)
        
    });
}

btnhistorial.addEventListener("click",() => {
    getHistorial();
})  

btnAbrehistorial.addEventListener("click",() => {
    if (menuAbierto == false) {
        llamarHistorial.classList.remove("settings-menu-hide")
      menuAbierto = true
    } else {
        llamarHistorial.classList.add("settings-menu-hide")
      menuAbierto = false
    }
  }
  )


  btnBorrar.addEventListener("click",() => {
    localStorage.clear();
    location.reload()
  }
  )