/*Rata-Rata Ujian*/
var ujiantulis1= document.getElementById("tulisuts");
var ujiantulis2 = document.getElementById("tulisuas");
var ujianpraktek = document.getElementById("praktek");
var hasilujian  = document.getElementById("nilaiujian");
var rataujiantulis = document.getElementById("rata_ujian_tulis");

var tulisuts = 80;
var tulisuas = 90;
var praktek = 70;
var rata_ujian_tulis = (tulisuts + tulisuas) / 2;
var nilaiujian = ((tulisuts + tulisuas) + praktek) / 3;

ujianpraktek.innerHTML = + praktek;
hasilujian.innerHTML = "" + nilaiujian;
rataujiantulis.innerHTML = + rata_ujian_tulis;

/*Nilai TOEFL*/
var nilaitoefl= document.getElementById("toefl");
var scoretoefl= document.getElementById("toefl1");
var toefl = 500;
var toefl1 = 500;


if(toefl >= 500){
 nilaitoefl.innerHTML = "100";
}
else if(toefl > 450){
  nilaitoefl.innerHTML = "80";
}
else if(toefl < 450){
  nilaitoefl.innerHTML = "50";
}

scoretoefl.innerHTML = "" + toefl1;

/*Status Beasiswa*/
var statusbeasiswa= document.getElementById("beasiswa");

var nilaitoefl = 100;
var beasiswa = (nilaiujian + nilaitoefl) / 2;

var statusbsw= document.getElementById("nilai");

var nilai= 100 
if(nilai >= 90){
 statusbsw.innerHTML = "LULUS";
}
else if(nilai < 85){
  statusbsw.innerHTML = "TIDAK LULUS";
}
statusbeasiswa.innerHTML = + beasiswa;