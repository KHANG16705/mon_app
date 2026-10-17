import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        {/* Logo / Brand */}
        <Link to="/" className="brand-link" id="brand-logo-link">
          <div className="brand-logo-badge">P</div>
          <div className="brand-info">
            <span className="brand-title">PTIT PORTAL</span>
            <span className="brand-subtitle">Học viện CN Bưu chính Viễn thông</span>
          </div>
        </Link>

        {/* Navigation Menu (<nav>) */}
        <nav className="main-nav" aria-label="Menu chính">
          <NavLink
            to="/"
            id="nav-link-home"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            end
          >
            <span className="nav-icon">🏠</span>
            <span>Trang chủ</span>
          </NavLink>

          <NavLink
            to="/about"
            id="nav-link-about"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">ℹ️</span>
            <span>Giới thiệu</span>
          </NavLink>

          <NavLink
            to="/contact"
            id="nav-link-contact"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">✉️</span>
            <span>Liên hệ</span>
          </NavLink>
        </nav>

        {/* Tech Badge */}
        <div className="header-badge" id="header-status-badge">
          <span>⚡</span>
          <span>React Router SPA</span>
        </div>
      </div>
    </header>
  );
}
