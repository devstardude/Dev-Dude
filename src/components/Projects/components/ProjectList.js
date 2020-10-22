import drum from "../../../assets/drum.png";
import burger from "../../../assets/burger.png";
import mail from "../../../assets/mail.png";
import blog from "../../../assets/blog.png";
import shop from "../../../assets/shop.png";
import places from "../../../assets/places.png";

const PROJECTS = [
  {
    name: "Place visité",
    description:
      "A Featured Project to Share Places you Visited around the world with Geocoding and Map Rendering by Google",
    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "REST API",
      "React-hoots",
      "Material-UI",
      "Image-upload",
      "Mobile-friendly",
    ],
    image: `${places}`,
  },
  {
    name: "Burger Blast",
    description:
      "A React,Redux and Firebase Project to make delicious burger interactively and submit your order details to the server",
    tech: [
      "React",
      "Redux",
      "Firebase",
      "React-Lifecycles",
      "Class-based",
      "Redux-thunk",
      "Material-UI",
      "Mobile-friendly",
    ],
    image: `${burger}`,
  },
  {
    name: "Shop Sharer",
    description:
      "An app to make shopping lists from multiple online store, and Share the list with your friends to manage the list from both side",
    tech: ["React", "Firebase", "Firestore","React-hooks","Google-SignIn", "Image-upload"],
    image: `${shop}`,
  },
  {
    name: "Classy Blogs",
    description:
      "A Featured Blog Post Project to Create, Edit, Delte posts, Also Markdown is also integrated to write a beautiful blog with pictures,links and gif support",
    tech: [
      "Node",
      "Express",
      "MongoDB",
      "Bootstrap",
      "Image-upload",
      "Express-session",
    ],
    image: `${blog}`,
  },
  {
    name: "Mailchimp Newsletter",
    description:
      "A simple form to take the users details and send them to Mailchimp which is a marketing automation platform and an email marketing service.",
    tech: ["Node", "Express", "Bootstrap", "Mailchimp", "Mailchimp-API"],
    image: `${mail}`,
  },
  {
    name: "Drum-Beatz / Click-Blip",
    description: "A Starter Html,Css and Javascript focuses projects, First one can make Drum beats and other one is Simon game",
    tech: ["Html","css","javascript","jquery"],
    image: `${drum}`,
  },
];

export default PROJECTS
