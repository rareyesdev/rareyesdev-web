import { FunctionComponent, h } from 'preact';
import { Link } from 'wouter-preact';
import { usePageTitle } from '../../utils/usePageTitle';

const Notfound: FunctionComponent = () => {
  usePageTitle('Not Found');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Error 404</h1>
      <p>That page doesn't exist.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default Notfound;
