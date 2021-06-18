/*
!Note Write the code here correctly otherwise you may face any problems that you can't imagine.
*This is to send the question to the player number 2
*/ 
player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
function send()
{
number1 = document.getElementById("1_input").value;
number2 = document.getElementById("2_input").value;

actual_answer = parseInt(number1)*parseInt(number2);
question_number = "<h4>" + number1 + "X " + number2 + "</h4>";
input_box = "<br>Answer: <input type='text' id='input_check_box' placeholder='Type here your answer to the question respectively'>"; 
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}
//*Check function
question_turn = "player1";
answer_turn = "player2";
function check() 
{
	get_answer = document.getElementById("input_check_box");
	if (get_answer == actual_answer)
	{
		if(answer_turn == "player1")
		{
			update_player1_score = player_score + 1;
		    document.getElementById("player1_score").innerHTML = update_player1_score
		}
		else
		{
			update_player2_score = player_score + 1;
			document.getElementById("player2_score").innerHTML = update_player2_score;
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2";
		document.getElementById("player_question").innerHTML = "Question turn: " + player2_name;
	}
	else 
	{
		question_turn = "player1";
		document.getElementById("player_question").innerHTML = "Question turn:" + player1_name;
	}
}  