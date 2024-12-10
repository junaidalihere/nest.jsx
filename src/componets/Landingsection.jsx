export default function LandingSection() {
  const categories = [
    { name: "Starter", color: "#9333ea" },
    { name: "Ecommerce", color: "#22c55e" },
    { name: "Blog", color: "#f97316" },
    { name: "AI", color: "#3b82f6" },
    { name: "Portfolio", color: "#a855f7" },
    { name: "SaaS", color: "#22c55e" },
    { name: "Multi-tenant App", color: "#f97316" },
  ];

  const templates = [
    {
      title: "Next.js Commerce",
      description:
        "An all-in-one starter kit for high-performance e-commerce sites.",
      image:
        "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1733160175%2Fcommerce.png&w=3840&q=75",
    },
    {
      title: "Image Gallery",
      description: "An image gallery with Cloudinary.",
      image:
        "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122387%2Fnextjs%2Fshowcase%2Ftemplate-next-gallery.jpg&w=3840&q=75",
    },
    {
      title: "Next.js Boilerplate",
      description: "A Next.js starter from create-next-app.",
      image:
        "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1733160054%2Fnext-template.png&w=3840&q=75",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "64px 24px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              letterSpacing: "-0.025em",
            }}
          >
            Get started in seconds
          </h1>
          <span
            style={{
              fontSize: "20px",
              color: "#888",
              fontWeight: "400",
            }}
          >
            Deploy Next.js to Vercel
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          {categories.map((category, index) => (
            <span
              key={index}
              style={{
                padding: "6px 12px",
                borderRadius: "16px",
                fontSize: "14px",
                backgroundColor: "rgba(0,0,0,0.5)",
                border: `1px solid ${category.color}`,
                color: category.color,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {category.name}
            </span>
          ))}
        </div>

        <div
          style={{
            maxWidth: "600px",
            marginBottom: "32px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              color: "#888",
              lineHeight: "1.6",
              marginBottom: "24px",
            }}
          >
            Vercel is a frontend cloud from the creators of Next.js, making it
            easy to get started with Next.js quickly.
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#888",
              lineHeight: "1.6",
              marginBottom: "32px",
            }}
          >
            Jumpstart your Next.js development with pre-built solutions from
            Vercel and our community.
          </p>

          <button
            style={{
              backgroundColor: "#fff",
              color: "#000",
              padding: "12px 24px",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "500",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s",
            }}
          >
            Deploy a Template on Vercel
            <span style={{ fontSize: "20px" }}>↗</span>
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {templates.map((template, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#111",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #333",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
            >
              <img
                src={template.image}
                alt={template.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {template.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#888",
                    lineHeight: "1.5",
                  }}
                >
                  {template.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
