import {Data} from '../Data';
import '../styles/MenuCard.css';
function MenuCard({name, address,rating,costForTwo,delivery,imageId}){
  return(
        <div>
                    <div className="card">
                      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId}
                        alt="resto_image"
                      />
                      <h1 className="menu-name">{name}</h1>
                      <p className="resto-address">{address}</p>
                      <div className="menu-details">
                      <p className="resto-rating">✰{rating}</p>
                      <p className="menu-people">{costForTwo}</p>
                      <p className="mune-deliver-time">{delivery} Minutes</p>
                    </div>
                    </div>

                  </div>
    )
}
export default MenuCard;