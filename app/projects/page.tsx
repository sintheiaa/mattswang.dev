import { playwriteGBS } from '../fonts/fonts';

export default function ProjectsPage() {
  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>Projects</h1>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <h2 style={subHeadingStyle}>Melody Memo</h2>
          <p style={{ ...textStyle, fontFamily: playwriteGBS.style.fontFamily }}>
            An app that gives you a mini-Spotify wrapped at the end of every month (in development)
          </p>
        </li>
        <li style={listItemStyle}>
          <h2 style={subHeadingStyle}>JARVIS-chibi</h2>
          <p style={{ ...textStyle, fontFamily: playwriteGBS.style.fontFamily }}>
            A little helper that helps you do things better and easier on the PC (in development)
          </p>
        </li>
        <li style={listItemStyle}>
          <h2 style={subHeadingStyle}>The Pen Gym</h2>
          <p style={{ ...textStyle, fontFamily: playwriteGBS.style.fontFamily }}>
            A website that provides daily short writing challenges to get the creative juices flowing 
            (to be released May 2025)
          </p>
        </li>
      </ul>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  maxWidth: '900px',
  margin: '3rem auto', // Moves the section lower
};

const headingStyle: React.CSSProperties = {
  fontSize: '3rem', // Increased font size
  marginBottom: '2rem',
  fontWeight: 'bold',
};

const subHeadingStyle: React.CSSProperties = {
  fontSize: '2.5rem', // Increased font size for project titles
  marginBottom: '0.5rem',
};

const listStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
};

const listItemStyle: React.CSSProperties = {
  marginBottom: '3rem', // Increased spacing between projects
};

const textStyle: React.CSSProperties = {
  fontSize: '1.5rem', // Increased text size
  lineHeight: '1.6',
  color: 'rgba(255, 255, 255, 0.7)', // Soft white with reduced opacity
  fontWeight: 300
};