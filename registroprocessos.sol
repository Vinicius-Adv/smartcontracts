//SPDX-License-Identifier: none


pragma solidity 0.8.6;

contract Registroprocessos {

    struct Processo {
        string cliente;
        string partecontraria;
        string litisconsorcio;
        string causa;
        string acordo;
        uint valordacausa;
        uint prazofinal;
    }

    address public owner;

    Processo[] public processos;

    constructor() {
        owner = msg.sender;
    }

    function incluirProcesso(
        string memory paramCliente,
        string memory paramPartecontraria,
        string memory paramLitisconsorcio,
        string memory paramCausa,
        string memory paramAcordo,
        uint paramValordacausa,
        uint paramPrazofinal
    ) external returns (bool) {
        require(msg.sender == owner, "So o dono pode fazer isso");
        Processo memory novoProcesso = Processo(paramCliente, paramPartecontraria, paramLitisconsorcio, paramCausa,
        paramAcordo, paramValordacausa, paramPrazofinal);
        processos.push(novoProcesso);
        return true;
    }
    
}
    
}
