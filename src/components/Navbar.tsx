import { useState } from 'react';
import Logo from '../assets/logo.png'
import { accounts } from '../types/data';
import { LoginProps } from '../types/types';


const Navbar: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [pin, setPin] = useState('');

    const handleLogin = () => {
        const account = accounts.find(
            acc => acc.username === username && acc.pin === Number(pin)
        );

        if (account) {
            onLogin(account);
        } else {
            alert("Invalid credentials")
        }
    }
    return (
      <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100">
        <p className="text-xl font-medium mb-2 md:mb-0">Log in to get started</p>
        <img src={Logo} alt="Logo" className="h-20 mb-2 md:mb-0" />
        <form className="flex flex-col md:flex-row" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="user"
            className="border p-2 rounded-full text-center mr-0 mb-2 md:mb-0 md:mr-4 focus:outline-none focus:border-gray-400"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="PIN"
            className="border p-2 rounded-full text-center mr-0 md:mr-4 focus:outline-none focus:border-gray-400"
            maxLength={4}
            onChange={(e) => setPin(e.target.value)}
          />
          <button className="text-3xl transition-colors duration-300 hover:text-gray-500">&rarr;</button>
        </form>
      </nav>
    );
  }
  
  export default Navbar;
  