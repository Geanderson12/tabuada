function tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    
    
    if (num.value.length == 0 || end.value.length == 0){
        window.alert('[ERRO]Você precisa definir um valor')
    }else{
        var n =Number(num.value)
        var e =Number(end.value)
        var x = 0
        var r =''
        var res = window.document.getElementById('resposta')
        // r = n*e
        res.innerHTML = `A tabuada de ${n} é:<br>`

        do {
            r = n*x
            res.innerHTML += `${x} x ${n} = ${r}<br>`
            x++
            
        }while(x <=e)
    }
}