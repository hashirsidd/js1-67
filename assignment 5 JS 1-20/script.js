
// alert Chap 1
function one(){
    alert ( "Hello! This is Muhammad Hashir's Assignment" );
}
function two(){
    alert ( "Error Please Entervalid password" );
}

function three(){
    alert ( "Welcome to JS land! \nHappy Coding " );
}
function four(){
    alert ( "Welcome to JS land.... " );
    alert("Happy Coding!");
}

// chap 2
var userName;
var myName = "Muhammad Hashir Siddiqui";
var message = "Hello World!" ;
function twoTwo(){
    alert ( "My name is " + myName );
}
function twoThree(){
    alert ( message );
}
function twoFour(){
    var name = prompt("Enter your name");
    var age = prompt("Enter your age");
    alert("Your name is " +name+"\nYou are "+age+" years old.");
}
function twoFive(){
    var string = "PIZZA";
    var text = "";
        for (i =  string.length; i >0 ; i--) {
            for(j=0 ; j < i ;j++){
                text += string[j];
            }
            text+= "\n"
        }
    alert(text);
}
function twoSix(){
    var email = "hashir.1@mymail.com";
    alert("My email address is " + email);
}
function twoSeven(){
    var book =  "A smarter way to learn JavaScript";
    alert("I am learning form " + book)
}
function twoEight(){
    document.write("Hello World!");
}
function twoNine(){
    var styl = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    alert(styl);
}

// chapter 3
function thOne(){
    var age = 22;
    alert("I am " + age + " years old");
}
function thTwo(){
    var N = 15;
    alert("You have visited this site " + N + " times");
}

function thThree(){
    var birthYear = 1997;
    document.write("My birth year is  " + birthYear+ "<br> Data type of my birthYear Variable is INT");
}
function thFour(){
    var name = "Daniyal";
    var product = "Washing Machine";
    var quantity = 1; 
    document.write(name +" ordered " + quantity+ " " + product + " from my store");
}
// chapter 4
function fOne(){
    alert("Declaring 3 variables in single statement \nvar a , b , c ;");
}
function fTwo(){
    alert("5 legal variables abc, abc1, lastName , first_name , a$ \n5 illegal variables 1abc, 2 , last Name , first name , 0a$");

}
function fThree(){
    document.write("<h1> A heading stating “Rules for naming JS variables </h1> <br><br> A variable name can contain only letters, numbers, dollar signs, and underscores.")
    document.write("<br>For example $my_1stVariable <br> Variables must begin with a ______, ______ or  _____. For example $name, _name or name")
    document.write("<br> Variable names are case <u>sensitive</u>. <br> Variable names should not be JS <u>keyword</u> ")
}
//chapter 5

function fiveOne(){
    var n1 = +prompt("Enter first number");
    var n2 = +prompt("Enter second number");
    var sum = n1 + n2;
    document.write(" Sum of " + n1 +" and " + n2 + " is " + sum);
}

function fiveTwo(){
    var n1 = +prompt("Enter first number");
    var n2 = +prompt("Enter second number");
    var sub = n1 - n2;
    var mul = n1*n2;
    var div  = n1/n2;
    var mod = n1%n2;
    document.write(" Sub of " + n1 +" and " + n2 + " is " + sub);
    document.write("<br> Mul of " + n1 +" and " + n2 + " is " + mul);
    document.write("<br> Div of " + n1 +" and " + n2 + " is " + div);
    document.write("<br> Mod of " + n1 +" and " + n2 + " is " + mod);
}

function fiveThree(){
    var x ;
    document.write("Value of x after declaration :" + x);
    x=8;
    document.write("<br> Initial value of x :" + x);
    x++;
    document.write("<br> Value of x after increment :" + x);
    x+=7;
    document.write("<br> Value of x after adding 7 :" + x);
    x--;
    document.write("<br> Value of x after decrement :" + x);
    document.write("<br> Value of remainder after dividing by 3 :" + x%3);
}

function fiveFour(){
    var price = 600;
    var tickets = +prompt("Enter number of tickets");
    document.write(" The cost to buy " + tickets +" tickets to a movie is PKR" +price*tickets );

}

