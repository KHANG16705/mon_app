import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h4>Học viện Công nghệ Bưu chính Viễn thông</h4>
            <p>Bài tập 1 - Xây dựng trang web nhiều trang với React Router DOM</p>
          </div>

          <div className="footer-nav">
            <Link to="/" id="footer-link-home">Trang chủ</Link>
            <Link to="/about" id="footer-link-about">Giới thiệu</Link>
            <Link to="/contact" id="footer-link-contact">Liên hệ</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PTIT SPA Project. Hoàn thành theo yêu cầu bài tập.</p>
          <span className="badge-tech">react-router-dom v7</span>
        </div>
      </div>
    </footer>
  );
}
