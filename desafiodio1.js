let nome = "Alexandre"
let xp =10000
let nivel = ""

switch(true){

    case xp <= 1000: 
        nivel = "ferro"
        console.log("O heroi de nome " + nome + " está no nível " + nivel + ".")
    break;
    
    case xp >= 1001 && xp <= 2000: 
        nivel = "bronze"
        console.log("O heroi de nome " + nome + " está no nível " + nivel + ".")
    break;

    case xp >= 2001 && xp <= 5000: 
        nivel = "prata"
        console.log("O heroi de nome " + nome + " está no nível " + nivel + ".")
    break;
    
    case xp >= 5001 && xp <= 7000: 
        nivel = "ouro"
        console.log("O heroi de nome " + nome + " está no nível " + nivel + ".")
    
    case xp >= 7001 && xp <= 8000 :
        nivel = "platina"
        console.log("O heroi de nome " + nome + " está no nível " + nivel + ".")
    break;

    case xp >= 8001 && xp <= 9000 :  
        nivel = "ascendente"
        console.log("O heroi de nome " + nome + " está no nível " + nivel + ".")
    break;
    
    case xp >= 9001 && xp >= 10000 :  
        nivel = "imortal"
        console.log("O heroi de nome " + nome + " está no nível " + nivel + ".")
    break;
    
    case xp >= 10001: 
        nivel = "radiante"
        console.log("O heroi de nome " + nome + " está no nível " + nivel + ".")
    
    default: console.log("valor invalido!")
}