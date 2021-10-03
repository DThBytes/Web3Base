function init(){
    if(typeof window.ethereum !== 'undefined'){
        console.log("Metamask/Web3 instalado");
    } else{
        console.log("Instala Metamask/Web3!!!");
    }
}

window.onload = init();