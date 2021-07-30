import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="headerDiv">
            <div className="elementsDiv">
            <h1>Manage Subscription</h1>
            
            <NavLink  to="/vl/templates">Templates</NavLink>
            {props.checkedNum.length <= 0 ?
            <NavLink  to="/vl/products">Products</NavLink>
            : 
            <NavLink  to="/vl/products">Products({props.checkedNum.length})</NavLink> 
            }
            </div>
            <div className="borderDiv"></div>
        </div>
    )
}
export default Header;