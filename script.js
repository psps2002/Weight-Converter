document.addEventListener('DOMContentLoaded', function() {    
    document.getElementById('outputs').style.visibility='hidden';
    document.getElementById('grams').addEventListener("input", function(e) {
        document.getElementById('outputs').style.visibility='visible';
        let gram = e.target.value;
        document.getElementById('pounds').innerHTML = gram/453.59237 ;
        document.getElementById('ounces').innerHTML = gram/28.34952 ;
        document.getElementById('kgs').innerHTML = gram/1000 ;
    });
});

    