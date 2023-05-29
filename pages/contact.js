import Link from "next/link";

export default function Contact() {
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
      <h1>Contact Me</h1>
      <hr />
      <h2>Email:</h2>
      <p>vanrooyenlimerique@gmail.com</p>
      <h2>Cellphone number:</h2>
      <p>072 726 0195</p>
      <h2>Address:</h2>
      <p>Kempton Park, Gauteng</p>
      <style jsx>{`
        * {
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        }

        div {
          background-color: #ebe6f5;
          padding: 20px;
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
          margin-bottom: 0;
        }

        hr {
          border: none;
          border-top: 1px solid #ccc;
          margin: 20px 0;
        }

        h2 {
          color: #666;
          font-size: 18px;
          margin-top: 20px;
        }

        p {
          color: #777;
          line-height: 1.5;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
