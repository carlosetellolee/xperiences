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

var map = L.map('map',{ center: [40.418889, -3.691944], zoom: 6, maxBounds: [[39.53,-13.09],[40,6.24]], minZoom: 5, maxZoom: 7 }); L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);