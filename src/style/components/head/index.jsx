import { NavLink } from 'react-router-dom';
import './style.css';

const setActive = ({isActive}) => (isActive ? "active" : "");

export function head(){
    return <div className="header">head
        <nav className="nav-container">
            <NavLink to="/news" className={setActive}> Новости</NavLink>
            <NavLink to="/about" className={setActive}> о проекте</NavLink>
            <NavLink to="/contacs" className={setActive}> контакты</NavLink>
        </nav>
    
    </div>
}

export default head;