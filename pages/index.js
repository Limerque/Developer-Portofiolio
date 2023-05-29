import Link from "next/link";

export default function About() {
  return (
    <div>
      <header>
        <nav>
          {/* Navigation link for the "About" page */}
          <Link href="/">
            <p className="navLink">About</p>
          </Link>
          {/* Navigation link for the "Projects" page */}
          <Link href="/projects">
            <p className="navLink">Projects</p>
          </Link>
          {/* Navigation link for the "Contact" page */}
          <Link href="/contact">
            <p className="navLink">Contact</p>
          </Link>
        </nav>
      </header>
      <h1>About Me</h1>
      <h2>Who am I?</h2>
      {/* Image of the person */}
      <img src="/public/Me.jpg" alt="Limerique"></img>
      <hr />

      <p>
        {/* Description of the person */}I am a 19-year-old student at
        HyperionDev. I discovered my love for creating websites in school and
        with the help of Codecademy. I taught myself the basics of web
        development. From there, I decided to pursue my passion for coding and
        enrolled in HyperionDev's Full Stack Web Development Bootcamp. I am
        excited to continue honing my skills and gaining real-world experience
        in the field of web development.
      </p>

      <h2>Work experience</h2>
      <hr />

      <p>
        {/* Description of the person's work experience */}I currently don't
        have any work experience. However, I am eager to gain experience in the
        field of web development and have completed several projects on my own
        to build up my portfolio. I am also open to internship opportunities and
        am excited to learn from experienced professionals in the industry. I am
        a fast learner, and I am confident in my ability to adapt to new
        environments and technologies. I am committed to working hard and
        contributing to any team I am a part of.
      </p>

      <h2 className="education">Education</h2>
      <hr />

      <h3 className="course">High School</h3>
      <p>NSC certificate</p>
      <ul className="subjects">
        {/* List of subjects studied in high school */}
        <li>Afrikaans</li>
        <li>English</li>
        <li>Life Orientation</li>
        <li>Pure Math</li>
        <li>Physics</li>
        <li>Accounting</li>
        <li>Computer Application Technology</li>
      </ul>

      <hr />

      <h3 className="course">Full-stack Web Developer</h3>
      <h4 className="educationPlace">HyperionDev</h4>
      <p className="educationDate">Studied: 13/01/2023-13/04/2023</p>

      <style jsx>{`
        * {
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        }

        div {
          background-color: #ebe6f5;
        }

        header {
          background-color: #c3e882;
          padding: 10px;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #c3e882;
        }

        .navLink {
          margin-right: 10px;
          cursor: pointer;
          text-decoration: none;
          color: #120801;
          padding: 10px 20px;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .navLink:hover {
          background-color: #268c85;
        }

        h1 {
          color: #333;
          font-size: 24px;
          margin-bottom: 20px;
        }

        h2 {
          color: #666;
          font-size: 18px;
        }

        img {
          width: 300px;
          height: 300px;
          margin-bottom: 20px;
        }

        hr {
          border: none;
          border-top: 1px solid #ccc;
          margin: 20px 0;
        }

        p {
          color: #777;
          line-height: 1.5;
        }

        ul {
          list-style: disc;
          padding-left: 20px;
        }

        .education {
          color: #333;
          font-size: 20px;
        }

        .educationItem {
          margin-bottom: 20px;
        }

        .educationItem h3 {
          color: #666;
          font-size: 16px;
          margin-bottom: 5px;
        }

        .educationItem h4 {
          color: #777;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .educationDate {
          color: #777;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}
