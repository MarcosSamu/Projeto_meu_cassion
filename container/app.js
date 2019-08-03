var component = new Vue({
    el:'#app', 
    data:{
       valorDasApostas:[null, null],// indice 0 = player 01, indice 1 = player 02 
       valoresDasCartas:[
           {k:10, Q:10, J:10,a:1,as:10}
       ],
       valoresCartasFixo:[2,3,4,5,6,7,8,9,10],
       typeCard:['ouros', 'paus', 'espadas', 'copas'],
       gameStart:false,
       qtdCard:0,
       media:43,
       youLose:'Você Desistiu',
       noCar:'Não há mais cartas',
    },
    methods:{

        Print:function(){ // debugger
            var dados = this.valoresDasCartas.map((e)=>{
                return console.log(Object.values(e))
            })
            console.log(dados)
        },
        Aposta:function(){
            console.log(typeof(this.valorDasApostas))
        },
        desistir:function(){
            this.gameStart = false
            setTimeout(() => {
               return (
                   console.log(this.youLose),
                   alert(this.youLose),
                   document.location.href = '' // Recarregar página para voltar estado normal 
               )
            }, 0);
        },
        qtdCards:function(){
           this.qtdCard++
           if ((this.media - this.qtdCard) < 0){
               return (
                   alert(this.noCar),
                   document.location.href = ''
               )
           }
        },
        separador:function(){
            var al = Math.floor(Math.random() * this.typeCard.length)
                return (
                    this.typeCard[al]
                )
        },

        separador_2:function(){
            var numeroCarta = Math.floor(Math.random() * this.valoresCartasFixo.length)
                return (
                    this.valoresCartasFixo[numeroCarta]
                )
        }
    },
})
