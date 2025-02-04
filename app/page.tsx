import { playwriteGBS } from './fonts/fonts'; // Removed unused 'newsreader'

export default function HomePage() {
  return (
    <section style={heroSection}>
      <h1 style={{ ...heroTitleStyle, fontFamily: playwriteGBS.style.fontFamily }}>Hey hey</h1>
      <h4 style={{ ...largerSubtitleStyle, fontFamily: playwriteGBS.style.fontFamily }}>I&apos;m Matthew Wang</h4> {/* Escaped single quote */}
      <p style={largerTextStyle}>
        <br />I&apos;m currently a computer science major at Arizona State University. I enjoy writing clean, {/* Escaped single quote */}
        elegant code to create things that help brighten people&apos;s lives.<br /><br /> {/* Escaped single quote */}
        I also love practicing kung fu, playing the piano, modding mechanical keyboards, and exploring new boba shops.<br /><br />Thanks for stopping by!
      </p>
    </section>
  );
}

const heroSection: React.CSSProperties = {
  maxWidth: '900px',
  margin: '0 3rem 3rem auto', // Aligns to the lower right
  textAlign: 'right',
  position: 'absolute',
  bottom: '1rem',
  right: '2rem',
};

const heroTitleStyle: React.CSSProperties = {
  fontSize: '6.5rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  fontFamily: 'newsreader'
};

const largerSubtitleStyle: React.CSSProperties = {
  fontSize: '2.75rem',
  fontWeight: 'normal',
};

const largerTextStyle: React.CSSProperties = {
  fontSize: '1.75rem',
  lineHeight: '1.8',
  fontWeight: '500',
};