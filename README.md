# CallSmartContract
Llamadas a SmartContract


### Desde el html solo hay que configurar los datos de conexión
- Direcciñon de SmartContract
- Interface del Contrato (Abi)
- Api de infura / proveedor
  
```javascript

const contractAddress = '0x40cdb4a9cf182f41968d73ada64ec767bbbe3bff'

const contractABI = [{ "inputs": [{ "internalType": "string", "name": "_initialName", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "getName", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }];

const providerKey = "https://polygon-amoy.infura.io/v3/5b65a501ba9";

```
  
### Activación
- Desde el boton de html por el evento Onclick se llama a la función
- Se pasa como argumento la conexion (3), la funcion a llamar y el Id donde se quiere pintar.

```javascript
<p id="uno"></p>
<button onclick="smartcontract(contractAddress,contractABI,providerKey, 'getName', 'uno')">Reader SmartContract</button>
```
