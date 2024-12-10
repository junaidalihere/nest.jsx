export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "64px 24px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        borderTop: "1px solid #333",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1.5fr",
          gap: "32px",
        }}
      >
        <div>
          <img
            src="https://pulkitgangwar.gallerycdn.vsassets.io/extensions/pulkitgangwar/nextjs-snippets/1.0.2/1713018281951/Microsoft.VisualStudio.Services.Icons.Default"
            alt="Vercel Logo"
            style={{
              height: "57px",
              width: "auto",
            }}
          />
        </div>

        <div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "16px",
              color: "#fff",
            }}
          >
            Resources
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Docs
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Learn
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Showcase
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Blog
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Analytics
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Next.js Conf
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Previews
            </a>
          </div>
        </div>

        <div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "16px",
              color: "#fff",
            }}
          >
            More
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Next.js Commerce
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Contact Sales
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              GitHub
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Releases
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Telemetry
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Governance
            </a>
          </div>
        </div>

        <div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "16px",
              color: "#fff",
            }}
          >
            About Vercel
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Next.js + Vercel
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Open Source Software
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              GitHub
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Bluesky
            </a>
            <a
              href="#"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              X
            </a>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "16px",
              color: "#fff",
            }}
          >
            Subscribe to our newsletter
          </h3>
          <p
            style={{ color: "#888", textDecoration: "none", fontSize: "14px" }}
          >
            Stay updated on new releases and features, guides, and case studies.
          </p>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              type="email"
              placeholder="you@domain.com"
              style={{
                flex: "1",
                padding: "8px 12px",
                backgroundColor: "#111",
                border: "1px solid #333",
                borderRadius: "6px",
                color: "#fff",
                fontSize: "14px",
              }}
            />
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                borderRadius: "6px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "64px",
          paddingTop: "32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          <span
            style={{ color: "#888", textDecoration: "none", fontSize: "14px" }}
          >
            © 2024 Vercel, Inc.
          </span>
          <a
            href="#"
            style={{ color: "#888", textDecoration: "none", fontSize: "14px" }}
          >
            GitHub
          </a>
          <a
            href="#"
            style={{ color: "#888", textDecoration: "none", fontSize: "14px" }}
          >
            X
          </a>
          <a
            href="#"
            style={{ color: "#888", textDecoration: "none", fontSize: "14px" }}
          >
            Bluesky
          </a>
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "4px",
            backgroundColor: "#111",
            borderRadius: "20px",
          }}
        >
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "transparent",
              color: "#888",
              border: "none",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            ☀️
          </button>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "transparent",
              color: "#888",
              border: "none",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            🖥️
          </button>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "transparent",
              color: "#888",
              border: "none",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            🌙
          </button>
        </div>
      </div>
    </footer>
  );
}
