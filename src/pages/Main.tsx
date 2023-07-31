import { getDocs, collection } from "firebase/firestore";
import { database } from "../config/firebase";

export const  Main = () => {
    const [postsList, setPostsList] = useState(null)
    const postRef = collection(database, "posts");
    return (
            <div>
                <h4>main page</h4>
            </div>
    )
}