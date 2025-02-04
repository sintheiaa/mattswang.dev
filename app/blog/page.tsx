export default function AboutPage() {
  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>Personal Musings</h1>
      <p style={paragraphStyle}>
        does this work
        
      </p>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  maxWidth: '900px',
  margin: '4rem auto', // Moves it slightly lower
};

const headingStyle: React.CSSProperties = {
  fontSize: '3rem', // Increased heading size
  marginBottom: '2rem',
  fontWeight: 'bold',
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '2rem', // Increased paragraph size significantly
  lineHeight: '1.8', // Slightly increased spacing for readability
  fontWeight: '500', // Medium weight for better visibility
};