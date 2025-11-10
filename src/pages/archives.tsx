import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Archives(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="Archives"
      description="Blog archives and timeline">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Archives</h1>
            <p>A chronological view of all blog posts and content.</p>
            
            <div className="margin-top--lg">
              <h2>2025</h2>
              <ul>
                <li><a href="/blog">Recent Blog Posts</a></li>
                <li><a href="/notes">Technical Notes</a></li>
              </ul>
              
              <h2>Categories</h2>
              <ul>
                <li><a href="/blog/tags/systems">Systems</a></li>
                <li><a href="/blog/tags/ai">AI</a></li>
                <li><a href="/blog/tags/robot">Robotics</a></li>
                <li><a href="/blog/tags/english">English</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}