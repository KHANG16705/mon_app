import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-fade-in" id="page-home">
      <div className="container">
        {/* Requirement Highlight Box */}
        <div className="requirement-banner" id="home-requirement-box">
          <div className="requirement-tag">
            <span>📌</span> Yêu cầu đề bài (Trang chủ /)
          </div>
          <div className="required-text-box">
            <span className="quote-icon">“</span>
            <h1 className="required-exact-text" id="home-required-heading">
              Chào mừng đến với PTIT!
            </h1>
          </div>
          <p className="requirement-note">
            Đường dẫn hiện tại: <code>/</code> | Component: <code>Home.jsx</code>
          </p>
        </div>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-pill">
            <span>🎓</span> Học viện Công nghệ Bưu chính Viễn thông
          </div>
          <h2 className="hero-title">
            Khám phá Tri thức & Công nghệ tại <span>PTIT</span>
          </h2>
          <p className="hero-desc">
            Trường đại học trọng điểm quốc gia tiên phong trong lĩnh vực Công nghệ thông tin,
            Truyền thông và Kinh tế số tại Việt Nam.
          </p>

          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary" id="btn-explore-about">
              <span>Tìm hiểu về Học viện</span>
              <span>→</span>
            </Link>
            <Link to="/contact" className="btn btn-outline" id="btn-explore-contact">
              <span>Liên hệ chúng tôi</span>
              <span>✉️</span>
            </Link>
          </div>
        </section>

        {/* Quick Stats Banner */}
        <div className="stats-banner" id="home-stats-banner">
          <div className="stat-item">
            <div className="stat-number">#1</div>
            <div className="stat-label">Tiên phong ICT</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25.000+</div>
            <div className="stat-label">Sinh viên & Học viên</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Tỷ lệ có việc làm</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">Cơ sở Hà Nội & TP.HCM</div>
          </div>
        </div>

        {/* Features / Quick Navigation Grid */}
        <section className="features-grid">
          <div className="feature-card" id="card-feature-about">
            <div className="feature-icon-wrapper feature-icon-red">
              🏛️
            </div>
            <h3>Về Học Viện</h3>
            <p>
              Tìm hiểu lịch sử phát triển, tầm nhìn sứ mệnh và các ngành đào tạo hàng đầu của PTIT.
            </p>
            <Link to="/about" className="card-link" id="link-card-about">
              Xem trang giới thiệu →
            </Link>
          </div>

          <div className="feature-card" id="card-feature-contact">
            <div className="feature-icon-wrapper feature-icon-blue">
              📞
            </div>
            <h3>Kênh Liên Hệ</h3>
            <p>
              Kết nối với ban tuyển sinh, văn phòng đào tạo qua email chính thức và hotline các cơ sở.
            </p>
            <Link to="/contact" className="card-link" id="link-card-contact">
              Xem thông tin liên hệ →
            </Link>
          </div>

          <div className="feature-card" id="card-feature-tech">
            <div className="feature-icon-wrapper feature-icon-gold">
              ⚡
            </div>
            <h3>Công Nghệ SPA</h3>
            <p>
              Trang web được xây dựng hoàn toàn bằng React và React Router DOM giúp chuyển trang tức thì không tải lại trang.
            </p>
            <span className="card-link" style={{ cursor: 'default' }}>
              SPA Router v7 ✔
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
