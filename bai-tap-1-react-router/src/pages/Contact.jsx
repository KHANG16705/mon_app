import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="page-fade-in" id="page-contact">
      <div className="container">
        {/* Requirement Highlight Box */}
        <div className="requirement-banner" id="contact-requirement-box">
          <div className="requirement-tag">
            <span>📌</span> Yêu cầu đề bài (Liên hệ /contact)
          </div>
          <div className="required-text-box">
            <span className="quote-icon">“</span>
            <h1 className="required-exact-text" id="contact-required-heading">
              Email: contact@ptit.edu.vn
            </h1>
          </div>
          <p className="requirement-note">
            Đường dẫn hiện tại: <code>/contact</code> | Component: <code>Contact.jsx</code>
          </p>
        </div>

        <div className="about-hero">
          <h2 className="page-title">Thông Tin Liên Hệ PTIT</h2>
          <p className="page-subtitle">
            Học viện sẵn sàng hỗ trợ giải đáp mọi thắc mắc về tuyển sinh, đào tạo và hợp tác nghiên cứu.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact Details List */}
          <div className="contact-card-list">
            {/* Primary Email Card (Required by task) */}
            <div className="contact-info-card highlight" id="card-contact-email">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Hộp Thư Điện Tử Chính Thức</h4>
                <p>Email tiếp nhận thông tin và phản hồi chính thức:</p>
                <a
                  href="mailto:contact@ptit.edu.vn"
                  className="contact-email-link"
                  id="link-official-email"
                >
                  contact@ptit.edu.vn
                </a>
              </div>
            </div>

            {/* Hanoi Campus */}
            <div className="contact-info-card" id="card-campus-hanoi">
              <div className="contact-icon">🏢</div>
              <div className="contact-details">
                <h4>Cơ sở Đào tạo Hà Nội (Trụ sở chính)</h4>
                <p>
                  Km10, Đường Nguyễn Trãi, Quận Hà Đông, TP. Hà Nội
                </p>
                <p style={{ marginTop: '4px' }}>
                  <strong>Điện thoại:</strong> (024) 3352 8122 | (024) 3352 8740
                </p>
              </div>
            </div>

            {/* HCMC Campus */}
            <div className="contact-info-card" id="card-campus-hcmc">
              <div className="contact-icon">🌴</div>
              <div className="contact-details">
                <h4>Cơ sở Đào tạo tại TP. Hồ Chí Minh</h4>
                <p>
                  Số 97 Đường Man Thiện, Phường Hiệp Phú, TP. Thủ Đức, TP. Hồ Chí Minh
                </p>
                <p style={{ marginTop: '4px' }}>
                  <strong>Điện thoại:</strong> (028) 3829 5282 | (028) 3730 6600
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-card" id="card-contact-form">
            <h3>Gửi Tin Nhắn Cho Học Viện</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
              Điền biểu mẫu dưới đây để gửi câu hỏi trực tiếp đến ban tư vấn PTIT.
            </p>

            {submitted && (
              <div className="alert-success" id="contact-success-alert">
                <span>✅</span>
                <span>Cảm ơn bạn! Tin nhắn đã được gửi thành công đến <strong>contact@ptit.edu.vn</strong>.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} id="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="input-name">Họ và tên</label>
                <input
                  id="input-name"
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="input-email">Email của bạn</label>
                <input
                  id="input-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="input-message">Nội dung câu hỏi</label>
                <textarea
                  id="input-message"
                  rows="4"
                  required
                  placeholder="Nhập thông tin cần tư vấn hoặc phản hồi..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" id="btn-submit-contact" style={{ width: '100%' }}>
                <span>Gửi liên hệ</span>
                <span>✉️</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
