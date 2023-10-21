import Example from './components/Example';
import Another from './components/Another';
export default function App() {
  return (
    <div>
      <h1>Hello, developer</h1>
      <p>
        This document was generated using JSX as template engine without using
        React or Virtual DOM
      </p>
      <h2>Using a custom component:</h2>
      <Example onClick={() => console.log('clicked')} test={'foo'} />
      <h2>Same component used many times:</h2>
      <Another />
      <Another />
      <Another />
    </div>
  );
}import Example from './components/Example';
import Another from './components/Another';
export default function App() {
  return (
    <div>
      <h1>Hello, developer</h1>
      <p>
        This document was generated using JSX as template engine without using
        React or Virtual DOM
      </p>
      <h2>Using a custom component:</h2>
      <Example onClick={() => console.log('clicked')} test={'foo'} />
    </div>
  );
}