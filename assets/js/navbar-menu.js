const navmenu = [
  {
    title: "Beranda",
    href: "index.html",
  },
  {
    title: "Profil Sekolah",
    href: "profilsekolah.html",
  },
  {
    title: "Tujuan Web",
    href: "tujuan.html",
  },
  {
    title: "Profil Pembuat",
    href: "profilpembuat.html",
  },
  {
    title: "Absensi & Evaluasi",
    href: "kelas-evaluasi.html",
  },
  {
    title: "Materi & Quis",
    href: "materi_quies.html",
  },
  {
    title: "Sosial Media",
    href: "sosial-media.html",
  }
];

const navMenuComponent = document.getElementById("navbar-component")

navMenuComponent.innerHTML =`  <div class="navbar">
    <div class="navbar-left">
      <img src="assets/images/LOGO.png" class="logo-img" alt="Logo Sekolah">
      <span class="logo-text">WEB PEMBELAJARAN</span>
    </div>


    <ul class="navbar-menu">
    ${navmenu.map(menu => `
  <li><a href="${menu.href}">${menu.title}
  </a>
  </li>
`).join("")}
    
    </ul>
  </div>`





