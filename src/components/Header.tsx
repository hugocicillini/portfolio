import Links from './Links';

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center border-b border-white/10">
      <img
        src="/logo.png"
        alt="Logo"
        className="lg:w-16 w-12 lg:ml-12 animate-logo"
      />
      <Links />
    </header>
  );
};

export default Header;
