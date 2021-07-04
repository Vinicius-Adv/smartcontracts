//SPDX-License-Identifier: none


pragma solidity 0.8.6;

contract Registroprocessos {

    struct Processo {
        string autor;
        string reu;
        string causa;
        uint valordacausa;
        uint prazofinal;
    }

    address public owner;

    Processo[] public processos;

    constructor() {
        owner = msg.sender;
    }

    function incluirProcesso(
        string memory paramAutor,
        string memory paramReu,
        string memory paramCausa,
        uint paramValordacausa,
        uint paramPrazofinal
    ) external returns (bool) {
        require(msg.sender == owner, "So o dono pode fazer isso");
        Processo memory novoProcesso = Processo(paramAutor, paramReu, paramCausa, paramValordacausa, paramPrazofinal);
        processos.push(novoProcesso);
        return true;
    }
    
}
