function init(){
    const metakStatusDiv = document.getElementById('metaStatusDivId');
    const metakStatusText = document.getElementById('metaStatusTextId');
    const metaButton = document.getElementById('metaButtonId');
    if(typeof window.ethereum !== 'undefined'){
        console.log("Metamask/Web3 instalado");
        metakStatusDiv.className = "badge bg-success text-wrap";
        metakStatusText.innerHTML = "Metamask/Web3 disponible!!!";
        metaButton.classList.remove('d-none');
    } else{
        console.log("Instala Metamask/Web3!!!");
    }
}

window.onload = init();