//this is a single line comment in javascript


/*block comment for sections being turned off*/

//VARIABLES

//STRING type of data ************************


var userName = "jason"; //setting a variable

userName = "bob"; //using a variable

//the  = is the assignment operator

var firstName = "jason";

//statements in javascript end in semi colons

var lastName = "zeringue";

//using single and double quote

var myComment = "who said this: ";
var myQuote = '"all the world\'s a stage"';//single quotes print literal characters

var myQuote = "all the world's a stage";

console.log(myComment); //shows the value of myComment to the console when we reload

//console.log(myQuote);

//console.log(message);

var message = firstName + " " + lastName;
console.log(message);
//target and replace elements on the page...

var string1 = document.getElementById("string1");

string1.innerHTML = message;

var imagePath = 'images/water-color/thumbs/artwork_01.jpg';
//console.log(imagePath);
message = message.toUpperCase();
console.log(message);

//Number ********************************************** don't use quotes for numbers because numbers could be non mathematical text

var level = 1;
var lives = 3;
var ssNumber = 197642443; //this is integer
var cost = 1.50;//this is a float type number
var cost1 = 50;
var cost2 = 50;
var total = cost1 + "cost2";
//console.log(total);

//console.log(level);


////*****ARRAY DATA TYPE *******

//create an array
var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";
imageList[7] = "images/oil/thumbs/artwork_7.jpg";


//imageList.push('images/oil/thumbs/artwork_8.jpg");
var imagePlaceholder = document.getElementById('placholder');
imagePlaceholder.setAttribute("src", imageList[6]);

//imagePlaceholder.setAttribute("src" , imageList[5]);

//console.log(imagelist.length);

////*****BOOLEAN DATA TYPE *******//////
//truth or false, y or n, 1 or 0

var oldEnough = false;

var hasContent = true;

var age = 18;
////*****IF_THEN (branching logic, application logic, business logic) DATA TYPE *******//////

if (age < 20) {
    //too young
    oldEnough = false;
} else {
    oldEnough = true;
    {

if (oldEnough == true) {
    
    //== means is equal to 
    //= means gets set to
    //more code here
    
        console.log("you may go on the roller coaster");
    
    
    }
    }
    
    
    //***Functions*****///////
    
    //resueable chunks of code tha can be called at any time 
    //methods are functions that belong to objects
    
    function dynamicGreeting() {
        //create the built-in date object
        var now = new Date();
        var time = now.getHours();//extract the hours
        
        if (time < 12) {
            alert("good morning");
        }
        if (time == 12) {
            alert("time to eat lunch");
        }
        if (time > 12) {
        alert("good evening, the time is..." + now.toLocaleString());
        }
    
    }
}