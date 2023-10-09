function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    // Se os valores estiverem vazios ou nulos irá retornar uma mensagem para o usuario
    if(bill == '' | serviceQual== 0){
        alert('Por favor preencha os valores!')
        return;
    }

    // Verifica a quantidade de pessoas a dividirem a conta
    if(numOfPeople == '' | numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById('each').style.display = 'none';
    }
    else{
        document.getElementById('each').style.display = 'block';
    }

    // calcular o valor total da gorjeta de acordo com o numero de pessoas
    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTips').style.display = 'block';
}

document.getElementById('totalTips').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('tipsForm').addEventListener('submit', calculateTip);