
import { Link } from "react-router-dom";
const NoPage = () => {
    return (
        <div className="no-page">
            <h1>Page not found</h1>
            <Link className="btn-regular" to="/">Go to Home</Link>
        </div>
    )
}

export default NoPage;