function fiveFive(){
    var num = +prompt("Enter a number");
    document.write("Table of "+num);
    for(var i=1; i<=10;i++){
        document.write("<br>"+num +" X " + i +" = "+ num*i);
    }
}
function fiveSix(){
    var c;
    var n1 = +prompt("Enter a temp to covert into Celcius");
    var n2 = +prompt("Enter a temp to covert into Fahrenheit");;
    var f;
    c = (n1-32) *(5/9);
    f = (n2*9/5) + 32;
    document.write(n1 +"F is " + c+"C <br>"+n2+"C is "+f +"F");
}

function fiveSeven(){
    var i1 = +prompt("Enter price of item 1");
    var q1 = +prompt("Enter quantity of item 1");
    var i2 = +prompt("Enter price of item 2");
    var q2 = +prompt("Enter quantity of item 2");
    document.write("<h1> Shopping cart </h1>");
    document.write("Price of item 1 : " + i1);
    document.write("<br>Quantity of item 1 : " + q1);
    document.write("<br>Price of item 2 : " + i2);
    document.write("<br>Quantity of item 2 : " + q2);
    document.write("<br>Shipping charges: 100");
    document.write("<br><br>Total Bill : " + (i1*q1 + i2*q2 + 100) );
}

function fiveEight(){
    var marks = 850;
    var total = 1000;
    var per = (marks/total)*100;
    document.write("Your marks : "+marks + "<br> Total Marks : " + total);
    document.write("<br>Your percentage is " + per);
}

function fiveNine(){
    var dollar = 10;
    var rial  = 25;
    var rup = (10*147) + (25*35);
    document.write("<br>Total currency in PKR :" + rup);

}

function fiveTen(){
    var x = 10;
    x = ((x+5)*10)/2
    window.alert(x);
}

function fiveEleven(){
    var x = 2020;
    var y = +prompt("Enter year of birth ")
    var age = x - y;
    window.alert("Your age is " + age);
}

function fiveTwelve(){
    var radius = 22;
    var cir = (2*3.14)*radius;
    var area = (3.14*radius)*2;
    document.write("Radius : " + radius);
    document.write("<br>Circumference : " + cir);
    document.write("<br>Area : " + area);
}

function fiveThirteen(){
    var age = 23;
    var snack = "Lays";
    var ex = 80;
    var avg = 3;

    document.write(" Favourite snack " + snack);
    document.write("<br> Current age " + age);
    document.write("<br> Expected max age " + ex);
    document.write("<br> Amout of snacks per day " + avg);
    document.write("<br> You will need  "+ ((ex-23)*256*avg) + snack +" to last upto" + ex + "years");
}

function sixOne(){
    var a = +prompt("Enter a number");
    document.write("<br> The value of a :" + a);
    document.write("<br> ----------------------------" );
    document.write("<br> The value of ++a :" + ++a);
    document.write("<br> Now the value of a :" + a);
    document.write("<br><br> The value of a++ :" + a++);
    
    document.write("<br> Now the value of a :" + a);

    document.write("<br><br> The value of --a :" + --a);
    document.write("<br> Now the value of a :" + a);

    document.write("<br><br> The value of a-- :" + a--);
    document.write("<br> Now the value of a :" + a);
 
}

function sixTwo(){
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    window.alert(result);
}

function sixThree(){
    var name = prompt("Enter your name");
    document.write("<h1> Welcome "+ name+" to my website. </h1>")
}

function sixFour(){
    window.alert("No question provided");
}

function sixFive(){
    var num = +prompt("Enter a number");
    if(num == 0){
        num = 5;
    }
    document.write("Table of "+num);
    for(var i=1; i<=10;i++){
        document.write("<br>"+num +" X " + i +" = "+ num*i);
    }
}

function sixSix(){
    var s1 = prompt("Name of Subject 1");
    var s2 = prompt("Name of Subject 2");
    var s3 = prompt("Name of Subject 3");
    var m1 = +prompt("marks of subject 1");
    var m2 = +prompt("marks of subject 2");
    var m3 = +prompt("marks of subject 3");
    var total = 100;

    document.write("<Table> <tr> <td>Subject</td> <td>Total Marks</td> <td>Obtain marks</td> <td>Percentage</td></tr>");
    document.write("<tr> <td>"+s1 +"</td> <td>100</td> <td>"+ m1+"</td> <td>"+(m1/total)*100 +"%</td></tr>");
    document.write("<tr> <td>"+s2 +"</td> <td>100</td> <td>"+ m2+"</td> <td>"+(m2/total)*100 +"%</td></tr>");
    document.write("<tr> <td>"+s3 +"</td> <td>100</td> <td>"+ m3+"</td> <td>"+(m3/total)*100 +"%</td></tr>");
    document.write("<tr> <td>----</td> <td>300</td> <td>"+ (m1+m2+m3)+"</td> <td>"+(m1+m2+m3/total*3)*100 +"%</td></th> </table>");

}

