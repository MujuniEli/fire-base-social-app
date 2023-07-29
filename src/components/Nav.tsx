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
                <Link to="/"> Home </Link>
                <Link to="/login"> Login </Link>

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