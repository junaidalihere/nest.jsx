export const Cardtwo = () => {
  const items = [
    {
      icon: "⚛️",
      title: "React",
      description:
        "The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions.",
    },
    {
      icon: "📦",
      title: "Turbopack",
      description:
        "An incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js.",
    },
    {
      icon: "⚡",
      title: "Speedy Web Compiler",
      description:
        "An extensible Rust-based platform for the next generation of fast developer tools, and can be used for both compilation and minification.",
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "90px 30px",
          borderBottom: "1px solid #333333",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
            gap: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#C2C2C2",
            }}
          >
            Built on a foundation of fast, production-grade tooling
          </h1>

          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "12px 20px",
              border: "1px solid #333",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
          >
            Powered By
          </button>
        </div>

        <div
          style={{
            marginTop: "90px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            // flexWrap: "wrap", // Allows items to wrap on smaller screens
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "20px",
                border: "1px solid #333",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                textAlign: "left",
                cursor: "pointer",
                marginBottom: "20px",
                width: "400px",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "15px",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "#888",
                  fontSize: "14px",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
