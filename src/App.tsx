import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from "./AppContext/AppProvider";
import Routes from './components/Routes';
import './components/Style.css';

function App() {
  return (
    <AppProvider siteUrl="http://localhost:3000/">
      <Routes />
    </AppProvider>
  );
}

export default App;
