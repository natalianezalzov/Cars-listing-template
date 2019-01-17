document.getElementById("id01").innerHTML="#1 VAZ 2101";
document.getElementById("id02").innerHTML="#2 VAZ 2102";
document.getElementById("id03").innerHTML="#3 VAZ 2103";
document.getElementById("id04").innerHTML="#4 VAZ 2104";
document.getElementById("id05").innerHTML="#5 VAZ 2105";
document.getElementById("id06").innerHTML="#6 VAZ 2106";
document.getElementById("id07").innerHTML="#7 VAZ 2107";
document.getElementById("id08").innerHTML="#8 VAZ 2108";
document.getElementById("id09").innerHTML="#9 VAZ 2109";

document.body.classList.add('text-secondary');

var myClass = document.getElementsByClassName('card-title'); 
for (i = 0; i < myClass.length; i++) { 
  myClass[i].style.color = 'dimgray'; 
}

var num = document.querySelectorAll('.myQueryAll').length;
console.log(num);











