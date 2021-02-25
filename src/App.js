import logo from './logo.svg';
import './App.css';
import consola from '../node_modules/consola';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import './css/Header.css';
import './css/Body.css'

const data = {
  name: 'HappyShoes',
  logo: 'https://logoipsum.com/logo/logo-16.svg',
  company: 'SZH Inc.',
  cover: 'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  title: 'Welcome to our brand new HappyShoes website!',
  description: 'Lorem ipsum velit cillum excepteur adipisicing voluptate mollit. Laboris deserunt reprehenderit commodo id id minim non voluptate irure pariatur nulla.',
}

function App() {
  return (
    <div className="App">
      <Header logo={data.logo} name={data.name}/>
      <Body cover={data.cover} title={data.title} description={data.description} />
      <Footer company={data.company} />
    </div>
  );
}



export default App;
