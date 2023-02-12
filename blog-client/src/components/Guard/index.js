import { Navigate } from 'react-router-dom';
import { useGlobalState } from '../GlobalStateProvider';

const Guard = ({ name, children }) => {
    const [state, dispatch] = useGlobalState();
    if (!state.isUserLoggedIn && (name !== "Home" && name !== "Login")) {
        return <Navigate to="/" replace />;
    } else if (state.isUserLoggedIn && (name === "Home" || name === "Login")) {
        return <Navigate to="/blogs" replace />;
    }
    return children;
};

export default Guard;