function nineOne(){
    var name = prompt("Enter name of your city");
    if(name == "Karachi"){
        alert("Welcome to the city of lights");
    }
    else{
        alert("welcome to "+name);
    }
}

function nineTwo(){
    var gen = prompt("Enter your gender");
    if(gen == "Male"){
        alert("Welcome Sir");
    }
    else if(gen == "Female"){
        alert("welcome Ma'am");
    }
    else{
        alert("Invalid input")
    }
}

function nineThree(){
    var color = prompt("Enter color of signal");
    if(color == "Red"){
        alert("Must Stop");
    }
    else if(color == "Yellow"){
        alert("Get ready");
    }
    else{
        alert("Go")
    }
}

function nineFour(){
    var x = +prompt("enter fule in car in liters");
    if(x<0.25){
        alert("Refule your car");
    }
    else{
        alert("Contnue your journey");
    }
}

function nineFive(){
    var a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");
    }
    
     var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
     var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }
     if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
    if("car" < "cat"){
        alert("car is smaller than cat");
        }
    
}

function nineSix(){
    var m1 = +prompt("marks of subject 1");
    var m2 = +prompt("marks of subject 2");
    var m3 = +prompt("marks of subject 3");
    var total = +prompt("Enter total marks");
    var per = ((m1+m2+m3)/total)*100;
    var tm = m1+m2+m3;

    if(per>=80){
        document.write("Total marks : 300");
        document.write("<br>Marks Obtaine:"+tm);
        document.write("<br>Percentage:"+per);
        document.write("<br>Grade:A-one");
    }
    else if(per>=70){
        document.write("Total marks : 300");
        document.write("<br>Marks Obtaine:"+tm);
        document.write("<br>Percentage:"+per);
        document.write("<br>Grade:A");
    }
    else if(per>=60){
        document.write("Total marks : 300");
        document.write("<br>Marks Obtaine:"+tm);
        document.write("<br>Percentage:"+per);
        document.write("<br>Grade:B");
    }
    else{
        document.write("Total marks : 300");
        document.write("<br>Marks Obtaine:"+tm);
        document.write("<br>Percentage:"+per);
        document.write("<br>Grade:Fail");
    }
}

function nineSeven(){
    var ran = Math.floor(Math.random() * 10);
    console.log(ran);
    var guess = +prompt("Guess the number bw 1-10");
    if(guess == ran){
        alert("Your guess is correct");
    }
    else if(++guess == ran){
        alert("You are close")
    }
    else{
        alert("you lose");
    }
}

function nineEight(){
    var n = +prompt("Enter any number");
    if(n%3 == 0){
        alert(n+" is divisible by 3");
    }
    else{
        alert(n+" is not divisible by 3");
    }
}

function nineNine(){
    var n = +prompt("Enter any number");
    if(n%2 == 0){
        alert(n+" is even number");
    }
    else{
        alert(n+" is an odd number");
    }
}

function nineTen(){
    var temp = +prompt("Enter temperature");
    if(temp>40){
        alert("Its too hot today")
    }
    else if(temp>30){
        alert("Its normal today")
    }
    else if(temp>20){
        alert("Its cool today")
    }
    else if(temp>10){
        alert("OMG!Its so cool today")
    }

}

function nineEleven(){
    var n1 = +prompt("Enter x ");
    var n2 = +prompt("Enter y ");
    var o = prompt("Enter operation ");

    if(o == "+"){
        alert("x + y = "+ n1+n2);
    }
    else if(o == "-"){
        alert("x - y = "+ n1-n2);
    }
    else if(o == "*"){
        alert("x X y = "+ n1*n2);
    }
    else if(o == "/"){
        alert("x / y = "+ n1/n2);
    }
    else if(o == "%"){
        alert("x % y = "+ n1%n2);
    }
}

