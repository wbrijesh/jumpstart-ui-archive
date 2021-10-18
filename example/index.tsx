import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Navbar } from 'jumpstart-ui';
import 'jumpstart-ui/dist/tailwind.css';

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
