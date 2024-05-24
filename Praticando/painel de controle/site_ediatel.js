function alterar(){
    var btn_alterar = document.getElementById('troca_btn')
    btn_alterar.setAttribute("onclick", "confirmar()");
    btn_alterar.value = 'Confirmar'
    var texto_lorem = document.getElementById('texto_lorem')
    var conteudo_lorem = texto_lorem.innerHTML
    texto_lorem.innerHTML = `<textarea name="" id="alteracao_texto" cols="150" rows="2">${conteudo_lorem}</textarea>`
}
function confirmar(){
    var texto_confirmado = document.getElementById('texto_lorem')
    var alteracao_texto = document.getElementById('alteracao_texto')
    var valor_texto_alterado = alteracao_texto.value
    texto_lorem.innerHTML = `${valor_texto_alterado}`
    var btn_alterar = document.getElementById('troca_btn')
    btn_alterar.setAttribute("onclick", "alterar()");
    btn_alterar.value = 'Alterar'
}

window.onload = function(){
    var texto_alterado = document.getElementById('txt_site_usuario')
    var valor_txt_server = document.getElementById('texto_lorem')
    texto_alterado.innerHTML = `${valor_txt_server}`
}


