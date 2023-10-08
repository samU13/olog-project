import { Logo } from "./Logo";
import { useState } from "react";
function OptionItems({children}) {
  return <div className="option-items">{children}</div>;
}

export function NavBar({ children }) {
  const [itemType, setItemType] = useState('movies');
  return (
    <nav className={`nav-bar nav-bar-${itemType}`}>
      <Logo />
      <OptionItems>
        <div className="option-item option-item-movies" onClick={()=>setItemType('movies')}>Movies</div>
        <div className="option-item option-item-series" onClick={()=>setItemType('series')}>Series</div>
        <div className="option-item option-item-games" onClick={()=>setItemType('games')}>Games</div>
      </OptionItems>

      {children}
     
    </nav>
  );
}
