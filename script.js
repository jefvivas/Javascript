function calcular(){

    var vel = window.document.getElementById('txtvel')
    var esp = window.document.getElementById('txtesp')
    var tem = window.document.getElementById('txttem')
    var res = window.document.getElementById('res')
    if(vel.value.length==0 && tem.value.length==0 || vel.value.length==0 && esp.value.length==0 || esp.value.length==0 && tem.value.length==0 ){
        window.alert('Deixe apenas um valor em branco!')
    }
    else if(vel.value.length!=0 && esp.value.length!=0 && tem.value.length!=0){
        window.alert('Não preencha todos os valores')
    }
    else{
        if(vel.value.length==0){
            var e = Number(esp.value)
            var t = Number(tem.value)
            res.innerHTML=`A Velocidade é ${(e/t).toFixed(3)}`
        } else if(esp.value.length==0){
            var t = Number(tem.value)
            var v = Number(vel.value)
            res.innerHTML=`A variação do espaço é ${(v*t).toFixed(3)}`
        }
        else{
            var e = Number(esp.value)
            var v = Number(vel.value)
            res.innerHTML=`A variação do tempo é ${(e/v).toFixed(3)}`
        }
    }
}