const namav = "Muhammad Mikail Musa";
const emailv = "mikailmusa28@gmail.com";
const jamv = "13:00";
const tujuanv = "Jeddah";
const jumlahv = 2;

function validasi() {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let jam = document.getElementById("jam").value;
  let tujuan = document.getElementById("tujuan").value;
  let jumlah = document.getElementById("jumlah").value;
  let hasil = document.getElementById("hasil");

  if (
    nama == namav &&
    email == emailv &&
    jam == jamv &&
    tujuan == tujuanv &&
    jumlah == jumlahv
  ) {
    hasil.innerHTML = `<hr />
    <div
      class="card mt-5 p-3"
      style="margin: auto; width: 40%; margin-bottom: 200px"
    >
      <h3 class="text-center text-primary">Tiket Valid</h3>
      <p>Nama : ${namav}</p>
      <p>Email : ${emailv}</p>
      <p>Jam Keberangakatan : ${jamv}</p>
      <p>Tujuan Keberangakatan : ${tujuanv}</p>
      <p>Jumlah Tiket : ${jumlahv} Tiket</p>
    </div>`;
    document.getElementById("nama_error").innerText = ``;
    document.getElementById("email_error").innerText = ``;
    document.getElementById("jam_error").innerText = ``;
    document.getElementById("tujuan_error").innerText = ``;
    document.getElementById("jumlah_error").innerText = ``;
  } else {
    if (nama != namav) {
      document.getElementById(
        "nama_error"
      ).innerText = `Nama harus diisi dengan nama yang benar`;
    }
    if (email != emailv) {
      document.getElementById(
        "email_error"
      ).innerText = `Email harus diisi dengan email yang benar`;
    } else {
      document.getElementById("email_error").innerText = ``;
    }
    if (jam != jamv) {
      document.getElementById(
        "jam_error"
      ).innerText = `Jam harus diisi dengan jam yang benar`;
    } else {
      document.getElementById("jam_error").innerText = ``;
    }
    if (tujuan != tujuanv) {
      document.getElementById(
        "tujuan_error"
      ).innerText = `Tujuan harus diisi dengan tujuan yang benar`;
    } else {
      document.getElementById("tujuan_error").innerText = ``;
    }
    if (jumlah != jumlahv) {
      document.getElementById(
        "jumlah_error"
      ).innerText = `Jumlah harus diisi dengan jumlah yang benar`;
    } else {
      document.getElementById("jumlah_error").innerText = ``;
    }
  }
}
