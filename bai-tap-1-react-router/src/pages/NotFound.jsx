import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-fade-in" id="page-not-found">
      <div className="container">
        <div className="not-found-card">
          <div className="not-found-code">404</div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Không Tìm Thấy Trang</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
            Đường dẫn bạn truy cập không tồn tại hoặc đã được di chuyển.
          </p>
          <Link to="/" className="btn btn-primary" id="btn-404-home">
            <span>Quay lại Trang chủ</span>
            <span>🏠</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
