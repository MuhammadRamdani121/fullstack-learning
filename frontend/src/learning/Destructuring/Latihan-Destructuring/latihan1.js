// !soal 1 membuat destructuring Object

// Membuat Object
const user = {
    nama: 'Ramdani',
    umur: 17,
    role: 'admin',
};
// Membuat destructuring object
const { nama, umur, role } = user;
// Memanggil desturucturing object
console.log(nama, umur, role);

// !soal 2 Membuat Destruccturing Array
// Membuat Array
const buah = [
    'apel',
    'mangga',
    'jeruk',
];
// Membuat destructuring Array
const [pertama, kedua, ketiga] = buah;

// Memanggil destructuring Array
console.log(pertama);
console.log(kedua);
console.log(ketiga);
