        
      var btn = document.getElementById('btnConvertir');
        function convertTemperature() {
            const inputTemperature = parseFloat(document.getElementById('input').value); //varinputTemperature  tempInput
            const fromUnit = document.getElementById('selectBase').value; // varfromUnit  fromTemp
            const toUnit = document.getElementById('selectFinal').value;    //vartoUnit  toTemp
            
            console.log(inputTemperature)
            let convertedTemperature;

            if (fromUnit === toUnit) {
                convertedTemperature = inputTemperature;
            } else if (fromUnit === 'celsius') {
                if (toUnit === 'fahrenheit') {
                    convertedTemperature = (inputTemperature * 9/5) + 32; console.log(convertedTemperature)
                } else if (toUnit === 'kelvin') {
                    convertedTemperature = inputTemperature + 273.15;
                }
            } else if (fromUnit === 'fahrenheit') {
                if (toUnit === 'celsius') {
                    convertedTemperature = (inputTemperature - 32) * 5/9;
                } else if (toUnit === 'kelvin') {
                    convertedTemperature = (inputTemperature + 459.67) * 5/9;
                }
            } else if (fromUnit === 'kelvin') {
                if (toUnit === 'celsius') {
                    convertedTemperature = inputTemperature - 273.15;
                } else if (toUnit === 'fahrenheit') {
                    convertedTemperature = (inputTemperature * 9/5) - 459.67;
                }
            }

            document.getElementById('resultado').textContent = `Resultado: ${convertedTemperature.toFixed(2)} ${toUnit}`;
        }

        btn.addEventListener("click",(e) => {
            convertTemperature();
          })