function twelveTwo(){
    var n1 = +prompt("Enter n1");
    var n2 = +prompt("Enter n2");
    if(n1>n2){
        alert(n1 +" > " + n2);
    }
    else if(n1<n2){
        alert(n1 +" < " + n2);
    }
    else{
        alert(n1 +" = " + n2);
    }
}

function twelveThree(){
    var n1 = +prompt("Enter a number");
    if(n1>0){
        alert(n1 +" is positive number" );
    }
    else if(n1<0){
        alert(n1 +" is negative number ");
    }
    else{
        alert(n1 +" = 0" );
    }
}

function twelveFour(){
    var x = prompt("Enter a character");
    if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
        alert(x + " is a vowel");
    }
    else{
        alert(x + " is not a vowel");

    }
}

function twelveFive(){
    var pass = "hello";
    var user = prompt("Enter your password");
    if(user != ""){
        if(user == pass){
            alert("your password is correct");
        }
        else{
            alert("invalid Password");
            twelveFive();
        }
    }
    else{
        alert("invalid Password");
        twelveFive();
    }
}

function twelveSix(){
    var greeting;
    var hour = 20;
    if (hour < 18) {
        greeting = "Good day";
    }
    else{
        greeting = "Good evening";
    }
    alert(greeting);
}

function twelveSeven(){
    var time = +prompt("Enter time in 24 hr format");
    var msg;
    if(time>=0000 && time <1200){
        msg = "Good Morning";
    }
    else if(time>=1200 && time <1700){
        msg = "Good Afternoon";
    }
    else if(time>=1700 && time <2100){
        msg = "Good Evening";
    }
    else if(time>=2100 && time <24){
        msg = "Good Night";
    }
    alert(msg);
}

function fourteenOne(){
    var students = [];
    var students1 = new Array();
    var name = ["Ali" , "ahmed" , "arsalan"];
    var marks = [5,29,27];
    var pass =  [0,1,1];
    var mix = ["car",100,'A',15,"Hashir"];
    var edu = ["SSC","HSC","BS","BCS","BCOM","MCOM","MS","MPhil","PhD"];

    for(var i=0;i<edu.length;i++){
        document.write("<br>"+ (i+1) +" ) "+ edu[i]);
    }
}

function fourteenEight(){
    var name = ["Ali" , "ahmed" , "arsalan"];
    var marks = [5,29,27];
    var per=[];
    for(var i=0;i<3;i++)
        per[i] = (marks[i]/30)*100;
    
    for(var i=0;i<name.length;i++){
        document.write("<br>"+ name[i] +"'s marks are "+ marks[i] +" and percentage is " + Math.floor(per[i])+ "%");
    }
}

function fourteenNine(){
    var colors = ["Red","Green","White"]
    document.write("<h1> original colors array </h1>")
    for(var i=0;i<colors.length;i++)
        document.write("<br>" + (i+1) +")" + colors[i])

    colors.unshift(prompt("Which color do you want to add in start of array"));
    document.write("<h1> After adding color in the start</h1>")
    for(var i=0;i<colors.length;i++)
        document.write("<br>" + (i+1) +")" + colors[i])
    
    colors.push(prompt("Which color do you want to add in end of array"));
    document.write("<h1> After adding color in the end</h1>")
    for(var i=0;i<colors.length;i++)
        document.write("<br>" + (i+1) +")" + colors[i])

    document.write("<h1> After adding colors in the start</h1>")
    colors.unshift("Violet","purple");
    for(var i=0;i<colors.length;i++)
        document.write("<br>" + (i+1) +")" + colors[i])    

    document.write("<h1> After deleting 1st color</h1>")
    colors.shift();
    for(var i=0;i<colors.length;i++)
        document.write("<br>" + (i+1) +")" + colors[i])    

    document.write("<h1> After deleting color from the start</h1>")
    colors.pop();
    for(var i=0;i<colors.length;i++)
        document.write("<br>" + (i+1) +")" + colors[i])    

    var index = +prompt("Which index do you want to add color");
    document.write("<h1> After adding colors at the given index</h1>")
    colors.ins
    for(var i=0;i<colors.length;i++)
        document.write("<br>" + (i+1) +")" + colors[i])    

}

