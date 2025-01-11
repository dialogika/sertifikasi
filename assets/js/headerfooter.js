// Header
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  <!-- ======= Top Bar ======= -->
  <div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-between">
      <div class="contact-info d-flex align-items-center">
        <button type="button" class="btn btn-primary" onclick="location.href = 'https://www.dialogika.co/en';">
          Click Here for English Version
        </button>
        
      </div>
      <div class="d-none d-lg-flex social-links align-items-center">
        <a href="https://link.dialogika.co/twitter" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://link.dialogika.co/facebook" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://link.dialogika.co/instagram" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://link.dialogika.co/linkedin" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
      </div>
    </div>
  </div>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

       <a href="../index.html" class="logo me-auto"><img src="assets/img/logo.webp" alt="" class="img-fluid"></a>

       <nav id="navbar" class="navbar order-last order-lg-0">
        <ul class="navbar-desktop-list">
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#testimonials">Testimony</a></li>
          <li><a class="nav-link scrollto" href="#kompetensi">Kompetensi</a></li>
          <li><a class="nav-link scrollto" href="#benefit">Benefit</a></li>
          <li><a class="nav-link scrollto" href="#details">Jadwal</a></li>
          <li><a class="nav-link scrollto" href="#investasi">Investasi</a></li>
        </ul>
        <i class="bi bi-list d-block d-md-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"></i>
       </nav><!-- .navbar -->
       

      <a href="#contact" class="appointment-btn">Daftar <span class="d-none d-md-inline">Sekarang</span></a>

    </div>
  </header><!-- End Header -->

  <!-- ======= Mobile Nav ======= -->
  <nav class="navbar-canvas fixed-top">
    <div class="container-fluid">
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <a href="../index.html">
            <img src="assets/img/logo.webp" class="offcanvas-title" id="offcanvasNavbarLabel"/>
          </a>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <a href="#hero"><div class="card"><div class="card-body">Home</div></div></a>
          <a href="#testimonials"><div class="card card-body">Testimony</div></a>
          <a href="#kompetensi"><div class="card card-body">Kompetensi</div></a>
          <a href="#benefit"><div class="card card-body">Benefit</div></a>
          <a href="#details"><div class="card card-body">Jadwal</div></a>
          <a href="#investasi"><div class="card card-body">Investasi</div></a>
        </div>
      </div>
    </div>
  </nav><!-- End Mobile Nav -->

    `;
  }
}

//Footer
class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
  
  <!-- ======= Footer ======= -->
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row justify-content-between">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3><img src="assets/img/white-logo.webp" class="footer-logo" alt="Kelas Public Speaking Jogja" /></h3>
            <p>
              Wadah pengembangan diri membangun aura positif sekaligus meningkatkan kualitas skill, karir hingga level
              kehidupan Anda.
            </p><br>
            <p>Kami memberikan pelatihan Kelas Public Speaking karena dengan menguasai Public Speaking, mental,
              perilaku, penampilan hingga sikap Anda terbentuk.</p><br>
            <h4 class="d-flex justify-content-between">Contact Us<i class='bx bx-chevron-down d-md-none'></i></h4>
            <div class="social-link d-flex mt-3">
              <a href="https://wa.link/ms2gko"
                class="text-light d-flex align-items-center justify-content-center"><i class="bx bxl-whatsapp"></i></a>
              <a href="mailto:hello@dialogika.co" class="d-flex align-items-center justify-content-center"><i
                  class="bi bi-envelope-at-fill"></i></a>
            </div>
            <hr />
            <p>Punya pertanyaan mengenai Dialogika?</p>
            <br>
            <p>
              <strong>Phone:</strong> +62 857-8000-7799<br>
              <strong>Phone:</strong> +62 851-6299-2597<br>
              <strong>Email:</strong> hello@dialogika.co<br>
            </p>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4 class="d-flex justify-content-between">Join Whatsapp Group Community<i
                class='bx bx-chevron-down d-md-none'></i></h4>
            <p>Secara Berkala Kami Akan Bagi-Bagi Tips & Trik Gratis, Dan Info Promo Lainnya</p>
            <form action="javascript:void" role="form" id="subcriptions" method="post">
              <input type="tel" name="Surel" class="custom-input-footer" placeholder="Join Our Class Group" disabled>
              <button type="button" data-bs-toggle="modal" data-bs-target="#footerSubModal" class="blue-dialogika-btn footerSubBtn">Gabung</button>
            </form>
            <br><br>
            <h4 class="d-flex justify-content-between">Payment Method<i class='bx bx-chevron-down d-md-none'></i></h4>
            <p><i class="bx bx-chevron-down"></i> Bank Transfer</p>
            <img src="assets/img/bank.webp" style="width:100%;" />
            <br><br>
            <p><i class="bx bx-chevron-down"></i> E-Wallet</p>
            <img src="assets/img/wallet.webp" style="width:100%;" />

            <ul class="list-group border-warning" style="background: transparent;">
              <li class="list-group-item">
                <b>Telah Terdaftar Oleh</b><br>
                <img src="assets/img/ham.webp" class="" /><br>
                <strong>Nomor:</strong> AHU-0118640.AH.01.11.TAHUN 2022<br>
                <strong>Registrasi: </strong>4022062334106037<br />
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>Dialogika</span></strong> | PT. Dialogika Persona Indonesia
        </div>

      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="https://link.dialogika.co/twitter" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://link.dialogika.co/facebook" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://link.dialogika.co/instagram" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://wa.link/ms2gko" class="google-plus"><i
            class="bx bxl-whatsapp"></i></a>
        <a href="https://link.dialogika.co/linkedin" class="linkedin"><i class="bx bxl-linkedin"></i></i></a>
      </div>
    </div>
  </footer><!-- End Footer -->

    `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
