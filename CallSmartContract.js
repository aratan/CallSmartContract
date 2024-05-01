/*
  Programador: Víctor Arbiol (2024)
  Descripción: Esta función ejecuta un contrato inteligente utilizando Web3.js. 
               Verifica si los datos están almacenados en el localStorage y si han pasado menos de 10 minutos 
               desde la última actualización. 
               
               Si es así, recupera los datos del localStorage; de lo contrario, llama al contrato para obtener 
               los datos actualizados.
*/
function smartcontract(contractAddress, contractABI, providerKey, functionName, outputElementId) {
    const web3 = new Web3(new Web3.providers.HttpProvider(providerKey));

    // Crear instancia del contrato
    const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

    // Función para llamar a cualquier método del contrato
    function callContractMethod() {
        // Obtener la marca de tiempo del último update del localStorage
        const lastUpdate = localStorage.getItem('lastUpdate');

        if (lastUpdate) {
            // Calcular el tiempo transcurrido desde el último update
            const currentTime = new Date().getTime();
            const tenMinutesInMillis = 10 * 60 * 1000; // 10 minutos en milisegundos
            const elapsedTime = currentTime - parseInt(lastUpdate);

            // Si han pasado menos de 10 minutos, recuperar el resultado del localStorage
            if (elapsedTime < tenMinutesInMillis) {
                console.log('Recuperando datos del localStorage...');
                const storedResult = localStorage.getItem([functionName]);
                document.getElementById(outputElementId).innerHTML = storedResult;
                return;
            }
        }

        // Si han pasado más de 10 minutos o no hay datos en el localStorage, llamar al contrato
        contractInstance.methods[functionName]().call((error, result) => {
            if (!error) {
                console.log('Resultado:', result);
                document.getElementById(outputElementId).innerHTML = `${result}`;

                // Guardar el resultado y la marca de tiempo en el localStorage
                localStorage.setItem([functionName], result);
                localStorage.setItem('lastUpdate', new Date().getTime());
            } else {
                console.error('Error al llamar al método:', error);
                document.getElementById(outputElementId).innerHTML = `${error}`;
            }
        });
    }

    // Llamar a la función
    callContractMethod();
}
