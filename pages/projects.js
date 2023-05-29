import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <header>
        <nav>
          {/* Navigation links */}
          <Link href="/">
            <p className="navLink">About</p>
          </Link>
          <Link href="/projects">
            <p className="navLink">Projects</p>
          </Link>
          <Link href="/contact">
            <p className="navLink">Contact</p>
          </Link>
        </nav>
      </header>
      <h1>My Projects</h1>

      <section className="project">
        <h2>Hangman</h2>
        <p className="projectDescription">A hangman game made with React.</p>
        <div className="projectLinks">
          <h3>Github:</h3>
          {/* Link to the Hangman project on GitHub */}
          <Link href="https://github.com/Limerque/Hangman">Hangman</Link>
          <br />
          <h3>Heroku:</h3>
          {/* Link to the Hangman project on Heroku */}
          <Link href="https://hangman-game123.herokuapp.com/">Hangman</Link>
        </div>
      </section>

      <section className="project">
        <h2>iTunes Search</h2>
        <p className="projectDescription">
          A website using a frontend and backend to display user searches.
        </p>
        <div className="projectLinks">
          <h3>Github:</h3>
          {/* Link to the iTunes Search project on GitHub */}
          <Link href="https://github.com/Limerque/iTunes">iTunes</Link>
          <br />
          <h3>Heroku:</h3>
          {/* Link to the iTunes Search project on Heroku */}
          <Link href="https://itunes-search.herokuapp.com/">iTunes</Link>
        </div>
      </section>

      <style jsx>{`
        * {
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        }

        div {
          background-color: #ebe6f5;
          padding: 20px;
          margin-bottom: 20px;
        }

        header {
          background-color: #c3e882;
          padding: 10px;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navLink {
          margin-right: 10px;
          cursor: pointer;
          text-decoration: none;
          color: #120801;
          padding: 10px 20px;
          border-radius: 5px;
          background-color: #c3e882;
        }

        .navLink:hover {
          background-color: #268c85;
        }

        h1 {
          color: #333;
          font-size: 24px;
          margin-bottom: 20px;
          text-align: center;
        }

        .project {
          margin-bottom: 20px;
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
        }

        h2 {
          color: #666;
          font-size: 18px;
          margin-bottom: 10px;
        }

        p {
          color: #777;
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .projectLinks {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 10px;
        }

        h3 {
          color: #666;
          font-size: 14px;
          margin-right: 10px;
        }

        .link {
          color: #268c85;
          text-decoration: none;
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
}
