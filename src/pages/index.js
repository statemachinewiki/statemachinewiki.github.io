import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="State Machine MC Server"
      description="Documentation and wiki for the State Machine Minecraft Server"
    >
      {/* Hero section */}
      <header
        style={{
          padding: '4rem 1rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          State Machine MC Server
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: 600, margin: '0 auto' }}>
          Technical documentation, architecture notes, and operational guides
          for the State Machine–based Minecraft server.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
          >
            🤩 Start Exploring!
          </Link>
        </div>
      </header>

      {/* Feature cards */}
      <main
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          padding: '2rem 1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >
        <Feature
          title="🧠 One"
          description="Understand construction..."
        />
        <Feature
          title="⚙️ Two"
          description="Understand construction..."
        />
        <Feature
          title="🧪 Three"
          description="Understand construction..."
        />
      </main>
    </Layout>
  );
}

function Feature({ title, description }) {
  return (
    <div
      style={{
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid var(--ifm-color-emphasis-200)',
        backgroundColor: 'var(--ifm-background-surface-color)',
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
