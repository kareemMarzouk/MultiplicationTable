  function c2t() {
            
            var number = document.forms.mT.num.value;
            var string = "<tr><th>" + number + " times tables</th></tr>";
            
            for (i = 1; i <= 10; i++)
            {
                string += "<tr><td>";
                string += number + " x " + i + " = " + (i * number) + "\n";
                string += "</td></tr>";
            }
            document.getElementById("table").innerHTML = string;
            return false;
        }