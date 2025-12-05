// highlight active nav link based on file name
(function setActiveNav(){
    const links = document.querySelectorAll('.navbar a');
    const path = location.pathname.split('/').pop() || 'website.html';
    links.forEach(a => {
      const href = a.getAttribute('href');
      if (href === path || (href === 'website.html' && path === '')) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  })();
 
  // Search/filter for kelas page
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    if (!searchInput) return;
  
    const container = document.getElementById('kelasContainer');
    const cards = Array.from(container.querySelectorAll('.kelas-card'));
    
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        cards.forEach(c => c.style.display = '');
        return;
      }
      cards.forEach(card => {
        const keywords = (card.dataset.keywords || card.textContent).toLowerCase();
        if (keywords.includes(q)) card.style.display = '';
        else card.style.display = 'none';
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {

  function cariKelas() {
    const q = document.getElementById("searchInput").value.toLowerCase().trim();

    if (q.includes("kelas x") || q === "x") {
      window.location.href = "kelas.html#kelas X";
    }
    else if (q.includes("kelas xi") || q === "xi") {
      window.location.href = "kelas.html#kelas XI";
    }
    else if (q.includes("kelas xii ips") || q.includes("xii ips")) {
      window.location.href = "kelas.html#kelas XII IPS";
    }
    else if (q.includes("lab") || q.includes("laboratorium")) {
      window.location.href = "kelas.html#lab";
    }
    else {
      alert("Kelas tidak ditemukan! Coba ketik: kelas X, kelas XI, kelas XII IPS.");
    }
  }

  document.getElementById("searchBtn")?.addEventListener("click", cariKelas);

  document.getElementById("searchInput")?.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      cariKelas();
    }
  });
});
