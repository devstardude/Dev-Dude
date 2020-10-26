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
      "A Featured MERN Project to Share Places you Visited around the world with Geocoding ( You enter the address and coordinates will be automatically generated ), and Map Rendering by Google.",
    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "REST API",
      "React-hoots",
      "Axios",
      "Multer",
      "Material-UI",
      "Particlejs",
      "Image-upload",
    ],
    image: `${places}`,
    projectLink: "https://myplace009.web.app/",
    githubLink:
      "https://github.com/imdude001/Places-visite-firebase-image-upload",
  },
  {
    name: "Burger Blast",
    description:
      "A React, Redux, and Firebase Project to make delicious burger interactively and submit your order details to the server.",
    tech: [
      "React",
      "Redux",
      "Firebase",
      "React-Lifecycles",
      "Class-based",
      "Redux-thunk",
      "Material-UI",
    ],
    image: `${burger}`,
    projectLink: "https://burger-blast.web.app/",
    githubLink: "https://github.com/imdude001/Burger-Blast",
  },
  {
    name: "Shop Sharer",
    description:
      "An app to make shopping lists from multiple online stores, and share the list with your friends to manage the list from both sides.",
    tech: [
      "React",
      "Firebase",
      "Firestore",
      "React-hooks",
      "Google-Sign-in",
      "Image-upload",
    ],
    image: `${shop}`,
    projectLink: "https://shopsharer009.web.app/",
    githubLink: "https://github.com/imdude001/Shop-Sharer",
  },
  {
    name: "Classy Blogs",
    description:
      "A Featured Blog Post Project to Create, Edit, Delete posts, Also Markdown is also integrated to write a beautiful blog with pictures, links, and gif support",
    tech: [
      "Node",
      "Express",
      "Ejs",
      "MongoDB",
      "Bootstrap",
      "Image-upload",
      "Express-session",
      "Passport",
    ],
    image: `${blog}`,
    projectLink: "https://classyblog.herokuapp.com/",
    githubLink: "https://github.com/imdude001/classy_blog",
  },
  {
    name: "Mailchimp Newsletter",
    description:
      "A simple form to take the user's details and send them to Mailchimp which is a marketing automation platform and an email marketing service. So that you can send emails to your audience.",
    tech: ["Node", "Ejs", "Express", "Bootstrap", "Mailchimp", "Mailchimp-API"],
    image: `${mail}`,
    projectLink: "https://mailchimpnewsletterproject.herokuapp.com/",
    githubLink: "https://github.com/imdude001/newsletter",
  },
  {
    name: "Drum-Beatz / Click-Blip",
    description:
      "A Starter Html, Css and Javascript focused projects, First one can make Drum beats and another one is Simon game",
    tech: ["Html", "Css", "Javascript", "Jquery"],
    image: `${drum}`,
    projectLink: "https://imdude001.github.io/Drum-Beatz/",
    githubLink: "https://github.com/imdude001/Drum-Beatz",
  },
];

export default PROJECTS
