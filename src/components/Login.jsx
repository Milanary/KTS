import { useState } from 'react';
import './AuthStyles.css';

// SVG Icons as React components/constants to prevent package install issues
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

const ShieldAlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ALLOWED_CREDENTIALS = [
  { email: 'admin@gmail.com', password: 'Admin123', label: 'Admin Workspace' },
  { email: 'bhishan@kta.com.np', password: 'bhishan123', label: 'Bhishan Bogati Workspace' }
];

export default function Login({ onLoginSuccess, theme, toggleTheme }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [authState, setAuthState] = useState('idle'); // 'idle' | 'authenticating' | 'success'

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Basic verification
    if (!email || !password) {
      triggerError('Please fill in all fields.');
      return;
    }

    setAuthState('authenticating');

    // Artificial delay to simulate premium secure authentication checks
    setTimeout(() => {
      const match = ALLOWED_CREDENTIALS.find(
        (cred) => cred.email.toLowerCase() === email.trim().toLowerCase() && cred.password === password
      );

      if (match) {
        setAuthState('success');
        setTimeout(() => {
          onLoginSuccess(match.email);
        }, 1200);
      } else {
        setAuthState('idle');
        triggerError('Invalid email or password combination. Access denied.');
      }
    }, 1500);
  };

  const triggerError = (message) => {
    setError(message);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="auth-container">
      {/* Background Animated Blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>



      {/* Glassmorphic Form Container */}
      <div className={`glass-card ${shake ? 'shake' : ''}`}>
        {authState === 'success' ? (
          <div className="success-screen">
            <div className="success-icon-wrapper">
              <ShieldCheckIcon />
            </div>
            <h2 className="card-title">Access Granted</h2>
            <p className="card-subtitle">Loading secure environment...</p>
          </div>
        ) : (
          <>
            <div className="card-header">
              <div className="logo-container">K</div>
              <h1 className="card-title">Welcome back</h1>
              <p className="card-subtitle">Secure workspace portal authorization</p>
            </div>

            {error && (
              <div className="alert-error" role="alert" id="auth-error-banner">
                <div className="alert-error-icon">
                  <ShieldAlertIcon />
                </div>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="auth-email">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">
                    <MailIcon />
                  </span>
                  <input
                    id="auth-email"
                    type="email"
                    className="auth-input"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={authState === 'authenticating'}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="auth-password">
                  Password
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">
                    <LockIcon />
                  </span>
                  <input
                    id="auth-password"
                    type={showPassword ? 'text' : 'password'}
                    className="auth-input"
                    placeholder="Enter account password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={authState === 'authenticating'}
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="input-action-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    tabIndex="-1"
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={authState === 'authenticating'}
                id="btn-submit-auth"
              >
                {authState === 'authenticating' ? (
                  <>
                    <span className="loader-spinner"></span>
                    <span>Authorizing Portal...</span>
                  </>
                ) : (
                  <>
                    <span>Authenticate Account</span>
                    <ArrowRightIcon />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
