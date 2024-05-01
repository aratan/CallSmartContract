
function smartcontract(contractAddress, key){
        var web3 = new Web3(new Web3.providers.HttpProvider('https://polygon-amoy.infura.io/v3/'+key));
        var contractABI = [{ "inputs": [{ "internalType": "string", "name": "_initialName", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "getName", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }];
        
        // Crear instancia del contrato
        var contractInstance = new web3.eth.Contract(contractABI, contractAddress);

        // Ejemplo de función para obtener el nombre del contrato
        function obtenerNombreContrato() {
            contractInstance.methods.getName().call((error, result) => {
                if (!error) {
                    console.log('Nombre del contrato:', result);
                    document.getElementById("ROOT").innerHTML = `<h1> ${result} </h1>`;
                } else {
                    console.error('Error al obtener el nombre:', error);
                    document.getElementById("ROOT").innerHTML = `<h1> ${error} </h1>`;

                }
            });
        }

        // Llamar a la función para obtener el nombre del contrato
        obtenerNombreContrato();
        console.log(obtenerNombreContrato());
    }
