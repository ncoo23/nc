// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****


let pattern = "";
for (let i = 1; i <= 10; i++ ){
    for (let j = 1; j <= i; j++){
        pattern += "*"
    }
    pattern += "\n";
}
console.log(pattern);