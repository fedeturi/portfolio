export default function Home() {
  return (
    <>
      <nav>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
        >
          <a href="#" className="logo">
            FEDETURI.wd
          </a>
          <div className="nav-links">
            <a href="#work">Projects</a>
            <a href="#contact">Let's talk!</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <p className="hero-tagline">MADE IN CÓRDOBA 🇦🇷 // EST 1996</p>
          <h1>FULLSTACK WEB DEV.</h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "500px", marginBottom: "30px" }}>
            Seasoned developer with more than 5 years of experience. I have built cool stuff for E-Commerce, Fintech, Crypto, Healthtech, and Edtech. Always learning.
          </p>
          <a href="#work" className="brutal-btn">
            VIEW MY WORK
          </a>
        </div>
        <div className="hero-image">
          <div className="blob"></div>
          <img src="/images/me.jpeg" alt="Fedeturi Portrait" />
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-content">
          TIENDA NUBE // SHOPIFY // REACT // TYPESCRIPT // PYTHON // DJANGO // LIQUID //
          WORDPRESS // WOO COMMERCE // WEB TECH // AGENTIC AI // TIENDA NUBE // SHOPIFY //
          REACT // TYPESCRIPT // PYTHON // DJANGO // LIQUID //

        </div>
      </div>

      <h2 className="section-title" id="work">
        COOL PROJECTS I WORKED WITH
      </h2>

      <section className="projects">
        <div className="project-card">
          <img src="/images/project-1.jpg" alt="Project 1" className="project-img" />
          <div className="project-tags">
            <span className="tag">react.js</span>
            <span className="tag">python</span>
            <span className="tag">django</span>
            <span className="tag year">2025</span>
          </div>
          <h3>FLOCABULARY</h3>
          <p style={{ margin: "15px 0" }}>
            Fullstack development for API and Frontend. Flocabulary is a learning platform for educational institutions all over the world that uses hip-hop and musical theory to enhance the learning experience. Pretty cool right?
          </p>
          <a className="explore" href="https://www.flocabulary.com/" target="_blank" style={{ fontWeight: 700 }}>
            EXPLORE →
          </a>
        </div>
        <div className="project-card">
          <img src="/images/project-2.jpg" alt="Project 2" className="project-img" />
          <div className="project-tags">
            <span className="tag">react.js</span>
            <span className="tag year">2024</span>
          </div>
          <h3>CUNDA</h3>
          <p style={{ margin: "15px 0" }}>
            Landing Page development. Cunda is an AI asisted ERP team builder.
          </p>
          <a className="explore" href="https://www.cunda.io/en/" target="_blank" style={{ fontWeight: 700 }}>
            EXPLORE →
          </a>
        </div>
        <div className="project-card">
          <img src="/images/project-3.jpg" alt="Project 3" className="project-img" />
          <div className="project-tags">
            <span className="tag">react.js</span>
            <span className="tag year">2023</span>
          </div>
          <h3>AMAUTA</h3>
          <p style={{ margin: "15px 0" }}>
            Landing Page development. Amauta is a Data/AI/ML consultancy firm.
          </p>
          <a className="explore" href="https://www.amauta.ai" target="_blank" style={{ fontWeight: 700 }}>
            EXPLORE →
          </a>
        </div>
        <div className="project-card">
          <img src="/images/project-4.jpg" alt="Project 4" className="project-img" />
          <div className="project-tags">
            <span className="tag">tiendanube</span>
            <span className="tag year">2023</span>
          </div>
          <h3>CLEA SPORT</h3>
          <p style={{ margin: "15px 0" }}>
            E-commerce platform creation using Tiendanube.com.
          </p>
          <a className="explore" href="https://www.cleasport.com.ar/" target="_blank" style={{ fontWeight: 700 }}>
            EXPLORE →
          </a>
        </div>
        <div className="project-card">
          <img src="/images/project-5.jpg" alt="Project 4" className="project-img" />
          <div className="project-tags">
            <span className="tag">tiendanube</span>
            <span className="tag year">2023</span>
          </div>
          <h3>HANNAH LINGERIE</h3>
          <p style={{ margin: "15px 0" }}>
            E-commerce platform creation using Tiendanube.com.
          </p>
          <a className="explore" href="https://www.hannahlingeriemayorista.com" target="_blank" style={{ fontWeight: 700 }}>
            EXPLORE →
          </a>
        </div>
        <div className="project-card">
          <img src="/images/project-6.jpg" alt="Project 4" className="project-img" />
          <div className="project-tags">
            <span className="tag">python</span>
            <span className="tag">django</span>
            <span className="tag">DRF</span>
            <span className="tag">react.js</span>
            <span className="tag year">2022</span>
          </div>
          <h3>RIPIO</h3>
          <p style={{ margin: "15px 0" }}>
            Fullstack development for B2B API and Frontend. Ripio is a Crypto exchange and Fintech B2B provider with over 12 years of experience, and operations all over the world.
          </p>
          <a className="explore" href="https://www.ripio.com/es" target="_blank" style={{ fontWeight: 700 }}>
            EXPLORE →
          </a>
        </div>
      </section>
      {/* 
      <section className="services" id="services">
        <div className="service-box">
          <h3>VIBE CODE</h3>
          <p>React, Next.js, TypeScript. Code that performs and looks incredible.</p>
        </div>
        <div className="service-box">
          <h3>UI CRAFT</h3>
          <p>Brutalist interfaces that prioritize character and usability.</p>
        </div>
        <div className="service-box">
          <h3>ANIMATIONS</h3>
          <p>Smooth interactions and motion that enhance the experience.</p>
        </div>
        <div className="service-box">
          <h3>ARCHITECTURE</h3>
          <p>Clean, scalable code that developers actually enjoy working with.</p>
        </div>
      </section> */}

      <section className="contact" id="contact">
        <div className="contact-info">
          <h2 style={{ fontSize: "5rem", marginBottom: "20px" }}>LET&apos;S TALK!</h2>
          <p style={{ fontSize: "1.5rem", marginBottom: "40px" }}>
            Got a project in mind?
          </p>
          <p>
            <strong>EMAIL:</strong> me@fedeturi.com
          </p>
          <p>
            <strong>LOCATION:</strong> Córdoba 🇦🇷 // Remote
          </p>
          <div className="footer-link" style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
            <a href="https://x.com/fedeturi" target="_blank" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 700 }}>
              TWITTER
            </a>
            <a href="https://linkedin.com/in/fjbrun" target="_blank" style={{ color: "var(--secondary)", textDecoration: "none", fontWeight: 700 }}>
              LINKEDIN
            </a>
            <a href="https://calendar.app.google/ieKRuZYdrL6vDr4P9" target="_blank" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 700 }}>
              GOOGLE MEET
            </a>

          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="input-group">
              <label>YOUR NAME</label>
              <input type="text" placeholder="John 'The Maverick' Doe" />
            </div>
            <div className="input-group">
              <label>EMAIL ADDRESS</label>
              <input type="email" placeholder="john@unconventional.com" />
            </div>
            <div className="input-group">
              <label>MESSAGE</label>
              <textarea rows={5} placeholder="Tell me why we should break the internet together..."></textarea>
            </div>
            <button type="submit">Let's go!</button>
          </form>
        </div>
      </section>

      <footer>
        <p>© 2026 fedeturi.com</p>
        <div style={{ marginTop: "20px", fontSize: "0.8rem" }}>Let's build cool stuff together!</div>
      </footer>
    </>
  )
}
