    var formulario = document.getElementById('formulario');
    var btn_enviar = document.getElementById('btn_enviar');
    var pontos = 0

    btn_enviar.addEventListener('click', function(event){
        event.preventDefault();
        var resposta_1 = formulario.p_1.value
        var resolução_1 = 'Insira aqui a resolução da primeira pergunta'
        if(resposta_1 == 'C'){
            document.getElementById('resolucao_1').innerHTML = resolução_1
            pontos += 1
        }
        else if(resposta_1 =='E'){
            document.getElementById('resolucao_1').innerHTML = resolução_1
        }

        var resposta_2 = formulario.p_2.value
        var resolução_2 = 'Insira aqui a resolução da segunda pergunta'

        if(resposta_2 == 'C'){
            document.getElementById('resolucao_2').innerHTML = resolução_2
            pontos += 1
        }
        else if(resposta_2 =='E'){
            document.getElementById('resolucao_2').innerHTML = resolução_2
        }

        var resposta_3 = formulario.p_3.value
        var resolução_3 = 'Insira aqui a resolução da pergunta'

        if(resposta_3 == 'C'){
            document.getElementById('resolucao_3').innerHTML = resolução_3
            pontos += 1
        }
        else if(resposta_3 =='E'){
            document.getElementById('resolucao_3').innerHTML = resolução_3
        }

        var resposta_4 = formulario.p_4.value
        var resolução_4 = 'Insira aqui a resolução da pergunta'

        if(resposta_4 == 'C'){
            document.getElementById('resolucao_4').innerHTML = resolução_4
            pontos += 1
        }
        else if(resposta_4 =='E'){
            document.getElementById('resolucao_4').innerHTML = resolução_4
        }

        var resposta_5 = formulario.p_5.value
        var resolução_5 = 'Insira aqui a resolução da pergunta'

        if(resposta_5 == 'C'){
            document.getElementById('resolucao_5').innerHTML = resolução_5
            pontos += 1
        }
        else if(resposta_5 =='E'){
            document.getElementById('resolucao_5').innerHTML = resolução_5
        }

        var resposta_6 = formulario.p_6.value
        var resolução_6 = 'Insira aqui a resolução da pergunta'

        if(resposta_6 == 'C'){
            document.getElementById('resolucao_6').innerHTML = resolução_6
            pontos += 1
        }
        else if(resposta_6 =='E'){
            document.getElementById('resolucao_6').innerHTML = resolução_6
        }

        var resposta_7 = formulario.p_7.value
        var resolução_7 = 'Insira aqui a resolução da pergunta'

        if(resposta_7 == 'C'){
            document.getElementById('resolucao_7').innerHTML = resolução_7
            pontos += 1
        }
        else if(resposta_7 =='E'){
            document.getElementById('resolucao_7').innerHTML = resolução_7
        }

        var resposta_8 = formulario.p_8.value
        var resolução_8 = 'Insira aqui a resolução da pergunta'

        if(resposta_8 == 'C'){
            document.getElementById('resolucao_8').innerHTML = resolução_8
            pontos += 1
        }
        else if(resposta_8 =='E'){
            document.getElementById('resolucao_8').innerHTML = resolução_8
        }

        var resposta_9 = formulario.p_9.value
        var resolução_9= 'Insira aqui a resolução da pergunta'

        if(resposta_9 == 'C'){
            document.getElementById('resolucao_9').innerHTML = resolução_9
            pontos += 1
        }
        else if(resposta_9 =='E'){
            document.getElementById('resolucao_9').innerHTML = resolução_9
        }

        var resposta_10 = formulario.p_10.value
        var resolução_10 = 'Insira aqui a resolução da pergunta'

        if(resposta_10 == 'C'){
            document.getElementById('resolucao_10').innerHTML = resolução_10
            pontos += 1
        }
        else if(resposta_10 =='E'){
            document.getElementById('resolucao_10').innerHTML = resolução_10
        }
        document.getElementById('acerto').innerHTML = `sua pontuação foi: ${pontos}`
    }
        
    )