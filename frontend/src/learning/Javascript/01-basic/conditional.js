const age = 20;
// If else
if (age >= 18) {
  console.log("Dewasa");
} else {
  console.log("Belum dewasa");
}
// Ternary
const message = age >= 18 ? "Dewasa" : "Belum dewasa";
console.log(message);

// Switch
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Senin");
    break;

  case "Tuesday":
    console.log("Selasa");
    break;

  default:
    console.log("Hari lainnya");
}
