//Ch 21-25
function one() {
    var fname = prompt("Enter first name");
    var lname = prompt("Enter Last name");
    var name = fname + " " + lname;
    alert("Welcome " + name);
}

function two() {
    var mobile = prompt("Enter infoabout your fav mobile");
    alert("Length of string : " + mobile.length)
}

function three() {
    var country = "Pakistan";
    for (var i = 0; i < country.length; i++)
        if (country[i] == 'n') {
            alert("Index of n: " + i);
            break;
        }
}

function four() {
    var string = "Hello World";
    for (var i = string.length; i >= 0; i--) {
        if (string[i] == 'l') {
            alert("Index of last l : " + i);
            break;
        }
    }
}

function five() {
    var con = "Pakistani";
    alert("Character at index 3 is " + con[3])
}

function six() {
    var fname = prompt("Enter first name");
    var lname = prompt("Enter Last name");
    var name = fname.concat(lname);
    // var name = fname+" "+lname;
    alert("Welcome " + name);
}

function seven() {
    var str = "Hyderabad";
    var rep = str.replace("Hyder", "Islam");
    alert(rep);
}

function o8() {
    var msg = "Ali and Sami are best friends. They play cricket and football together";
    var newMsg = msg.replace(/and/g, "&");
    alert(newMsg);
}

function o9() {
    var str = "472";
    var num = parseInt(str);
    document.write("Value : " + str + "<br>Type : " + typeof str);
    document.write("<br>Value : " + num + "<br>Type : " + typeof num);
}

function o10() {
    var a = prompt("Enter any word");
    var b = a.toUpperCase();
    alert("User input : " + a + "\nUppercase : " + b);
}

function o11() {
    var a = prompt("Enter any word");
    var b = a.toLocaleUpperCase();
    alert("User input : " + a + "\nUppercase : " + b);
}

function o12() {
    var num = 35.36;
    var str = num.toString();
    document.write("Value : " + num + "<br>Type : " + typeof num);
    document.write("<br>Value : " + str + "<br>Type : " + typeof str);
}

function o13() {
    var str = prompt("Enter text");
    var format = "!@,.";
    var inv = "";
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < format.length; j++) {
            if (str[i] == format[j]) {
                inv += format[j];
            }
        }
    }
    if (inv.length != 0) {
        alert("Invalid text, remove " + inv);
    }
}

function o14() {
    var items = ["cake", "apple pie", "chips", "cookies", "coffee"];
    var str = prompt("Enter item you want to search ...");
    str = str.toLowerCase();

    var found = items.indexOf(str);
    if (found >= 0) {
        alert(str + " found at index " + found);

    } else {
        alert("We are sorry " + str + " is not available");
    }
}

function o15() {
    var pass = prompt("Enter pasword");
    var f1 = "1234567890";
    var flag = true;
    if (pass.length >= 6) {
        for (var i = 0; i < f1.length; i++) {
            if (pass[0] == f1[i]) {
                alert("Password sould not start with number");
                break;
            }
        }
    } else {
        alert("Length should be atleast 6");
    }
}

function o16() {
    var uni = "University of Karachi";
    var arr = [];
    arr += uni.split("");
    var i = 0;
    while (i <= arr.length) {
        document.write(arr[i] + "<br>");
        i += 2;
    }
}

function o17() {
    var txt = prompt("Enter txt");
    alert("Text : " + txt + "\nLast character of input : " + txt.charAt(txt.length - 1));
}

function o18() {
    var txt = "The quick brown fox jumps over the lazy dog";
    var a = txt.split(" ");
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i].toLowerCase() == "the") {
            count++;
        }
    }
    alert("'The' appears " + count + " times in the string");
}

//ch 26-30

function two1() {
    var num = +prompt("Enter any number");
    document.write("Number : " + num);
    document.write("<br>Rounf off value : " + Math.round(num));
    document.write("<br>Floor value : " + Math.floor(num));
    document.write("<br>Ceil value : " + Math.ceil(num));
}

function two2() {
    var num = +prompt("Enter any number");
    document.write("Number : " + num);
    document.write("<br>Rounf off value : " + Math.round(num));
    document.write("<br>Floor value : " + Math.floor(num));
    document.write("<br>Ceil value : " + Math.ceil(num));
}

function two3() {
    var num = +prompt("Enter any number");
    document.write("Number : " + num);
    document.write("<br>Absolute value : " + Math.abs(num));
}

function two4() {
    alert("Dice : " + Math.ceil(Math.random() * 6));
}

function two5() {
    var x = Math.round(Math.random());
    if (x != 0) {
        alert("Heads");
    }
    else {
        alert("Tails");
    }
    console.log(x);
}

function two6() {
    var x = Math.round(Math.random() * 100);
    alert("Random number between 1 and 100 : " + x);
}

function two7() {
    var str = prompt("Enter your weight in kg");
    var matches = str.match(/.\d+/g);
    var matche1 = matches.join("");
    alert("Your weight is " + matche1 + " KG");
}

function two8() {
    var x = Math.round(Math.random() * 10);
    var num = +prompt("Guess the number from 1-10");
    if (num == x) {
        alert("your guess is correct");
    } else {
        alert("Failed! Random number was " + x);
    }
}

//ch 31-34

function thr1() {
    alert(Date())
}

function thr2() {
    var date = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    alert(month[date.getMonth()]);
}

