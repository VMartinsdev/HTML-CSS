
function clickFontes(){

    const lista_link_fontes = document.getElementById("lista_link_fontes")
    const menu_links_fontes = document.getElementById("menu_links_fontes");

    if(lista_link_fontes.style.display == 'none'){
        lista_link_fontes.style.display = 'block'
        menu_links_fontes.innerText = "keyboard_arrow_up" 
    }else{
        lista_link_fontes.style.display = 'none'
        menu_links_fontes.innerText = "keyboard_arrow_down" 
    }

    


}