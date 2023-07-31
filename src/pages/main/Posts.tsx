import { collection } from "firebase/firestore";
import { auth, database } from "../../config/firebase";
import { Post as Ipost } from "./Main"
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {
    post: Ipost;
}

export const Post = (props: Props) => {
    const { post } = props;
    const [user] = useAuthState(auth);

    const likesRef = collection(database, "likes");

    const addLike = async () => {
        await addDoc(likesRef, {
            userId: user?.uid,
            postId: post.id
        });

        
    }

    return (
                <div>
                    <div className="title">
                        <h1>{post.title}</h1>
                    </div>
                    <div className="body">
                        <p> {post.description} </p>
                    </div>
                    <div className="footer">
                        <p> @{post.userName} </p>
                        <button onClick={addLike}> &#9825; </button>
                        <p> Likes: </p>
                    </div>
                </div>
    )
}