var a,b,c,d,e,sum

function handleclick1(question1) {
    a = Number(question1.value);
}
function handleclick2(question2) {
    b = Number(question2.value);
}
function handleclick3(question3) {
    c = Number(question3.value);
}
function handleclick4(question4) {
    d = Number(question4.value);
}
function handleclick5(question5) {
    e = Number(question5.value);
}
function add()
{
    sum=a+b+c+d+e
    document.getElementById('score').innerHTML = sum
    if (sum>=50&&sum<75){
        document.getElementById('result').innerHTML = "Your artist is 'The weekend'.I know time will tell if we are meant for this."
    }
    else if (sum>=75&&sum<100){
        document.getElementById('result').innerHTML = "Your artist is 'BTS'.Jhingeyokhae Ban! Tan! So! Nyeon! Dan!"
    }
    else if (sum>=100&&sum<125){
        document.getElementById('result').innerHTML = "Your artist is 'Shawn Mendez'. Ooh laalalaa!! It's true laalalaa"
    }
    else if (sum>=125&&sum<150){
        document.getElementById('result').innerHTML = "Your artist is 'Michael Jackson'. Hee he hee"
    }
    else if (sum>=150&&sum<175){
        document.getElementById('result').innerHTML = "Your artist is 'Camila Cabello'. Time to go Havana oh naa naa!"
    }
    else if (sum>=175&&sum<200){
        document.getElementById('result').innerHTML = "Your artist is 'Badshah'. OH! ladki beautiful! Kar gayi chul!!"
    }
    else if (sum>=200&&sum<225){
        document.getElementById('result').innerHTML = "Your artist is 'Eminem'. I'm beginning to feel like a RAP GOD!! RAP GOD!!"
    }
    else if (sum>=225&&sum<250){
        document.getElementById('result').innerHTML = "Your artist is 'Blackpink'. How you like THAT?!!"
    }
    else if (sum=250){
        document.getElementById('result').innerHTML = "Your artist is 'GP Muthu'. NAKKU!! Chetha payale!!"
    }
}