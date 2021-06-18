function addUser() 
{
    player1_name = document.getElementById("stylish1").value;
    player2_name = document.getElementById("stylish2").value;

         localStorage.setItem("player1_math_name", player1_name);
         localStorage.setItem("player2_math_name", player2_name);

    window.location.replace("game_page.html")
} 