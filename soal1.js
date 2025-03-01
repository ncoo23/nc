let nama = "ncovalkon";
let peran = "ksatria"

console.log(`halo, ${peran}, ${nama}.`);

if (peran == "ksatria") {
    console.log(`Halo, ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran == "tabib") {
    console.log(`Halo, ${nama}, kamu akan membantu temanmu yang terluka.`);
} else if (peran == "penyihir") {
    console.log (`Halo, ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
    console.log("Tapi kamu jadi bot aja ya, kamu gak milih peran soalnya!");
}