import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

export const Nav = () => {
    const [user] = useAuthState(auth);

    const userSignOut = async () => {
        await signOut(auth);
    };
    return (
            <div className="nav">
                <div className="navlinks">
                    <Link to="/"> Home </Link>
                    {!user ? <Link to="/login"> Login </Link> : <Link to="/createpost"> Create Post </Link> }
                    
                </div>
                <div>
                    { user && (
                        <>
                    <p> {user?.displayName} </p>
                    <img src={auth.currentUser?.photoURL || ""} alt="" height={30} width={30}/>
                    <button onClick={userSignOut}> Log Out </button>
                        </>
                    )}
                </div>
            </div>
    )
}