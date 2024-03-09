import blogImg1 from "../../assets/blogImg/blog1.jpeg";
import blogImg2 from "../../assets/blogImg/blog2.jpeg";
import blogImg3 from "../../assets/blogImg/blog3.jpeg";
import blogImg4 from "../../assets/blogImg/blog4.jpeg";
import blogImg5 from "../../assets/blogImg/blog5.jpeg";
import blogImg6 from "../../assets/blogImg/blog6.jpeg";
import blogImg7 from "../../assets/blogImg/blog7.jpeg";
import blogImg8 from "../../assets/blogImg/blog8.jpeg";
import blogImg9 from "../../assets/blogImg/blog9.jpeg";
import main_heading_below from "../../assets/img/main_heading_below.png";

function Card(props) {
  return (
    <>
      <div style={{ width: "30%" }}>
        <img
          style={{
            width: "100%",
            borderRadius: "10px",
            height: "22vw",
            cursor: "pointer",
          }}
          src={props.img}
          alt=""
        ></img>
        <h5
          style={{
            margin: "0",
            padding: "10px",
            paddingBottom: "0",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            webkitBoxOrient: "vertical",
          }}
        >
          {props.heading}
        </h5>
        <p
          style={{
            padding: "10px",
            paddingBottom: "0",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            webkitBoxOrient: "vertical",
          }}
        >
          {props.desc}
        </p>
      </div>
    </>
  );
}

function Blogs() {
  // const shoot = (a) => {
  //   alert(a);
  // };

  return (
    <content
      // onClick={() => shoot("Goal!")}
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
          Pets World Blogs
        </h1>
        <div style={{ textAlign: "center", marginTop: "-6px" }}>
          <img alt="" src={main_heading_below}></img>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          justifyContent: "space-evenly",
          margin: "0",
          marginBottom: "25px",
        }}
        className="row"
      >
        <Card
          img={blogImg1}
          heading="Pets and Mental Well-being"
          desc="Ever since the pandemic broke out, we have been cooped up in our
            homes. This has triggered several mental health issues, like anxiety
            to depression. Although there are a slew of solutions available, one
            of the best ways to uplift your mood and fill your life with happy
            hormones is to bring a pet home."
        />
        <Card
          img={blogImg2}
          heading="Pet care post WFH"
          desc="During the pandemic, pet owners faced the challenge of keeping their
          pets safe and comfortable at home. With the world turning upside
          down, navigating through these hurdles was not-so-simple, but it
          also gave rise to some silver linings. For one, pet parents got more
          time to spend with their furry babies, as they worked from home!"
        />
        <Card
          img={blogImg3}
          heading="Pup training 101: Make a note of these tips and tricks to do the
          best you can"
          desc="There is so much information floating around the web, when it comes
          to your furry friends. When you get a dog home, you also have to pay
          attention to their training. How do you know what’s right or wrong
          then, given there are so many training guides online. Fret not, we
          are here to give you insights on how to train your pup well. It’s
          important to remember one thing - do not ever resort to negative
          reinforcement, even if you feel they are not obedient."
        />
      </div>
      <div
        style={{
          width: "100%",
          justifyContent: "space-evenly",
          margin: "0",
          marginBottom: "25px",
        }}
        className="row"
      >
        <Card
          img={blogImg4}
          heading="It’s time to make this Holi the best one for you and your pet.
          Excited? Let’s tell you how"
          desc="It’s that time of the year again - yes, you guessed it right, it’s
          Holi! And while the festival of colours brings in joy and cheer in
          people’s lives, it can be a hard time for our furry friends. That’s
          why it is important to understand how to protect them, so that they
          can enjoy the festivities as much as you!"
        />
        <Card
          img={blogImg5}
          heading="Becoming a first time dog-owner: All you need to know"
          desc="Whether you’re a college student or senior citizen, bringing your
          first dog is a momentous and exciting experience. No doubt you’ve
          got your new best friend’s food and bowls, bag of treats, new leash
          and collar, and shiny toys ready to go. But fun and kibble aren’t
          the only responsibilities of being a good pet owner."
        />
        <Card
          img={blogImg6}
          heading="Here’s how you can take care of your pet during winter"
          desc="Does your dog love the winter or would he/she rather cuddle up on
          the couch under a cozy blanket? Either way, you should be prepared
          to protect her when she ventures out into the elements. Many dog
          owners live with the misconception that because their pets have a
          coat of fur, they can tolerate the cold better than humans. This
          isn’t necessarily the case. Like us, these fur-coated creatures are
          used to the warmth of indoor shelter and cold weather can be as hard
          on them as it is on us humans. Whatever your viewpoint on winter,
          one thing remains certain: it’s a time when our beloved pets need a
          little extra care."
        />
      </div>
      <div
        style={{
          width: "100%",
          justifyContent: "space-evenly",
          margin: "0",
          marginBottom: "25px",
        }}
        className="row"
      >
        <Card
          img={blogImg7}
          heading="DIARRHEA IN DOGS"
          desc="Diarrhea in dogs is simple and common problem which can be wrongly
          confused with many other abnormal conditions. Dog may retard health
          condition within days for no apparent reason. Every time you watch
          your dog, it is going bad and bad. The first and immediate step is
          to consult your vet and take an expert opinion. Note out please,
          diarrhea is not life taking condition but it’s bad management may
          lead to worse condition and that’s with no reason .It’s a right job
          to manage the condition in a quick and professional way."
        />
        <Card
          img={blogImg8}
          heading="MANGE IN DOGS"
          desc="Mange in dogs is simple and common problem which can be wrongly
          confused with many other abnormal conditions. Dog may retard health
          condition within days for no apparent reason. Every time you watch
          your dog, it is going bad and bad. The first and immediate step is
          to consult your vet and take an expert opinion. Note out please,
          mange is not life taking condition but it’s bad management may lead
          to worse condition and that’s with no reason .It’s a right job to
          manage the condition in a quick and professional way."
        />
        <Card
          img={blogImg9}
          heading="ALLERGY IN DOGS"
          desc="Allergy in dogs is simple and common problem which can be wrongly
          confused with many other abnormal conditions. Dog may retard health
          condition within days for no apparent reason. Every time you watch
          your dog, it is going bad and bad. The first and immediate step is
          to consult your vet and take an expert opinion. Note out please,
          allergy is not life taking condition but it’s bad management may
          lead to worse condition and that’s with no reason .It’s a right job
          to manage the condition in a quick and professional way."
        />
      </div>
    </content>
  );
}

export default Blogs;
