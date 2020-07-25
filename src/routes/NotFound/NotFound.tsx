import { FunctionComponent, h } from 'preact';
import { Link } from 'preact-router/match';

const Notfound: FunctionComponent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Error 404</h1>
      <p>That page doesn't exist.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default Notfound;
