import { NavLink, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div>
      <nav className="flex justify-evenly items-center border-b-2 border-blue-800">
        <NavLink className={({isActive}) => isActive ? 'font-medium text-blue-800' : ''} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-medium text-blue-800' : ''} to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-medium text-blue-800' : ''} to="/accordion">Accordion</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-medium text-blue-800' : ''} to="/load-more">Load More</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-medium text-blue-800' : ''} to="/portfolio">Portfolio</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
