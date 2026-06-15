import { useState, useEffect } from 'react';
import './AuthStyles.css';

// SVG Icons
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const LogOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="5" y2="19" /><line x1="5" x2="19" y1="12" y2="12" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 16V8" /><path d="M12 16v-4" /><path d="M17 16v-6" />
  </svg>
);

// CHC43015 Certificate IV in Ageing Support Syllabus Units
const DEFAULT_COURSES = [
  {
    id: 'chcage001',
    title: 'CHCAGE001: Facilitate the empowerment of older people',
    category: 'Age Care Core',
    description: 'Learn techniques to support older people to maintain their independence, protect their human rights, and promote physical and emotional wellbeing.',
    lessonsCount: 5
  },
  {
    id: 'chcage005',
    title: 'CHCAGE005: Provide support to people living with dementia',
    category: 'Age Care Core',
    description: 'Develop specialized skills to deliver care services to dementia patients, handle behavioral fluctuations, and design cognitive enhancement therapies.',
    lessonsCount: 6
  },
  {
    id: 'chcpal001',
    title: 'CHCPAL001: Deliver care using a palliative approach',
    category: 'Age Care Core',
    description: 'Understand palliative care framework standards, support families during end-of-life care, manage pain indicators, and address grief/ethical constraints.',
    lessonsCount: 5
  },
  {
    id: 'chcccs011',
    title: 'CHCCCS011: Meet personal support needs',
    category: 'Care Support',
    description: 'Build core competencies to assist clients with activities of daily living (ADLs), skin integrity management, hygiene routines, and mobility plans.',
    lessonsCount: 4
  },
  {
    id: 'chcleg003',
    title: 'CHCLEG003: Manage legal and ethical compliance',
    category: 'Regulations',
    description: 'Establish standard operational safety benchmarks. Understand duty of care, national privacy principles, and mandatory reporting guidelines in Australia.',
    lessonsCount: 5
  }
];

