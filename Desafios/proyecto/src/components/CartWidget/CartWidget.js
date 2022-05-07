import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function CartWidgets() {
    return(
        <div className="CartWidget">
            <FontAwesomeIcon icon={faCartShopping} />
        </div>
    );
}
