import { NavLink, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="p-3">
      <nav className="flex justify-evenly items-center border-b-2 border-cyan-800">
        <NavLink className={({isActive}) => isActive ? 'font-medium text-cyan-100' : ''} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-medium text-cyan-100' : ''} to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-medium text-cyan-100' : ''} to="/accordion">Accordion</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-medium text-cyan-100' : ''} to="/load-more">Load More</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-medium text-cyan-100' : ''} to="/portfolio">Portfolio</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-medium text-cyan-100' : ''} to="/posts">Posts</NavLink>
        <NavLink className={({isActive}) => isActive ? 'font-medium text-cyan-100' : ''} to="/tweet">Tweet</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
