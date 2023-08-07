import { useState } from 'react';

import Project from './components/Project';

function Portfolio() {
  const [work, setWork] = useState([
    {
      name: 'Tech Blog',
      deployed_url: 'http://google.com'
    },
    {
      name: 'Employee Tracker',
      deployed_url: 'http://google.com'
    },
    {
      name: 'Ecommerce Backend',
      deployed_url: 'http://google.com'
    }
  ]);

  return (
    <>
      <h1>Portfolio Page</h1>

      {work.map((proj, i) => (
        <Project key={i} name={proj.name} deployed_url={proj.deployed_url} />
      ))}
    </>
  )
}

export default Portfolio;