function say_hello()
    {
        var name = document.getElementById("name").value;
        document.getElementById("Welcome").innerHTML = "Hola, " + name + "";
        if (name.length < 1)
            {
                document.getElementById("Welcome").innerHTML = "Hola";
            }
    }

function correcta()
    {
        var ans1 = document.getElementById("q1_ans1").name;
        document.getElementById("msg1").innerHTML = ans1;
    }

function incorrecta()
    {
        var ans2 = document.getElementById("q1_ans2").name;
        document.getElementById("msg2").innerHTML = ans2;
    }

    function incorrecta1()
    {
        var ans3 = document.getElementById("q2_ans1").name;
        document.getElementById("msg3").innerHTML = ans3;
    }

function correcta1()
    {
        var ans4 = document.getElementById("q2_ans2").name;
        document.getElementById("msg4").innerHTML = ans4;
    }

function incorrecta2()
    {
        var ans5 = document.getElementById("q2_ans3").name;
        document.getElementById("msg5").innerHTML = ans5;
    }

function correcta2()
    {
        var ans6 = document.getElementById("q3_ans1").name;
        document.getElementById("msg6").innerHTML = ans6;
    }

function incorrecta3()
    {
        var ans7 = document.getElementById("q3_ans2").name;
        document.getElementById("msg7").innerHTML = ans7;
    }

function incorrecta4()
    {
        var ans8 = document.getElementById("q4_ans1").name;
        document.getElementById("msg8").innerHTML = ans8;
    }

function correcta3()
    {
        var ans9 = document.getElementById("q4_ans2").name;
        document.getElementById("msg9").innerHTML = ans9;
    }

function incorrecta5()
    {
        var ans10 = document.getElementById("q5_ans1").name;
        document.getElementById("msg10").innerHTML = ans10;
    }

function correcta4()
    {
        var ans11 = document.getElementById("q5_ans2").name;
        document.getElementById("msg11").innerHTML = ans11;
    }

function incorrecta6()
    {
        var ans12 = document.getElementById("q6_ans1").name;
        document.getElementById("msg12").innerHTML = ans12;
    }

function incorrecta7()
    {
        var ans13 = document.getElementById("q6_ans2").name;
        document.getElementById("msg13").innerHTML = ans13;
    }

function correcta5()
    {
        var ans14 = document.getElementById("q6_ans3").name;
        document.getElementById("msg14").innerHTML = ans14;
    }

function incorrecta8()
    {
        var ans15 = document.getElementById("q7_ans1").name;
        document.getElementById("msg15").innerHTML = ans15;
    }

function correcta6()
    {
        var ans16 = document.getElementById("q7_ans2").name;
        document.getElementById("msg16").innerHTML = ans16;
    }

function incorrecta9()
    {
        var ans17 = document.getElementById("q7_ans3").name;
        document.getElementById("msg17").innerHTML = ans17;
    }

function incorrecta10()
    {
        var ans18 = document.getElementById("q8_ans1").name;
        document.getElementById("msg18").innerHTML = ans18;
    }

function correcta7()
    {
        var ans19 = document.getElementById("q8_ans2").name;
        document.getElementById("msg19").innerHTML = ans19;
    }

function incorrecta11()
    {
        var ans20 = document.getElementById("q8_ans3").name;
        document.getElementById("msg20").innerHTML = ans20;
    }

function incorrecta12()
    {
        var ans21 = document.getElementById("q9_ans1").name;
        document.getElementById("msg21").innerHTML = ans21;
    }

function incorrecta13()
    {
        var ans22 = document.getElementById("q9_ans2").name;
        document.getElementById("msg22").innerHTML = ans22;
    }

function correcta8()
    {
        var ans23 = document.getElementById("q9_ans3").name;
        document.getElementById("msg23").innerHTML = ans23;
    }

function incorrecta14()
    {
        var ans24 = document.getElementById("q10_ans1").name;
        document.getElementById("msg24").innerHTML = ans24;
    }

function correcta9()
    {
        var ans25 = document.getElementById("q10_ans2").name;
        document.getElementById("msg25").innerHTML = ans25;
    }

function incorrecta15()
    {
        var ans26 = document.getElementById("q10_ans3").name;
        document.getElementById("msg26").innerHTML = ans26;
    }

function incorrecta16()
    {
        var ans27 = document.getElementById("q11_ans1").name;
        document.getElementById("msg27").innerHTML = ans27;
    }

function incorrecta17()
    {
        var ans28 = document.getElementById("q11_ans2").name;
        document.getElementById("msg28").innerHTML = ans28;
    }

function correcta10()
    {
        var ans29 = document.getElementById("q11_ans3").name;
        document.getElementById("msg29").innerHTML = ans29;
    }

function incorrecta18()
    {
        var ans30 = document.getElementById("q12_ans1").name;
        document.getElementById("msg30").innerHTML = ans30;
    }

function correcta11()
    {
        var ans31 = document.getElementById("q12_ans2").name;
        document.getElementById("msg31").innerHTML = ans31;
    }

function incorrecta19()
    {
        var ans32 = document.getElementById("q12_ans3").name;
        document.getElementById("msg32").innerHTML = ans32;
    }

function correcta12()
    {
        var ans33 = document.getElementById("q13_ans1").name;
        document.getElementById("msg33").innerHTML = ans33;
    }

function incorrecta20()
    {
        var ans34 = document.getElementById("q13_ans2").name;
        document.getElementById("msg34").innerHTML = ans34;
    }

function incorrecta21()
    {
        var ans35 = document.getElementById("q13_ans3").name;
        document.getElementById("msg35").innerHTML = ans35;
    }

function incorrecta22()
    {
        var ans36 = document.getElementById("q14_ans1").name;
        document.getElementById("msg36").innerHTML = ans36;
    }

function correcta13()
    {
        var ans37 = document.getElementById("q14_ans2").name;
        document.getElementById("msg37").innerHTML = ans37;
    }

function incorrecta23()
    {
        var ans38 = document.getElementById("q14_ans3").name;
        document.getElementById("msg38").innerHTML = ans38;
    }


var map = L.map('map',{ center: [40.418889, -3.691944], zoom: 6, maxBounds: [[39.53,-13.09],[40,6.24]], minZoom: 5, maxZoom: 7 }); L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

var map2 = L.map('map',{ center: [], zoom: 6, maxBounds: [], minZoom: 5, maxZoom: 7 }); L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }).addTo(map2);

