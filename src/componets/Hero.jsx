import { Card } from "./Card";
import { Cardtwo } from "./Cardtwo";
import LandingSection from "./Landingsection";

export function Hero() {
  const features = [
    {
      title: "Built-in Optimizations",
      description:
        "Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.",
      icon: "⚙️",
    },
    {
      title: "Dynamic HTML Streaming",
      description:
        "Instantly stream UI from the server, integrated with the App Router and React Suspense.",
      icon: "⚡",
    },
    {
      title: "React Server Components",
      description:
        "Add components without sending additional client-side JavaScript.",
      icon: "🔗",
    },
    {
      title: "Data Fetching",
      description: "Make your React components async and await your data.",
      icon: "📡",
    },
    {
      title: "CSS Support",
      description:
        "Style your application with CSS Modules, Tailwind CSS, and more.",
      icon: "🎨",
    },
    {
      title: "Client and Server Rendering",
      description: "Flexible rendering and caching options, including ISR.",
      icon: "🖥️",
    },
    {
      title: "Server Actions",
      description:
        "Run server code by calling a function. Skip the API and easily revalidate cached data.",
      icon: "🔄",
    },
    {
      title: "Route Handlers",
      description:
        "Build API endpoints to securely connect with third-party services or listen for webhooks.",
      icon: "🔌",
    },
    {
      title: "Advanced Routing & Nested Layouts",
      description:
        "Create routes using the file system, including support for more advanced routing patterns.",
      icon: "🗺️",
    },
    {
      title: "Middleware",
      description:
        "Take control of the incoming request. Use code to define routing and access rules.",
      icon: "🔒",
    },
    {
      title: "Next.js 15",
      description:
        "The power of full-stack to the frontend. Read the release notes.",
      icon: "✨",
      customStyle: {
        background: "radial-gradient(circle, #111, #000)",
        border: "1px dotted #666",
        textAlign: "center",
      },
    },
  ];

  const showcaseItems = [
    {
      image:
        "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-audible.6063405a.png&w=828&q=75&dpl=dpl_2mEJJfSW7V1FnKmLJgPYkBwDpMPu",
      alt: "Audible website showcase",
    },
    {
      image:
        "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-dice.9a4fbb45.png&w=640&q=75&dpl=dpl_2mEJJfSW7V1FnKmLJgPYkBwDpMPu",
      alt: "DICE platform showcase",
    },
    {
      image:
        "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-notion.2bd1f0c5.png&w=828&q=75&dpl=dpl_2mEJJfSW7V1FnKmLJgPYkBwDpMPu",
      alt: "Collaboration platform showcase",
    },
    {
      image:
        "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-nike.ae99d521.png&w=828&q=75&dpl=dpl_2mEJJfSW7V1FnKmLJgPYkBwDpMPu",
      alt: "Nike product showcase",
    },
    {
      image:
        "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-sonos.a3dbc334.png&w=828&q=75&dpl=dpl_2mEJJfSW7V1FnKmLJgPYkBwDpMPu",
      alt: "Sonos product showcase",
    },
    {
      image:
        "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-dice.9a4fbb45.png&w=640&q=75&dpl=dpl_2mEJJfSW7V1FnKmLJgPYkBwDpMPu",
      alt: "Platform showcase",
    },
    {
      image:
        "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-today.98d66e07.png&w=640&q=75&dpl=dpl_2mEJJfSW7V1FnKmLJgPYkBwDpMPu",
      alt: "News platform showcase",
    },
    {
      image:
        "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-wapo.2769ff64.png&w=828&q=75&dpl=dpl_2mEJJfSW7V1FnKmLJgPYkBwDpMPu",
      alt: "Media platform showcase",
    },
  ];

  const Testimonials = [
    {
      title:
        "“With Next.js, we now consistently average 0.09 or lower for Cumulative Layout Shift, placing our site in the top tier for user experience and Core Web Vitals.”",
      description: "Senior Software Engineer, Frontend",
      img: "https://nextjs.org/_next/static/media/notion-dark.b0043062.svg",
    },
    {
      title:
        "“Our UI for Frame.io responds to user input within 100ms and all animations run at a consistent 60fps with Next.js.”",
      description: "Charlton Roberts, Product Engineering",
      img: "https://nextjs.org/_next/static/media/adobe-dark.8bd75ae3.svg",
    },
    {
      title:
        "“Next.js has been a game-changer for our agency work and team collaboration. Its powerful features have allowed us to build high-performance websites quickly and efficiently like never before.”",
      description: "Daniel Lopes, Frontend Developer",
      img: "https://nextjs.org/_next/static/media/notion-dark.b0043062.svg",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "black",
          padding: "15px",
          textAlign: "center",
          gap: "35px",
          borderBottom: "1px solid #333333",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(3rem, 4.7vw, 6rem)",
            fontWeight: "800",
            lineHeight: "1",
            color: "#D3D3D3",
            margin: "170px 0px 10px 0",
            maxWidth: "1200px",
          }}
        >
          The React Framework for the Web
        </h1>

        <p
          style={{
            fontSize: "clamp(1.2rem, 1vw, 1.5rem)",
            color: "rgb(163, 163, 163)",
            maxWidth: "800px",
            margin: "0 0 40px 0",
            lineHeight: "1.5",
          }}
        >
          Used by some of the world's largest companies, Next.js enables you to
          create{" "}
          <span style={{ color: "white" }}>high-quality web applications</span>{" "}
          with the power of React components.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <button
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "500",
              backgroundColor: "white",
              color: "black",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
          <button
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "500",
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Learn Next.js
          </button>
        </div>

        <div
          style={{
            color: "rgb(163, 163, 163)",
            fontSize: "14px",
            fontFamily: "monospace",
            marginBottom: "80px",
          }}
        >
          ▲ ~ npx create-next-app@latest
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#111111",
          color: "#fff",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
          borderBottom: "1px solid #333333",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            What's in Next.js?
          </h1>
          <p
            style={{
              color: "#888",
              fontSize: "16px",
            }}
          >
            Everything you need to build great products on the web.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              customStyle={feature.customStyle}
            />
          ))}
        </div>
      </div>

      <Cardtwo />
      <LandingSection />

      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "80px 24px",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "64px",
              letterSpacing: "-0.025em",
              color: "#ededed",
            }}
          >
            The framework of choice when it matters
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              width: "100%",
            }}
          >
            {showcaseItems.map((item, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#111",
                  border: "1px solid #333",
                  aspectRatio: "4/3",
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "64px 24px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "48px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 400,
              marginBottom: "16px",
              color: "#888",
            }}
          >
            For{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              performance
            </span>
            ,{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              efficiency
            </span>{" "}
            and{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              developer experience
            </span>
            .
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "#888",
              marginBottom: "32px",
            }}
          >
            Next.js is trusted by some of the biggest names on the web.
          </p>
          <button
            style={{
              backgroundColor: "#fff",
              color: "#000",
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            View the Next.js Showcase
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            backgroundColor: "#333",
            border: "1px solid #333",
            borderRadius: "8px",
            overflow: "hidden",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {Testimonials.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#111",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                height: "300px",
                alignItems: "flex-start",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  flex: 1,
                  textAlign: "left",
                }}
              >
                {item.title}
              </p>
              <img
                src={item.img}
                alt="Company logo"
                style={{
                  height: "32px",
                  objectFit: "contain",
                  marginBottom: "16px",
                }}
              />
              <p
                style={{
                  color: "#888",
                  fontSize: "13px",
                  textAlign: "left",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
