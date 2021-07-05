async function getRegisterContractData() {
    let contractNumberField = document.getElementById("contractNumber");
    const userInput = contractNumberField.value * 1;
    alert("valorInformadoPeloUsuario: " + userInput);
    try {
      const arrayProcessosData = await smartContract.processos(userInput);
      console.log(arrayProcessosData);
      document.getElementById("autor").innerText = arrayProcessosData[0];
      document.getElementById("reu").innerText = arrayProcessosData[1];
      document.getElementById("causa").innerText = arrayProcessosData[2];
      document.getElementById("valordacausa").innerText = arrayProcessosData[3];
      document.getElementById("prazofinal").innerText = arrayProcessosData[4];
    } catch (err) {
      console.error(err);
      document.getElementById("autor").innerText = "";
      document.getElementById("reu").innerText = "";
      document.getElementById("causa").innerText = "";
      document.getElementById("valordacausa").innerText = "";
      document.getElementById("prazofinal").innerText = "";
      contractNumberField.value = 0;
      alert("Houve um erro ao buscar o contrato de numero: " + userInput);
    }
  }
  
  async function autoLoadOwner() {
    try {
      const contractOwner = await smartContract.owner();
      console.log(contractOwner);
      document.getElementById("spanOwner").innerText = contractOwner;
    } catch (err) {
      console.error(err);
      alert("Ué, cadê o Owner?");
    }
  }
