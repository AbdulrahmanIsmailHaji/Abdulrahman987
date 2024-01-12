import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Circle from "./Circle";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I am proficient in a wide range of technologies, showcasing a
                robust skill set that includes expertise in JavaScript and
                TypeScript for building dynamic and efficient web applications.
                My proficiency extends to front-end development with React.js,
                enabling me to create interactive and user-friendly interfaces.
                On the server side, I am skilled in utilizing Node.js and
                Express.js to build scalable and performant back-end solutions.
                Additionally, my experience extends to the powerful Next.js
                framework for server-rendered React applications. I am
                well-versed in database management, particularly with MongoDB,
                and I possess a strong command of styling languages such as CSS,
                Tailwind CSS, and Sass. With a keen eye for design and a solid
                foundation in HTML, I am adept at crafting visually appealing
                and responsive web pages.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <Circle fillPercentage={10} text="HTML" per={90} />
                <Circle fillPercentage={10} text="CSS" per={90} />
                <Circle fillPercentage={15} text="JAVASCRIPT" per={85} />
                <Circle fillPercentage={25} text="TYPESCRIPT" per={75} />
                <Circle fillPercentage={15} text="REACT" per={85} />
                <Circle fillPercentage={35} text="NODE.JS " per={65} />
                <Circle fillPercentage={35} text="EXPRESS.JS" per={65} />
                <Circle fillPercentage={15} text="NEXT.JS" per={85} />
                <Circle fillPercentage={10} text="MONGODB" per={90} />
                <Circle fillPercentage={15} text="TAILWINDCSS" per={85} />
                <Circle fillPercentage={10} text="SASS" per={80} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
