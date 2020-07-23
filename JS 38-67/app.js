//38-24

//q1

function one() {
    var a = +prompt("Enter number");
    var b = +prompt("Enter power");
    var ans = 1;
    for (i = 0; i < b; i++) {
        ans = ans * a;
    }
    alert(a + "^" + b + " = " + ans);
}

//q2

function two() {
    var a = prompt("Enter the year");
    a = a.slice(2);
    if (a % 4 == 0) {
        alert("It is a leap year");
    }
    else {
        alert("It is not a leap year");
    }
}

//q3

function S(a, b, c) {
    return ((a + b + c) / 2);
}
function three() {
    var a = +prompt("enter length of first side");
    var b = +prompt("enter length of second side");
    var c = +prompt("enter length of third side");
    var s = S(a, b, c);
    area = s * ((s - a) * (s - b) * (s - c));
    alert("Area of triangle = " + area);

}

//q4

function four() {
    var a = +prompt("enter marks of 1st subject");
    var b = +prompt("enter marks of 2nd subject");
    var c = +prompt("enter marks of 3rd subject");
    alert("Your avg marks are " + Math.round(avg(a, c, b)));
    alert("Your percentage is " + Math.round(per(a, c, b)));

}

function avg(a, b, c) {
    return ((a + b + c) / 3);
}

function per(a, b, c) {
    return ((a + b + c) / 300) * 100;
}

//q5

function five() {
    var str = prompt("Enter string");
    var ind = prompt("Enter a character to find its index");
    var found = false;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ind) {
            alert("Index of " + ind + " = " + i);
            found = true;
        }
    }
    if (found = false) {
        alert("Character not found in string")
    }
}

//q6

function six() {
    var str = prompt("Enter string");
    var str2 = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u') {
            str2 += str[i];
        }
    }
    alert(str2);
}

//q8

function o8() {
    var dis = +prompt("Enter distance in KM");
    alert(meter(dis) + " meters");
    alert(feet(dis) + " ft");
    alert(inches(dis) + " in");
    alert(cm(dis) + " cm");

}

function meter(a) {
    return a * 1000;
}

function feet(a) {
    return a * 3281;
}
function inches(a) {
    return a * 39370;
}

function cm(a) {
    return a * 100000;
}

//q9

function o9() {
    var a = +prompt("enter total working hours");
    if (a > 40) {
        var over = a - 40;
        alert("Your overtime pay is " + over * 12);
    }
    else {
        alert("You didnt work overtime")
    }
}

//10

function o10() {
    var a = +prompt("enter amount");
    var hund = 0;
    var fifty = 0;
    var ten = 0;
    while (a >= 100) {
        hund++;
        a = a - 100;
    }
    while (a >= 50) {
        fifty++;
        a = a - 50;
    }
    while (a >= 10) {
        ten++;
        a = a - 10;
    }
    alert(hund + " 100 note, " + fifty + " 50 note, " + ten + " 10 note");
}


//ch 43-48
//q1

function two1() {
    alert("You clicked th link")
}

//q2
function two2() {
    alert("Thank you for purchasing this phone")
}

//q3

function two3(a) {
    var td = a.parentNode;
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

//q4 in student .html

//q5
function inc() {
    var a = document.getElementById('text').value;
    a = parseInt(a);
    a++;
    document.getElementById('text').value = a;
}
function dec() {
    var a = document.getElementById('text').value;
    a = parseInt(a);
    a--;
    document.getElementById('text').value = a;
}


// ch 49-52


function thr1() {
    var fullname = document.getElementById('name').value + " " + document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;
    document.write("<h1>Full Name : " + fullname + "<br>Email : " + email + "<br>Country : " + country + "</h1>");
}

function thr2() {
    var data = document.getElementById('read')
    data.innerHTML += " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quod dolorem eveniet eius consectetur quasi, autem exercitationem perferendis obcaecati expedita, porro blanditiis repellat esse. Velit quidem autem ratione consequuntur nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum esse magnam quis earum, rem deleniti totam dolore doloremque provident nesciunt, sed a! Eos ullam magni voluptates dolores accusamus facere?"
    document.getElementById('more').style.display = 'none';
}

//ch 58-67
function last1() {
    var main_contant = document.getElementById('main-content');
    document.write(main_contant.outerHTML);
}
function last3() {
    var render = document.getElementsByClassName('render');
    var len = render.length;
    var html = "";
    for (var i = 0; i < len; i++) {
        html += (render[i].innerHTML + "<br>");

    }
    document.write(html);
}
function last4() {
    var first_name = document.getElementById('first-name');
    first_name.value = "hashir";
}
function last5() {
    document.getElementById('last-name').value = "Siddiqui";
    document.getElementById('email').value = "hashirsid.1@gmail.com";

}

//q2

function last6() {
    var node_type = document.getElementById('form-content');
    document.writeln(node_type.nodeType);
}
function last7() {
    var node = document.getElementById('lastName');
    document.writeln(node.nodeType);
    document.writeln(node.firstChild.nodeType)
}
function last8() {
    var node = document.getElementById('lastName');
    // document.writeln(node.nodeType);
    node.firstChild.nodeValue = "hello";
}
function last9() {
    var node = document.getElementById('main-content');
    document.writeln(node.firstChild.innerHTML );
    document.writeln(node.lastChild.innerHTML);
}
function last10() {
    var node = document.getElementById('lastName');
    document.writeln(node.previousSibling.innerHTML );
    document.writeln(node.nextSibling.innerHTML);
}
function last11() {
    var node = document.getElementById('email');
    document.writeln(node.parentNode.innerHTML);
    document.writeln(node.nodeType);
}