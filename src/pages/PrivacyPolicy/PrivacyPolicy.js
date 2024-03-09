import main_heading_below from "../../assets/img/main_heading_below.png";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <content
      style={{
        fontFamily: "ui-sans-serif",
      }}
    >
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
          PRIVACY POLICY
        </h1>
        <div style={{ textAlign: "center", marginTop: "-6px" }}>
          <img alt="" src={main_heading_below}></img>
        </div>
      </div>
      <div
        style={{
          padding: "10px 50px 50px 50px",
          width: "100%",
          fontSize: "18px",
          letterSpacing: "0.3px",
        }}
      >
        <p
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "larger",
            color: "#242323",
          }}
        >
          What Information does Pets World require from our customers?
        </p>
        <p style={{ fontWeight: "300" }}>
          As our website is based on trade and transaction therefore we need to
          collect a certain amount of private information from our customers.
          That helps us to keep a record of our customers that makes us
          trustworthy and dependable for all our customers.
        </p>
        <br></br>
        <p style={{ fontWeight: "300" }}>
          Along with taking your basic information like name, address, email
          address and phone number we also follow your IP address, visited pages
          and downloaded documents. This type of information helps us in keeping
          a record of the total number of people visited and our ratings.
          Moreover, we also keep a track of hackers and fake accounts making
          this website safer for you.
        </p>
        <br></br>
        <p
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "larger",
            color: "#242323",
          }}
        >
          How is your personal information dealt?
        </p>
        <p style={{ fontWeight: "300" }}>
          All the personal information shared by our members during
          transactions, transportation or mating will be held safe and will not
          be passed to any third party. All your emails and personal information
          is handled by our expert advisers who use it only for business
          purposes. Strict Policy:
        </p>
        <br></br>
        <p
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "larger",
            color: "#242323",
          }}
        >
          When you will be able to get deleted your personal information?
        </p>
        <p style={{ fontWeight: "300" }}>
          You are entitled to request us to delete your Personal Information,
          except for the following circumstances:
        </p>
        <ol style={{ fontWeight: "300", paddingLeft: "60px" }}>
          <li>
            Your account has been identified to commit illegal activities.
          </li>
          <li>
            There are completed or ongoing transactions of copyright licensing
            in your account.
          </li>
          <li>Your account has outstanding debts or unreslived disputes.</li>
          <li>
            PetsWorld is requested to keep your Personal Information according
            to relevant laws and regulations or the requirements of judicial or
            administrative authorities.
          </li>
        </ol>
        <br></br>
        <p
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "larger",
            color: "#242323",
          }}
        >
          How you can delete your personal information?
        </p>
        <p style={{ fontWeight: "300" }}>
          You can delete your personal information by contacting pets@world.com.
          You understand that we shall delete your personal information within
          the period regulated by applicable laws after verifying your identity.
        </p>
        <br></br>
        <p
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "larger",
            color: "#242323",
          }}
        >
          How is your personal information dealt?
        </p>
        <p style={{ fontWeight: "300" }}>
          As this private policy is for our user’s safety and good therefore, it
          is requested to agree upon it even when it is updated.
        </p>
        <br></br>
        <p
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "larger",
            color: "#242323",
          }}
        >
          What rights you have over your data?
        </p>
        <p style={{ fontWeight: "300" }}>
          If you have an account on this site/mobile application, or have left
          comments, you can request to receive an exported file of the personal
          data we hold about you, including any data you have provided to us.
          You can also request that we erase any personal data we hold about
          you. This does not include any data we are obliged to keep for
          administrative, legal, or security purposes.
        </p>
        <br></br>
      </div>
    </content>
  );
}

export default PrivacyPolicy;
