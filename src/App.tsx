import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from "./AppContext/AppProvider";
import Routes from './components/Routes';

function App() {
  return (
    <div>
      <AppProvider siteUrl="http://localhost:3000/">
        <Routes />
      </AppProvider>
    </div>
  );
}

export default App;
