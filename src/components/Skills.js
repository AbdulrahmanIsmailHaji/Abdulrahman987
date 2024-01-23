import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandSass } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
                <Circle
                  className="html-icon"
                  fillPercentage={0}
                  text="HTML"
                  icon={<IoLogoHtml5 />}
                />
                <Circle
                  className="css-icon"
                  fillPercentage={0}
                  text="CSS"
                  icon={<IoLogoCss3 />}
                />
                <Circle
                  className="js-icon"
                  fillPercentage={0}
                  text="JAVASCRIPT"
                  icon={<FaJs />}
                />
                <Circle
                  className="ts-icon"
                  fillPercentage={0}
                  text="TYPESCRIPT"
                  icon={<SiTypescript />}
                />
                <Circle
                  className="react-icon"
                  fillPercentage={0}
                  text="REACT"
                  icon={<FaReact />}
                />
                <Circle
                  className="node-icon"
                  fillPercentage={0}
                  text="NODE.JS "
                  icon={<FaNodeJs />}
                />
                <Circle
                  className="exp-icon"
                  fillPercentage={0}
                  text="EXPRESS.JS"
                  icon={<SiExpress />}
                />
                <Circle
                  className="next-icon"
                  fillPercentage={0}
                  text="NEXT.JS"
                  icon={<TbBrandNextjs />}
                />
                <Circle
                  className="mongo-icon"
                  fillPercentage={0}
                  text="MONGODB"
                  icon={<SiMongodb />}
                />
                <Circle
                  className="tail-icon"
                  fillPercentage={0}
                  text="TAILWINDCSS"
                  icon={<SiTailwindcss />}
                />
                <Circle
                  className="sass-icon"
                  fillPercentage={0}
                  text="SASS"
                  icon={<TbBrandSass />}
                />
                <Circle
                  className="red-icon"
                  fillPercentage={0}
                  text="REACT REDUX"
                  icon={<SiRedux />}
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
