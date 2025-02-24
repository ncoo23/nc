let tanggal = 12
let bulan = "februari";
let tahun = 2001

   switch (tanggal){
     case 12:console.log(12);break;
     case 13:console.log(13);break;
     case 2:console.log(2);break;
     default:console.log("tidak ada")
   }
   switch (bulan){
    case "februari":console.log("februari");break;
    case "mei":console.log("mei");break;
    case "juni":console.log("juni");break;
    default:console.log("tidak ada")
  }

  switch (tahun){
    case 2002:console.log(2002);break;
    case 1990:console.log(1990);break;
    case 2001:console.log(2001);break;
    default:console.log("tidak ada")
  }

if ("tanggal, bulan, tahun"){
    console.log(`${tanggal},${bulan},${tahun}`)
}