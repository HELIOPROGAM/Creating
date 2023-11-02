player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score =  0;
player2_score =  0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name ;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("palavra em letras minúsculas =" + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lenght_divide_2 = Math.floor(word.length/2);
    chartAt2 = word.charAt(lenght_divide_2);
    console.log(charAt3);
    lenght_minius_1 = word.lenght-1;

    charAt3 = word.charAt(lenght_minius_1);
    console.log (charAt3);

    remove_charAt1 = word.replace(charAt1, "_");//place() para substituir a letra que selecionamos no passo acima com 
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);
//Há uma maneira fácil de adicionarmos elementos HTML dinamicamente
// Primeiro, criaremos uma tag h4 com uma id e armazenaremos a palavra dentro desta tag, armazenando tudo isso em uma variável
    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";

    //uma tag br seguida do texto “Resposta: ” e uma caixa de entrada com uma id, armazenando tudo isso em uma variáve	
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
     //duas tags br, um botão com a class bootstrap “btn btn-info” e uma função onclick check(), armazenando tudo isso em uma variável. Definiremos
       //essa função na próxima aula.	
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
	// variáveis da palavra, da caixa de entrada e do botão Verificar em uma única variável.
    row =  question_word + input_box + check_button ; 
	//Atualizaremos a div com a id="output" com a nova variável, row (linha).
     document.getElementById("output").innerHTML = row;
        //atualizaremos o valor da caixa de entrada de respostas com um valor nulo
     document.getElementById("word").value = "";
}

    




