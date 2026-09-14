// const = variabel yg tidak bisa di-reassign
const nama = 'Ramdani';

// !Jika Dipaksakan Reassign akan error
// nama = 'ramdani';//error

// Let = variabel yang bisa di-reassign
// eslint-disable-next-line no-useless-assignment
let umur = 12;
umur = 20;
// Tapi jika memakai let dengan variabel yg sama juga akan eror ada Let
// let umur = 20; //error

// Memanggil variabel nama
console.log(nama);
console.log(umur);
