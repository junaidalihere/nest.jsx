import { BsFillTriangleFill } from "react-icons/bs";

export const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: "70px",
        borderBottom: "1px solid #333333",
        backgroundColor: "#000000",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 20px",
        color: "white",
        position: "fixed",
        left: "0",
        top: " 0",
        zIndex: "9999",
      }}
      className="Headers"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <BsFillTriangleFill
          style={{
            color: "white",
            fontSize: "30px",
          }}
        />

        <span
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "28px",
            fontWeight: "100",
            marginBottom: "8px",
          }}
        >
          /
        </span>
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "27px",
            fontWeight: "500",
            margin: "0",
            fontFamily: "sans-serif",
            gap: " 4px",
          }}
        >
          NEXT
          <span
            style={{
              fontSize: "12px",
              alignContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            .
          </span>
          <span
            style={{
              fontSize: "12px",
              fontWeight: "500",
              alignContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            js
          </span>
        </h3>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginLeft: "30px",
          }}
        >
          {["Showcase", "Docs", "Blog", "Templates", "Enterprise"].map(
            (link, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: "white",
                  fontSize: "14px",
                  textDecoration: "none",
                  fontWeight: "350",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255, 255, 255, 0.7)")
                }
              >
                {link}
              </a>
            )
          )}
        </nav>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "5px",
            padding: "5px 10px",
            height: "35px",
          }}
        >
          <input
            className="Input"
            type="text"
            placeholder="Search documentation..."
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              color: "white",
              fontSize: "14px",
              marginRight: "10px",
              width: "180px",
            }}
          />
          <span
            style={{
              cursor: "pointer",
              fontSize: "12px",
              backgroundColor: "transparent",
              border: "0.1px solid rgba(255, 255, 255, 0.4)",
              padding: "3px 8px",
              borderRadius: "5px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "23px",
              color: "white",
              fontWeight: "500",
            }}
          >
            CtrlK
          </span>
        </div>

        {/* Deploy Button */}
        <button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "white",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            borderRadius: "5px",
            padding: "5px 15px",
            fontSize: "14px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <BsFillTriangleFill
            style={{
              fontSize: "16px",
            }}
          />
          Deploy
        </button>

        <button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "none",
            borderRadius: "5px",
            padding: "5px 15px",
            fontSize: "14px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Learn
        </button>
      </div>
    </header>
  );
};