export default function AdminPanel({ onLogout, theme, toggleTheme }) {
  const [activeMenu, setActiveMenu] = useState('dashboard'); // 'dashboard' | 'courses' | 'students' | 'settings'
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('kts_courses');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const hasOldCourses = parsed.some(
          (c) => c.id.includes('course-react') || c.id.includes('course-css') || c.id.includes('course-nodejs')
        );
        if (!hasOldCourses) {
          return parsed;
        }
      } catch {
        // Fall through on JSON errors
      }
    }
    localStorage.setItem('kts_courses', JSON.stringify(DEFAULT_COURSES));
    return DEFAULT_COURSES;
  });

  // Settings states
  const [allowRegistration, setAllowRegistration] = useState(true);
  const [sandboxMode, setSandboxMode] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  // Forms states
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Age Care Core');
  const [description, setDescription] = useState('');
  const [lessonsCount, setLessonsCount] = useState(5);
  const [error, setError] = useState('');

  // Persist courses changes
  useEffect(() => {
    localStorage.setItem('kts_courses', JSON.stringify(courses));
  }, [courses]);

  // Calculate student progress dynamically from localStorage
  const getBhishanProgress = () => {
    try {
      const progressSaved = localStorage.getItem('kts_student_progress');
      if (!progressSaved) return 0;
      
      const progressObj = JSON.parse(progressSaved);
      let totalLessons = 0;
      let completedLessons = 0;

      courses.forEach((c) => {
        const total = c.lessonsCount;
        totalLessons += total;
        for (let i = 1; i <= total; i++) {
          if (progressObj[`${c.id}-${i}`] === true) {
            completedLessons++;
          }
        }
      });

      if (totalLessons === 0) return 0;
      return Math.round((completedLessons / totalLessons) * 100);
    } catch {
      return 0;
    }
  };

  const bhishanProgress = getBhishanProgress();

  const handleAddCourse = (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !description.trim()) {
      setError('Please fill in the course title and description.');
      return;
    }

    const newCourse = {
      id: `course-${Date.now()}`,
      title: title.trim(),
      category,
      description: description.trim(),
      lessonsCount: parseInt(lessonsCount) || 5
    };

    setCourses((prev) => [newCourse, ...prev]);
    setTitle('');
    setDescription('');
    setLessonsCount(5);
    setActiveMenu('courses'); // switch to course view
  };

  const handleDeleteCourse = (id) => {
    if (confirm('Are you sure you want to delete this course? All student completion data for it will be invalidated.')) {
      setCourses((prev) => prev.filter((c) => c.id !== id));
    }
  };

  // Helper to resolve title of canvas
  const getCanvasTitle = () => {
    switch (activeMenu) {
      case 'dashboard':
        return 'Overview Dashboard';
      case 'courses':
        return 'Manage Courses';
      case 'students':
        return 'Student Registry';
      case 'settings':
        return 'System Settings';
      default:
        return 'LMS Control Center';
    }
  };

  return (
    <div className="dashboard-layout">
      {/* PERSISTENT SIDEBAR */}
      <aside className="app-sidebar">
        <div className="sidebar-top">
          {/* Brand branding */}
          <div className="sidebar-brand">
            <div className="logo-container" style={{ width: 36, height: 36, fontSize: 18, borderRadius: 10, margin: 0 }}>
              K
            </div>
            <span>KTS Portal</span>
          </div>

          {/* Profile card */}
          <div className="sidebar-profile">
            <div className="sidebar-avatar">A</div>
            <div className="sidebar-profile-info">
              <span className="sidebar-profile-name">System Admin</span>
              <span className="sidebar-profile-role">Portal Admin</span>
            </div>
          </div>

          {/* Sidebar Menu options */}
          <nav className="sidebar-menu">
            <button 
              type="button" 
              className={`sidebar-link ${activeMenu === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveMenu('dashboard')}
            >
              <span className="sidebar-link-icon"><ChartIcon /></span>
              <span>Overview Dashboard</span>
            </button>
            <button 
              type="button" 
              className={`sidebar-link ${activeMenu === 'courses' ? 'active' : ''}`}
              onClick={() => setActiveMenu('courses')}
            >
              <span className="sidebar-link-icon"><BookOpenIcon /></span>
              <span>Course Manager ({courses.length})</span>
            </button>
            <button 
              type="button" 
              className={`sidebar-link ${activeMenu === 'students' ? 'active' : ''}`}
              onClick={() => setActiveMenu('students')}
            >
              <span className="sidebar-link-icon"><UsersIcon /></span>
              <span>Student Registry</span>
            </button>
            <button 
              type="button" 
              className={`sidebar-link ${activeMenu === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveMenu('settings')}
            >
              <span className="sidebar-link-icon"><SettingsIcon /></span>
              <span>System Settings</span>
            </button>
          </nav>
        </div>

        {/* Log Out button */}
        <button 
          type="button" 
          className="btn-logout" 
          onClick={onLogout}
        >
          <LogOutIcon />
          <span>Log Out</span>
        </button>
      </aside>

      {/* RIGHT MAIN CANVAS */}
      <div className="main-canvas">
        {/* Canvas Header */}
        <header className="canvas-header">
          <h2 className="canvas-title">{getCanvasTitle()}</h2>

        </header>

        {/* Scrollable Content Container */}
        <main className="dashboard-content">
          <div className="bg-blobs">
            <div className="blob blob-1"></div>
            <div className="blob blob-2" style={{ width: 400, height: 400 }}></div>
          </div>

          {/* Tab Content 1: Overview Dashboard */}
          {activeMenu === 'dashboard' && (
            <>
              {/* Greeting Banner */}
              <section className="welcome-banner">
                <h1>Welcome back, Administrator</h1>
                <p>Curriculum Control Central. Currently configured for **Certificate IV in Ageing Support** (Aged Care) program syllabus.</p>
                <span className="user-badge">
                  Superadmin
                </span>
              </section>

              {/* Stats Grid */}
              <section className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-icon">
                    <BookOpenIcon />
                  </div>
                  <div className="metric-info">
                    <span className="metric-title">Active Courses</span>
                    <span className="metric-value">{courses.length}</span>
                    <span className="metric-trend">
                      Ageing Support units
                    </span>
                  </div>
                </div>

                <div className="metric-card color-accent">
                  <div className="metric-icon">
                    <UsersIcon />
                  </div>
                  <div className="metric-info">
                    <span className="metric-title">Enrolled Students</span>
                    <span className="metric-value">1 Active</span>
                    <span className="metric-trend" style={{ color: 'var(--accent)' }}>
                      bhishan@kta.com.np
                    </span>
                  </div>
                </div>

                <div className="metric-card color-success">
                  <div className="metric-icon">
                    <GraduationCapIcon />
                  </div>
                  <div className="metric-info">
                    <span className="metric-title">Average Progress</span>
                    <span className="metric-value">{bhishanProgress}%</span>
                    <span className="metric-trend" style={{ color: 'var(--success)' }}>
                      Across all competency units
                    </span>
                  </div>
                </div>

                <div className="metric-card" style={{ color: 'var(--primary)' }}>
                  <div className="metric-icon" style={{ borderColor: 'var(--input-border)' }}>
                    <ShieldIcon />
                  </div>
                  <div className="metric-info">
                    <span className="metric-title">Platform Status</span>
                    <span className="metric-value" style={{ color: 'var(--success)' }}>Active</span>
                    <span className="metric-trend">
                      Legal compliance enabled
                    </span>
                  </div>
                </div>
              </section>

              {/* Split info section: Student registry summary + short logs */}
              <section className="info-section">
                <div className="section-card">
                  <h2 className="section-title">Ageing Support Registry</h2>
                  <div className="data-table-wrapper">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Student Email</th>
                          <th>Competency Progress</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ fontWeight: 600 }}>bhishan@kta.com.np</td>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <span style={{ minWidth: 32, fontWeight: 700 }}>{bhishanProgress}%</span>
                              <div className="progress-track" style={{ width: 100, height: 6 }}>
                                <div className="progress-bar-fill" style={{ width: `${bhishanProgress}%`, background: 'var(--success)' }}></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="status-badge active">Online</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="section-card">
                  <h2 className="section-title">Security Logs</h2>
                  <div className="logs-list">
                    <div className="log-item security">
                      <span className="log-bullet"></span>
                      <div className="log-details">
                        <span className="log-msg">Admin logged in</span>
                        <span className="log-time">Just now</span>
                      </div>
                    </div>
                    <div className="log-item">
                      <span className="log-bullet"></span>
                      <div className="log-details">
                        <span className="log-msg">Cert IV course data fetched</span>
                        <span className="log-time">1 min ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Tab Content 2: Course Manager */}
          {activeMenu === 'courses' && (
            <section>
              {/* Add New Course Track */}
              <div className="creator-card">
                <h2 className="creator-title">
                  <PlusIcon />
                  <span>Create Ageing Support Syllabus Unit</span>
                </h2>

                {error && (
                  <div className="alert-error" role="alert" style={{ marginBottom: 16 }}>
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleAddCourse}>
                  <div className="form-grid">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Unit Title / Code</label>
                      <input
                        type="text"
                        className="auth-input"
                        placeholder="e.g. CHCADV001: Facilitate interests"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ paddingLeft: 16 }}
                        required
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Category</label>
                      <select
                        className="auth-input"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{ paddingLeft: 16, height: '100%', appearance: 'none', background: 'var(--input-bg)' }}
                      >
                        <option value="Age Care Core">Age Care Core</option>
                        <option value="Care Support">Care Support</option>
                        <option value="Regulations">Regulations</option>
                        <option value="Elective">Elective</option>
                      </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Lessons Count</label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        className="auth-input"
                        value={lessonsCount}
                        onChange={(e) => setLessonsCount(e.target.value)}
                        style={{ paddingLeft: 16 }}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: 20 }}>
                    <label className="form-label">Syllabus Overview & Description</label>
                    <textarea
                      className="auth-input"
                      rows="3"
                      placeholder="Outline core objectives, palliative focus, or caring structures..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      style={{ paddingLeft: 16, height: 'auto', resize: 'vertical' }}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: 'auto', minWidth: 160, padding: '12px 24px' }}>
                    <span>Publish Course Unit</span>
                  </button>
                </form>
              </div>

              {/* Courses list */}
              <div className="courses-grid">
                {courses.map((course) => (
                  <div key={course.id} className="course-card">
                    <div>
                      <span className="course-tag">{course.category}</span>
                      <h3 className="course-title">{course.title}</h3>
                      <p className="course-desc">{course.description}</p>
                    </div>
                    <div className="course-footer">
                      <span className="course-meta">
                        <BookOpenIcon />
                        <span>{course.lessonsCount} lessons</span>
                      </span>
                      <button 
                        type="button" 
                        className="btn-delete-course"
                        onClick={() => handleDeleteCourse(course.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tab Content 3: Student Registry */}
          {activeMenu === 'students' && (
            <section className="section-card">
              <h2 className="section-title">Age Care Enrolled Directory</h2>
              <div className="data-table-wrapper">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Student Email</th>
                      <th>Registered Course Track</th>
                      <th>Compulsory Work Placement</th>
                      <th>Competency progress</th>
                      <th>Active Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: 600 }}>bhishan@kta.com.np</td>
                      <td>Certificate IV in Ageing Support (CHC43015)</td>
                      <td>120 Hours Required</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ minWidth: 32, fontWeight: 700 }}>{bhishanProgress}%</span>
                          <div className="progress-track" style={{ width: 120, height: 6 }}>
                            <div className="progress-bar-fill" style={{ width: `${bhishanProgress}%`, background: 'var(--success)' }}></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="status-badge active">Online</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Tab Content 4: Settings */}
          {activeMenu === 'settings' && (
            <section className="section-card">
              <h2 className="section-title">LMS Platform Configuration</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 20 }}>
                Configure mock sandbox settings for the server-less training database.
              </p>

              <div className="settings-list">
                <label className="settings-item">
                  <input 
                    type="checkbox" 
                    className="settings-checkbox" 
                    checked={allowRegistration}
                    onChange={(e) => setAllowRegistration(e.target.checked)}
                  />
                  <div className="settings-label">
                    <span className="settings-label-title">Allow Student Registration</span>
                    <span className="settings-label-desc">Permit new student signups through the public portal route.</span>
                  </div>
                </label>

                <label className="settings-item">
                  <input 
                    type="checkbox" 
                    className="settings-checkbox" 
                    checked={sandboxMode}
                    onChange={(e) => setSandboxMode(e.target.checked)}
                  />
                  <div className="settings-label">
                    <span className="settings-label-title">Production Sandbox Emulation</span>
                    <span className="settings-label-desc">Simulate authentic secure authentications and delay progress bars to test loading animations.</span>
                  </div>
                </label>

                <label className="settings-item">
                  <input 
                    type="checkbox" 
                    className="settings-checkbox" 
                    checked={maintenanceMode}
                    onChange={(e) => setMaintenanceMode(e.target.checked)}
                  />
                  <div className="settings-label">
                    <span className="settings-label-title">Portal Maintenance Mode</span>
                    <span className="settings-label-desc">Lock client accounts out of classroom terminals for periodic database synchronization.</span>
                  </div>
                </label>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
