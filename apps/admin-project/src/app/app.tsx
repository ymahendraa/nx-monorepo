// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Atom } from '@nx-monorepo/atom';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <Atom />
      <NxWelcome title="admin-project" />
    </div>
  );
}

export default App;
