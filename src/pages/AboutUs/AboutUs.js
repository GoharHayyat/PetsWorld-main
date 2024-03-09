function AboutUs() {
  return (
    <content
      // onClick={() => shoot("Goal!")}
      style={{
        fontFamily: "ui-sans-serif",
      }}
    >
      {/* ABOUT US MAIN HEADING */}
      <div
        style={{
          marginTop: "30px",
          marginBottom: "35px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "0",
          }}
        >
          About Us
        </h1>
        <div style={{ textAlign: "center", marginTop: "-6px" }}>
          <img alt="" src={"/img/main_heading_below.png"}></img>
        </div>
      </div>
      {/* ABOUT US INFO BELOW */}
      <div style={{ marginBottom: "70px" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "30px 0 0 0",
          }}
        >
          <div
            style={{
              width: "40%",
              height: "34vw",
              overflow: "hidden",
              padding: "20px",
            }}
          >
            <p style={{ fontSize: "24px" }}>
              Based globally PetsWorld.com is one of the reputable and devoted
              website that offers genuine services for your beloved pets. Log in
              directly to PetsWorld.com to find an extensive list of every
              possible pet available worldwide.
            </p>
          </div>
          <div style={{ width: "40%", height: "34vw" }}>
            <img
              alt=""
              src={"/img/home_aboutUs.jpeg"}
              style={{ height: "100%", width: "100%", borderRadius: "10px" }}
            ></img>
          </div>
        </div>
      </div>
      {/* VALUE */}
      <div style={{ marginBottom: "70px" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "0", marginTop: "25px" }}
        >
          Our Values are What Make Us More
        </h1>
        <div style={{ textAlign: "center" }}>
          <img alt="" src={"/img/main_heading_below.png"}></img>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              paddingTop: "20px",
            }}
          >
            <p style={{ fontSize: "24px" }}>
              A company is only as strong as the values it’s built on, and
              PetsWorld’s core values are what make us stand out. We believe in:
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "25px",
              }}
            >
              <div style={{ width: "30%", textAlign: "center" }}>
                <img alt="" src={"/img/aboutUs_values1.jpeg"}></img>
                <h4>Openness & Honesty</h4>
              </div>
              <div style={{ width: "30%", textAlign: "center" }}>
                <img alt="" src={"/img/aboutUs_values2.svg"}></img>
                <h4>Giving Back</h4>
              </div>
              <div style={{ width: "30%", textAlign: "center" }}>
                <img alt="" src={"/img/aboutUs_values3.svg"}></img>
                <h4>Personal Responsibility</h4>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "25px",
              }}
            >
              <div style={{ width: "30%", textAlign: "center" }}>
                <img alt="" src={"/img/aboutUs_values4.svg"}></img>
                <h4>Innovation</h4>
              </div>
              <div style={{ width: "30%", textAlign: "center" }}>
                <img alt="" src={"/img/aboutUs_values5.svg"}></img>
                <h4>Being Passionate</h4>
              </div>
              <div style={{ width: "30%", textAlign: "center" }}>
                <img alt="" src={"/img/aboutUs_values6.svg"}></img>
                <h4>Customer Fixation</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "70px" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "0", marginTop: "25px" }}
        >
          Pet Buying and selling Service
        </h1>
        <div style={{ textAlign: "center" }}>
          <img alt="" src={"/img/main_heading_below.png"}></img>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "30px 0 0 0",
          }}
        >
          <div style={{ width: "40%", height: "34vw" }}>
            <img
              alt=""
              src={"/img/aboutUs_petsBuy.jpeg"}
              style={{ height: "100%", width: "100%", borderRadius: "10px" }}
            ></img>
          </div>
          <div
            style={{
              width: "40%",
              padding: "20px",
            }}
          >
            <h2 style={{ margin: "0" }}>
              How can you buy pet online – at best pet agent – PetsWorld?
            </h2>
            <ol style={{ marginTop: "14px", fontSize: "24px" }}>
              <li>Visit PetsWorld</li>
              <li>Go to Pet Buy and Sell Portal</li>
              {/* <li>Search and filter what you are looking for</li> */}
              <li>Contact the current owner via provided channels</li>
            </ol>
          </div>
        </div>
      </div>
      {/* PET BUYING AND SELLING PARAGRAPH BELOW */}
      <div
        style={{
          marginBottom: "70px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
      {/* Day care for YOUR PET */}
      <div style={{ marginBottom: "70px" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "0", marginTop: "25px" }}
        >
          How to get daycare for your Pet
        </h1>
        <div style={{ textAlign: "center" }}>
          <img alt="" src={"/img/main_heading_below.png"}></img>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80%",
            }}
          >
            <ol style={{ fontSize: "24px", marginTop: "30px" }}>
              <li>Visit PetsWorld</li>
              <li>Go to Pet Daycare</li>
              <li>Fill in The Form</li>
              <li>After the request approval</li>
              <li>Our team will get your pet from your doorstep</li>
            </ol>
          </div>
        </div>
      </div>
      {/* daycare */}
      <div style={{ marginBottom: "70px" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "0", marginTop: "25px" }}
        >
          How PetsWorld Deals with Daycare
        </h1>
        <div style={{ textAlign: "center" }}>
          <img alt="" src={"/img/main_heading_below.png"}></img>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80%",
            }}
          >
            <ol style={{ fontSize: "24px", marginTop: "30px" }}>
              <li>Agent arrives at your door step.</li>
              <li>Prepares your pet for travel.</li>
              <li>Get clearances and precautionary measures.</li>
              <li>Check your pet for health issues.</li>
              <li>Taking best care of your pet.</li>
            </ol>
          </div>
        </div>
      </div>
    </content>
  );
}

export default AboutUs;
