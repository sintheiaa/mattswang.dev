'use client';

import Link from 'next/link';
import React from 'react';
import { newsreader } from '../fonts/fonts';

export default function Navbar() {
  return (
    <nav className={`${newsreader.className} antialiased`} style={navStyle}>
      <div style={navContainer}>
        <Link href="/" passHref legacyBehavior>
          <a style={linkStyle}>Home</a>
        </Link>
        <div style={linkContainer}>
          <Link href="/projects" passHref legacyBehavior>
            <a style={linkStyle}>Projects</a>
          </Link>
          <div style={spacer} /> {/* Adds extra spacing */}
          <Link href="/blog" passHref legacyBehavior>
            <a style={linkStyle}>Blog</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

const navStyle: React.CSSProperties = {
  padding: '1rem 0',
};

const navContainer: React.CSSProperties = {
  maxWidth: '100vw',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '6rem',
};

const linkContainer: React.CSSProperties = {
  display: 'flex',
  gap: '3rem', // Increased spacing between links
  marginRight: '6rem', // Aligns Blog with the text below
  marginLeft: '6rem',
};

const spacer: React.CSSProperties = {
  width: '0.1rem', 
};

const linkStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 'bold',
};