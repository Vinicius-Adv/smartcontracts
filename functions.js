async function getRegisterContractData() {
    let contractNumberField = document.getElementById("contractNumber");
    const userInput = contractNumberField.value * 1;
    alert("Você busca pelo contrato " + userInput);
    try {
      const arrayProcessosData = await smartContract.processos(userInput);
      console.log(arrayProcessosData);
      document.getElementById("cliente").innerText = arrayProcessosData[0];
      document.getElementById("partecontraria").innerText = arrayProcessosData[1];
      document.getElementById("litisconsorcio").innerText = arrayProcessosData[2];
      document.getElementById("causa").innerText = arrayProcessosData[3];
      document.getElementById("acordo").innerText = arrayProcessosData[4];
      document.getElementById("valordacausa").innerText = arrayProcessosData[5];
      document.getElementById("prazofinal").innerText = arrayProcessosData[6];
    } catch (err) {
      console.error(err);
      document.getElementById("cliente").innerText = "";
      document.getElementById("partecontraria").innerText = "";
      document.getElementById("litisconsorcio").innerText = "";
      document.getElementById("causa").innerText = "";
      document.getElementById("acordo").innerText = "";
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
      alert("Ué, mas cadê o Owner?");
    }
  }
