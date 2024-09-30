
import { Link } from "react-router-dom";
function Welcome(props) {
    return (
        <section>
            <nav>
            <Link to ="/">Home</Link>
            <Link to="/game">loginform</Link>
            </nav>
            <h1>Hello World <span>{props.name}</span></h1>
            <p>Friday class is always intresting</p>
        </section>
    );
}




export default Welcome