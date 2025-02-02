import { playwriteGBS, newsreader } from './fonts/fonts';

export default function HomePage() {
  return (
    <section style={heroSection}>
        <h1 style={{ ...heroTitleStyle, fontFamily: playwriteGBS.style.fontFamily }}>Hey hey</h1>
      <h4 style={{ ...largerSubtitleStyle, fontFamily: playwriteGBS.style.fontFamily }}>I'm Matthew Wang</h4>
      <p style={largerTextStyle}>
        I'm currently a computer science major at Arizona State University. I enjoy writing clean, 
        elegant code to create things that help improve people's lives, little by little. <br /><br />
        I also love practicing kung fu, playing the piano, modding mechanical keyboards, and exploring new boba shops.
      </p>
    </section>
  );
}

const heroSection: React.CSSProperties = {
  maxWidth: '900px',
  margin: '0 4rem 6rem auto',// Aligns to the lower right
  textAlign: 'right',
  position: 'absolute',
  bottom: '4.5rem',
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
  marginBottom: '1.5rem',
};

const largerTextStyle: React.CSSProperties = {
  fontSize: '1.75rem',
  lineHeight: '1.8',
  fontWeight: 500,
  maxWidth: '700px',
  textAlign: 'right',
};