function fourteenTen(){
    var score = [250,168,554,125]
    document.write("Score :" + score);
    document.write("<br>Ordered score :" + score.sort());
}

function fourteenEleven(){
    var cities = ["karachi","lahore","islamabad","Quetta","Peshawar"];
    var selectedCities= cities.slice(0,3)
    document.write("Cities :" + cities);
    document.write("<br>selected cities :" + selectedCities);

}

function fourteenTwelve(){
    var arr = ["This", "is", "my", "cat"];
    var string = arr.join(" ");
    alert(string);  

}

function fourteenThirteen(){
    var array = ["Mouse","Keyboard","Printer","Monitor"];
    var a = array.length;
    for(var i=0;i<a;i++){
        document.write(array.shift() +"   " ) ;
    }
}

function fourteenFourteen(){
    var array = ["Mouse","Keyboard","Printer","Monitor"];
    var a = array.length;
    for(var i=0;i<a;i++){
        document.write(array.pop() +"   " ) ;
    }
}

function fourteenFifteen(){
    var array = ["apple","Samsung","Nokia","Motorola","Sony"]
    document.write("<label for='Brands'>Mobile Brands:</label><select name='Brands'> <option value='0'>"+array[0]+"</option><option value='1'>"+array[1] +"</option> <option value='2'>"+array[2]+"<option value='3'>"+array[3] +"</option> <option value='4'>"+array[4]+"</option></select>");
}

function seventeenOne(){
    var arr2d = [[0,1,2],[3,4,5],[6,7,8]]
    alert("var arr2d = [[0,1,2],[3,4,5],[6,7,8]]");

    for(var i=0;i<arr2d.length;i++)
        for(var j=0;j<arr2d[i].length;j++)
            document.write(arr2d[i][j])
}

function seventeenTwo(){
    var arr2d = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
    alert("var arr2d = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]");
}

function seventeenThree(){
    for(var i=1;i<=10;i++)
        document.write("<br>"+i);
}

function seventeenFour(){
    var num = +prompt("Enter a number");
    var len = +prompt("Enter length for the table");
    document.write("Table of "+num);
    for(var i=1; i<=len;i++){
        document.write("<br>"+num +" X " + i +" = "+ num*i);
    }
}

function seventeenFive(){
    var array = ["Mouse","Keyboard","Printer","Monitor"];
    for(var i=0;i<array.length;i++){
        document.write("<br> Element at index"+i+" is "+ array[i] ) ;
    }
}

function seventeenSix(){
    document.write("<h2>Counting : <br>")
    for(var i=1;i<=15;i++)
        document.write(i+" , ")

    document.write("<br>Reverse counting : <br>")
    for(var i=15;i>0;i--)
        document.write(i+" , ")

    document.write("<br> Even : <br>")
    for(var i=0;i<=20;i+=2)
        document.write(i+" , ")
    
    document.write("<br>Odd : <br>")
    for(var i=1;i<=20;i+=2)
        document.write(i+" , ")
    
    document.write("<br> Series : <br>")
    for(var i=0;i<=20;i+=2)
        document.write(i+"K , ")

}

function seventeenSeven(){
    var a = ["cake", "apple pie", "cookie", "chips", "patties"]
    var search = prompt("Search by user input");
    var flag = false
    for(var i=0;i<a.length;i++){
        if(a[i] == search){
            alert(search +" is found at index "+i);
            flag = true;
            break
        }
    }
    if(flag == false){
        alert(search + " is not found in array");
    }
}

function seventeenEight(){
    var a = [24, 53, 78, 91, 12]
    var temp;

    for(var i=0;i<a.length;i++){
        for(var j=0;j<a.length;j++){
            if(a[i]<a[j]){
                temp = a[j]
            }
        }
    }

    document.write("<h2>Array Items :"+a);
    document.write("<br>The largest number:"+ temp);

}
function seventeenNine(){
    var a = [24, 53, 78, 91, 12]
    var temp;

    for(var i=0;i<a.length;i++){
        for(var j=0;j<a.length;j++){
            if(a[i]<a[j]){
                temp = a[i]
            }
        }
    }

    document.write("<h2>Array Items :"+a);
    document.write("<br>The largest number:"+ temp);

}

function seventeenTen(){
    var i=1;
    while(i<=100){
        if(i%5==0){
            document.write(i,", ")
        }
        i++;
    }
}