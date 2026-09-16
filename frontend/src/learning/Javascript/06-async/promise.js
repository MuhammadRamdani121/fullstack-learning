/* eslint-disable no-undef */
// Promise Memperbaiki Callback Hell
// ambilUser()
//   .then((user) => {
//     return ambilPesanan(user);
//   })
//   .then((pesanan) => {
//     return ambilProduk(pesanan);
//   })
//   .then((produk) => {
//     return ambilHarga(produk);
//   })
//   .then((harga) => {
//     console.log(harga);
//   });

// Promise dengan ASYNC
// eslint-disable-next-line no-unused-vars
async function main() {
    const user = await ambilUser();

    const pesanan = await ambilPesanan(user);
    const produk = await ambilProduk(pesanan);
    const harga = await ambilHarga(produk);

    console.log(harga);
}
