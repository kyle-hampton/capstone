var inputBox = document.getElementById('inputBox'); //inputBox in HTML
var submit = document.getElementById('submitButton'); //submit variable
var lives = document.getElementById('lives')



var hintArray = [] //array of hints


/*------------------------------------------ main function ------------------------------------------*/

function main(){ //this is the main function that wraps the game

  var hintText = document.getElementById('hintText'); //gives hint to words
  var cityText = document.getElementById('locationText'); //cityText


  var playerLives = 5
  lives.innerHTML = playerLives


  let city = placeFunction(); // place function call this allows the player to get a place to guess
  let seperated = city.toLowerCase().split('')
  console.log(seperated)
  let dashArray = seperated.map(function(x){
    if(x!==" "){
      x="_";
      return x;
    }else{
      x="-";
      return x;
    }
  });


  textDisplay(hintArray); // displays the hint of the round
  console.log(hintArray);

  wordDisplay(dashArray); //displays city of the round
  // console.log(dashArray);
  console.log(city);

        /*------------------------------------------ place function ------------------------------------------*/
        function placeFunction(){
          class Places{ //Template for questions and answers
            constructor(city, hint){
              this.city = city; // place city
              this.hint = hint; // place hint
            }
          }
          var place1 = new Places("Philadelphia", 'This place is known for being the city of brotherly love');
          var place2 = new Places('London',  'This is the home of big ben and the queen');
          var place3 = new Places('Sydney', 'This is place is the setting of the movie "finding nemo"');
          var place4 = new Places('New York', 'If you can make it in this place you can make it anywhere');
          var place5 = new Places('Dubai', 'This place has the tallest building in the world');
          var place6 = new Places('Moscow', 'This place is home to the kremlin');
          var place7 = new Places('Huston', 'This place is the city of SXSW');
          var place8 = new Places('Las Vegas', 'This place is in the desert but what happens here stays here');
          var place9 = new Places('Kansas City', 'This place is home to the "chiefs"');
          var place10 = new Places('Pittsburgh', 'This place is home to the "steelers"');
          var place11 = new Places('Sacramento', 'This place is The state capitial of california');
          var place12 = new Places('Beijing', 'This place hosted the 2008 summer olympics');
          var place13 = new Places('Madrid', 'This place was home to the soccor star Cristiano Ronaldo');
          var place14 = new Places('Istanbul', 'This place is a city in turkey that bridges two seas');
          var place15 = new Places('Lahore', 'This place is the wealthiest city in pakistan');
          var place16 = new Places('Seoul', 'This place is the capital of south korea');
          var place17 = new Places('Toronto', 'This place is the birth place of drake');
          var place18 = new Places('Dallas', 'This place is the home to the "cowboys"');
          var place19 = new Places('San Diego', 'This place is home to the golden gate bridge');
          var place20 = new Places('Chicago', 'This place is called the windy city');


          var placelist = [place1, place2, place3, place4, place5, place6, place7, place8, place9, place10, place11, place12, place13, place14, place15, place16, place17, place18, place19, place20]; //place list array
          // console.log(placelist)


            // console.log(placelist[Math.floor(Math.random() * placelist.length)]);
            var place = placelist[Math.floor(Math.random() * placelist.length)];
            var hint = place.hint;
            let city = place.city;
            // console.log(hint);
            hintArray.push(hint) //Pushes to hint array at top of page
            // console.log(city)
            return city //Pushes to city array at top of page

        }
        /*------------------------------------------ textDisplay function ------------------------------------------*/
        function textDisplay(x){
          // console.log(x)
          return hintText.innerHTML = x // prints the hint
        }

        /*------------------------------------------ wordDisplay function ------------------------------------------*/
        function wordDisplay(x){
          cityText.innerHTML = x.join(" ");
          console.log(x)
        }

        /*------------------------------------------ wordDisplay function ------------------------------------------*/


        submit.addEventListener('click', function(){//submit button
        for(i = 0; i < dashArray.length; i++){
            if(seperated[i] == inputBox.value){
              dashArray.splice(i,1,inputBox.value);

              if(dashArray.includes("_") == false){
                setTimeout(function(){winner();}, 1000);
              }
            }
          }

          if(seperated.includes(inputBox.value) == false){ // compares input value to array
            playerLives -= 1
            console.log(lives)
            console.log(playerLives)
              if(playerLives == 0){ //this if restarts the game
                setTimeout(function(){loser();}, 1000);
                }
               }
          lives.innerHTML = playerLives


          wordDisplay(dashArray);
          inputBox.value = "";
        });

        function winner(){ // win condition
          if (window.confirm("You win, want to play again?")){
            location.reload();
          }
        }

        function loser(){ // lose condition
          if (window.confirm("The answer was: " + seperated.join("") + "! Play Again?")){
            location.reload();
          }
        }
     }





setTimeout(main(), 500);

// function init(){
//   main()
// }
