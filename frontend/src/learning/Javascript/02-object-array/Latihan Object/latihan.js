// !soal 1 Membuat object yang mempunyai property.
const product = {
    id: 1,
    nama: 'ramdani',
    umur: 19,
    mahasiswaAktif: true,
};
// !1.Tampilkan object menggunakan console.log();
console.log(product);

//!2.Ambil 2 Property menggunakan dot notation
console.log(product.id, product.nama);

// !3.Ubah Salah Satu Property
product.role = 'admin';


console.log(product);
