// Callback = function yang kita kasih ke function lain untuk dijalankan nanti.

function sapa(nama, callback) {
    console.log('Halo ' + nama);

    callback();
}

// adalah callback.
// Kita memberikan function tersebut kepada sapa():
sapa('Budi', function () {
    console.log('Selesai');
});

// callback Async
setTimeout(
    // adalah callback.
    () => {
        console.log('Sudah 2 detik');
    },
    2000,
);

// //! Masalah Callback / callbackhell
// ambilUser((user) => {
//   ambilPesanan(user, (pesanan) => {
//     ambilProduk(pesanan, (produk) => {
//       ambilHarga(produk, (harga) => {
//         console.log(harga);
//       });
//     });
//   });
// });
