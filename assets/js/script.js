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