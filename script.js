class JogoDaAdivinhacaoView{
    btnChutar = document.getElementById('btnChutar');
    telaChute = document.getElementById('telaChute');
    txtChute = document.getElementById('txtChute');
    btnJogarNovamente = document.getElementById('btnJogarNovamente');
    

    constructor(){
        this.registrarEventos();
        
    }
 
    registrarEventos(){
        let numeroAleatorio = this.GerarNumeroAleatorio();
        btnChutar.addEventListener('click',() => this.Chutar(numeroAleatorio));
        btnJogarNovamente.addEventListener('click',() => this.Reiniciar());
        }

    Chutar(numeroAleatorio)
    {
        const chute = telaChute.value;

        const chuteTemUmDigito = chute.trim().length > 0 && chute.trim().length < 3 ;

        const chuteEhUmNumero = Number.isInteger(parseInt(chute));

        const chuteEhMenorQue20 = parseInt(chute) < 21;

        if(chuteEhMenorQue20 == false)
        {
            txtChute.innerHTML = 'O seu chute ' + chute +' e maior que 20';
            txtChute.style.color = "yellow";
        }
        if(chuteEhUmNumero == false)
        {
            txtChute.innerHTML = 'O seu chute ' + chute +' tem que ser um número em 1 e 20';
            txtChute.style.color = "yellow";
        }
        if(chuteTemUmDigito && chuteEhUmNumero && chuteEhMenorQue20)
        {
            this.AtualizarTextDoChute(chute,numeroAleatorio);
        }
        
    }

    AtualizarTextDoChute(chute,numeroAleatorio)
    {      
        const numeroChutado = parseInt(chute);


        if(numeroAleatorio == numeroChutado )
        {
           this.MensagemVitoria();
        }
        else
        {
            if(numeroAleatorio > numeroChutado )
            {
                this.MensagemNumeroMenor();
            }  
            if(numeroAleatorio < numeroChutado )
            {
                this.MensagemNumeroMaior();
            }          
        }
        
       
    }
    Reiniciar()
    {
        location.reload();
    }

    MensagemVitoria()
    {
        txtChute.innerHTML = 'Parabens! Voce Acertou';
        txtChute.style.color = "green";
        btnChutar.disabled  = true;
    }
    MensagemNumeroMenor()
    {
        txtChute.innerHTML = 'O seu chute ' + numeroChutado +' foi menor que o número secreto';
        txtChute.style.color = "red";
    }
    MensagemNumeroMaior()
    {
        txtChute.innerHTML = 'O seu chute ' + numeroChutado +' foi maior que o número secreto';
        txtChute.style.color = "red";
    }
    GerarNumeroAleatorio()
    {
        return Math.floor((Math.random() * 20) + 1);
    }
}

window.addEventListener('load', () => new JogoDaAdivinhacaoView());   