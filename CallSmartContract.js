function smartcontract(contractAddress, contractABI, providerKey, functionName, outputElementId) {
    var web3 = new Web3(new Web3.providers.HttpProvider(providerKey));

    // Crear instancia del contrato
    var contractInstance = new web3.eth.Contract(contractABI, contractAddress);

    // Función para llamar a cualquier método del contrato
    function callContractMethod() {
        contractInstance.methods[functionName]().call((error, result) => {
            if (!error) {
                console.log('Resultado:', result);
                document.getElementById(outputElementId).innerHTML = `${result}`;
            } else {
                console.error('Error al llamar al método:', error);
                document.getElementById(outputElementId).innerHTML = `${error}`;
            }
        });
    }

    // Llamar a la función
    callContractMethod();
    console.log(callContractMethod());
}
