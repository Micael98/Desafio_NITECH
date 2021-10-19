function calcular() {
    let cod = document.getElementById('txti');
    let qtd = document.getElementById('txtf');
    let res = document.getElementById('res');
    let val;
    let val_total;
    let val_desconto;
    let desconto;
    let uni;



    if ((cod.value >= 1) && (cod.value <= 10)) { // Código 1 a 10 Preço R$ 10.00

        uni = 10;
        val = qtd.value * uni;
        val_total = val;

        if (val_total <= 250) {

            desconto = ((val_total * 5) / 100);
            val_desconto = val_total - desconto;

        } else if ((val_total > 250) && (val_total <= 500)) {

            desconto = ((val_total * 10) / 100);
            val_desconto = val_total - desconto;

        } else if (val_total > 500) {

            desconto = ((val_total * 15) / 100);
            val_desconto = val_total - desconto;

        }

        res.innerHTML = `<p>Valor Unitario:R$ ${uni}.00</P>`
        res.innerHTML += `<p>Valor sem Desconto:R$ ${val}.00</P>`
        res.innerHTML += `<p>Desconto:R$ ${desconto}.00</P>`
        res.innerHTML += `<p>Valor com Desconto:R$ ${val_desconto}.00</P>`


    } else if ((cod.value >= 11) && (cod.value <= 20)) { // Código 11 a 20 Preço R$ 15.00

        uni = 15;
        val = qtd.value * uni;
        val_total = val;

        if (val_total <= 250) {

            desconto = ((val_total * 5) / 100);
            val_desconto = val_total - desconto;

        } else if ((val_total > 250) && (val_total <= 500)) {

            desconto = ((val_total * 10) / 100);
            val_desconto = val_total - desconto;

        } else if (val_total > 500) {

            desconto = ((val_total * 15) / 100);
            val_desconto = val_total - desconto;

        }

        res.innerHTML = `<p>Valor Unitario:R$ ${uni}.00</P>`
        res.innerHTML += `<p>Valor sem Desconto:R$ ${val}.00</P>`
        res.innerHTML += `<p>Desconto:R$ ${desconto}.00</P>`
        res.innerHTML += `<p>Valor com Desconto:R$ ${val_desconto}.00</P>`

    } else if ((cod.value >= 21) && (cod.value <= 30)) { // Código 21 a 30 Preço R$ 20.00

        uni = 20;
        val = qtd.value * uni;
        val_total = val;

        if (val_total <= 250) {

            desconto = ((val_total * 5) / 100);
            val_desconto = val_total - desconto;

        } else if ((val_total > 250) && (val_total <= 500)) {

            desconto = ((val_total * 10) / 100);
            val_desconto = val_total - desconto;

        } else if (val_total > 500) {

            desconto = ((val_total * 15) / 100);
            val_desconto = val_total - desconto;

        }

        res.innerHTML = `<p>Valor Unitario:R$ ${uni}.00</P>`
        res.innerHTML += `<p>Valor sem Desconto:R$ ${val}.00</P>`
        res.innerHTML += `<p>Desconto:R$ ${desconto}.00</P>`
        res.innerHTML += `<p>Valor com Desconto:R$ ${val_desconto}.00</P>`

    } else if ((cod.value >= 31) && (cod.value <= 40)) { // Código 31 a 40 Preço R$ 30.00

        uni = 30;
        val = qtd.value * uni;
        val_total = val;

        if (val_total <= 250) {

            desconto = ((val_total * 5) / 100);
            val_desconto = val_total - desconto;

        } else if ((val_total > 250) && (val_total <= 500)) {

            desconto = ((val_total * 10) / 100);
            val_desconto = val_total - desconto;

        } else if (val_total > 500) {

            desconto = ((val_total * 15) / 100);
            val_desconto = val_total - desconto;

        }

        res.innerHTML = `<p>Valor Unitario:R$ ${uni}.00</P>`
        res.innerHTML += `<p>Valor sem Desconto:R$ ${val}.00</P>`
        res.innerHTML += `<p>Desconto:R$ ${desconto}.00</P>`
        res.innerHTML += `<p>Valor com Desconto:R$ ${val_desconto}.00</P>`

    } else {

        res.innerHTML = 'Valor incorreto';
    }

}