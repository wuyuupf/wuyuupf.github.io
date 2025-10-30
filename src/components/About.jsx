import './About.css'

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const ScholarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const CVIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
)

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">Zuyue Fu</h2>
      <div className="profile-section">
        <div className="profile-image">
          <img
            src="/assets/pic.jpeg"
            alt="Zuyue Fu"
          />
        </div>
        <div className="profile-content">
          <div className="bio">
            <p>
              I am a Research Scientist at Meta, where I work on large language models,
              agentic systems, and their applications.
            </p>
            <p>
              I received my Ph.D. from the Department of{' '}
              <a href="https://www.mccormick.northwestern.edu/industrial/" target="_blank" rel="noopener noreferrer">
                Industrial Engineering & Management Sciences
              </a>{' '}
              at Northwestern University under the supervision of{' '}
              <a href="https://zhaoranwang.github.io/" target="_blank" rel="noopener noreferrer">
                Zhaoran Wang
              </a>, where my research focused on theoretical reinforcement learning. Prior to that,
              I completed my B.S. in Mathematics at Zhiyuan Honors Program, Shanghai Jiao Tong University.
            </p>
          </div>
          <div className="email-address">
            <EmailIcon /> zuyue.fu /æt/ gmail.com
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/zuyue-fu-32544885/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href="https://scholar.google.com/citations?user=EQlYpjAAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
              <ScholarIcon /> Google Scholar
            </a>
            <a href="/assets/cv.pdf" target="_blank" rel="noopener noreferrer">
              <CVIcon /> CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
