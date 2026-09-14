// function sapa = (nama)=>{return nama}

const sapa = (nama) => {
  return `hallo ` + nama;
};

console.log(sapa('Ramdani'));

// const tambah = (a, b) => {
//   return a + b;
// };

// versi lebih pendek
const tambah = (a, b) => a + b;

const hasil = tambah(10, 20);

console.log(hasil);

const kali = (a, b) => {
  return a * b;
};

const hasilPerkalian = kali(5, 4);
console.log(hasilPerkalian);
