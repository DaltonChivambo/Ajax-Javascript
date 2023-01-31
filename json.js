

function findCEP() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    // ajax.open('GET', 'https://viacep.com.br/ws/'+input+'/json/');
    ajax.open('GET','http://localhost:8080/anime/list');
    ajax.send();


    ajax.onload = function () {
        document.getElementById('text').innerHTML = this.responseText;
        let obj = JSON.parse(this.responseText);
        // document.getElementById('text').innerHTML = "CEP: "+obj.cep+ "<br> Localidade: "+obj.localidade+ "<br>UF: "+obj.uf ;
        console.log(this.responseText);
    }
}