import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="page-fade-in" id="page-about">
      <div className="container">
        {/* Requirement Highlight Box */}
        <div className="requirement-banner" id="about-requirement-box">
          <div className="requirement-tag">
            <span>📌</span> Yêu cầu đề bài (Giới thiệu /about)
          </div>
          <div className="required-text-box">
            <span className="quote-icon">“</span>
            <h1 className="required-exact-text" id="about-required-heading">
              Đây là trang giới thiệu về Học viện.
            </h1>
          </div>
          <p className="requirement-note">
            Đường dẫn hiện tại: <code>/about</code> | Component: <code>About.jsx</code>
          </p>
        </div>

        {/* About Main Section */}
        <div className="about-hero">
          <h2 className="page-title">Học viện Công nghệ Bưu chính Viễn thông (PTIT)</h2>
          <p className="page-subtitle">
            Đơn vị sự nghiệp trực thuộc Bộ Thông tin và Truyền thông, tổ chức đào tạo đại học,
            sau đại học và nghiên cứu khoa học hàng đầu cả nước.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Info */}
          <div className="info-card" id="card-about-overview">
            <h3>🏛️ Tổng quan & Sứ mệnh</h3>
            <p>
              Học viện Công nghệ Bưu chính Viễn thông được thành lập năm 1997 trên cơ sở sáp nhập
              các đơn vị nghiên cứu và đào tạo tiền thân có lịch sử từ năm 1953.
            </p>
            <p>
              Sứ mệnh của Học viện là sáng tạo và chuyển giao tri thức cho xã hội thông qua các hoạt động
              đào tạo nguồn nhân lực chất lượng cao, nghiên cứu khoa học tiên tiến và chuyển giao công nghệ
              trong các lĩnh vực Thông tin và Truyền thông.
            </p>

            <ul className="pillar-list">
              <li className="pillar-item">
                <span style={{ fontSize: '1.2rem' }}>🎯</span>
                <div>
                  <strong>Tiên phong Chuyển đổi số</strong>
                  <span>Đi đầu áp dụng mô hình đại học số, học liệu điện tử thông minh.</span>
                </div>
              </li>
              <li className="pillar-item">
                <span style={{ fontSize: '1.2rem' }}>🔬</span>
                <div>
                  <strong>Nghiên cứu ứng dụng đỉnh cao</strong>
                  <span>Hàng trăm đề tài trọng điểm quốc gia về AI, IoT, mạng 5G/6G, An ninh mạng.</span>
                </div>
              </li>
              <li className="pillar-item">
                <span style={{ fontSize: '1.2rem' }}>🤝</span>
                <div>
                  <strong>Hợp tác quốc tế & Doanh nghiệp</strong>
                  <span>Hợp tác chặt chẽ cùng VNPT, Viettel, Samsung, FPT và các viện đại học quốc tế.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Academic faculties */}
          <div className="info-card" id="card-about-faculties">
            <h3>📚 Các Ngành & Khoa Đào Tạo</h3>
            <p>Các khối ngành đào tạo mũi nhọn tại PTIT:</p>

            <div className="faculties-grid">
              <div className="faculty-badge">
                <span>💻</span>
                <span>Công nghệ thông tin</span>
              </div>
              <div className="faculty-badge">
                <span>🛡️</span>
                <span>An toàn thông tin</span>
              </div>
              <div className="faculty-badge">
                <span>📡</span>
                <span>Điện tử Viễn thông</span>
              </div>
              <div className="faculty-badge">
                <span>🎨</span>
                <span>Công nghệ Đa phương tiện</span>
              </div>
              <div className="faculty-badge">
                <span>📈</span>
                <span>Marketing & Thương mại số</span>
              </div>
              <div className="faculty-badge">
                <span>⚙️</span>
                <span>Kỹ thuật Điều khiển & TĐH</span>
              </div>
            </div>

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <Link to="/contact" className="btn btn-primary" id="btn-about-to-contact" style={{ width: '100%' }}>
                <span>Liên hệ Ban Tuyển sinh PTIT</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