function thr3() {
    var d = new Date();
    var day = [];
    day[0] = "Sun";
    day[1] = "Mon";
    day[2] = "Tue";
    day[3] = "Wed";
    day[4] = "Thu";
    day[5] = "Fri";
    day[6] = "Sat";
    var n = day[d.getDay()];
    alert("Today is " + n);
}
function thr4() {
    var d = new Date();
    if (d.getDay() == 0 || d.getDay() == 6) {
        alert("Its fun day");
    } else {
        alert(d.getDay());
    }

}

function thr5() {
    var d = new Date();
    if (d.getDate() < 15) {
        alert("First fifteen days of the month");
    } else {
        alert("Last fifteen days of the month");
    }
}

function thr6() {
    var d = new Date();
    var sec = d.getSeconds();
    alert(sec);
}

function thr7() {
    var d = new Date();
    var time = d.getHours();

    if (time < 12 && time >= 0) {
        alert("Its AM");
    } else {
        alert("Its PM");
    }
}

function thr8() {
    var d = new Date();
    d.setFullYear(2020);
    d.setMonth(11);
    d.setDate(31);
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    alert(d);
}

function thr9() {
    var date1 = new Date("4/24/2020");
    var date2 = new Date("6/20/2020");
    var time = date2.getTime() - date1.getTime();
    var days = time / (1000 * 3600 * 24);
    alert(days + " days have passed since 1st ramdan of 2020");
}

function thr10() {
    var date1 = new Date("11/5/2015");
    date1.setHours(22);
    date1.setMinutes(50);
    date1.setSeconds(16);
    var date2 = new Date();

    var sec = date2.getTime() - date1.getTime();
    alert(sec + " seconds had passed since begninning of 2015");
}

function thr11() {
    var d = new Date();
    var hr = d.getHours();
    hr += 1;
    d.setHours(hr);
    alert("Current time : " + Date() + "\nTime one hour ahead : " + d);
}
function thr12() {
    var d = new Date();
    var year = d.getFullYear();
    year = year - 100;
    d.setFullYear(year);
    alert("Current time : " + Date() + "\nTime 100 years ago : " + d);
}
function thr13() {
    var d = new Date();
    var year = d.getFullYear();
    var dob = +prompt("Enter your age");
    year = year - dob;
    alert("Your birth year is " + year);
}

//ch 35-38

function thr51() {
    document.write(Date());
}
function thr52() {
    var fname = prompt("Enter first name");
    var lname = prompt("Enter Last name");
    var name = fname + " " + lname;
    alert("Welcome " + name);
}

function thr53() {
    var n1 = +prompt("Enter first number");
    var n2 = +prompt("Enter second number");
    alert("Sum : " + (n1 + n2));
}

function cal(x, y, o) {
    switch (o) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            return x / y;
            break;
        case '%':
            return x % y;
            break;
        default:
            var a = "Invalid operator"
            return a;
            break;
    }
}
function thr54() {
    var n1 = +prompt("Enter first number");
    var n2 = +prompt("Enter second number");
    var o = prompt("Enter operator");
    var result = cal(n1, n2, o);
    alert(result);
}

function square(x) {
    return x * x;
}
function thr55() {
    var n1 = +prompt("Enter number");
    alert("Square : " + square(n1));
}

function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function thr56() {
    alert(factorial(5));
}

function thr57() {
    var n1 = +prompt("Enter first number");
    var n2 = +prompt("Enter last number");
    if (n1 <= n2) {
        for (var i = n1; i <= n2; i++) {
            document.write(i + "<br>");
        }
    } else {
        alert("invaid input");
    }
}
function hep(x, y) {
    return (square(x) + square(y));
}
function thr58() {
    var b = +prompt("Enter base");
    var p = +prompt("Enter perpendicular");
    alert("Hypotenuse^2 = " + hep(b, p));
}

function area(w, h) {
    return (w * h);
}

function thr59() {
    var n1 = +prompt("Enter width");
    var n2 = +prompt("Enter height");
    alert("Argument as variables: Area = " + area(n1, n2));
    alert("Argument as values: Area = " + area(5, 5));
}
function pali(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
function thr510() {
    var str = prompt("Enter text");
    if (pali(str)) {
        alert(str + " is palindrome");
    } else {
        alert(str + "  is not palindrome");
    }
}

function upr(str) {
    var astr = str.split(" ");
    for (var i = 0; i < astr.length; i++) {
        astr[i][0] = astr[i][0].toUpperCase();
        console.log(astr[i][0]);
    }
    console.log(astr1);
}

function thr511() {
    upr("Hello world");
}

function long(str) {
    var astr = str.split(" ");
    console.log(astr);
    var longest = astr[0];
    for (var i = 0; i < astr.length; i++) {
        for (var j = 0; j < astr.length; j++) {
            if (longest.length < astr[j].length) {
                longest = astr[j];
            }
        }
    }
    return longest;
}

function thr512() {
    alert(long("Web Development Tutorial"));
}

function occ(str, c) {
    str = str.toLowerCase();
    c = c.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == c) {
            count++;
        }
    }
    return count;
}

function thr513() {
    str = "Web Development Tutorial";
    var count = occ(str, 'e');
    alert(str + " contain " + count + " e");
}

function calcCircumference(r) {
    return (2*3.14)*r
 }
function calcArea(r) {
    return 3.14*(square(r));
}

function thr514(){
    var r = +prompt("Enter radius");
    document.write("Circumfarance : " +calcCircumference(r) );
    document.write("<br>Area: " +calcArea(r) ); 

}