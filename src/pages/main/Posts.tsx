import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, database } from "../../config/firebase";
import { Post as Ipost } from "./Main"
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

interface Props {
    post: Ipost;
}

export const Post = (props: Props) => {
    const { post } = props;
    const [user] = useAuthState(auth);

    const likesRef = collection(database, "likes");

    const likesDoc = query(likesRef, where("postId", "==", post.id))

    const getLikes = async () => {
       const data = await getDocs(likesDoc)
       console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }

    const addLike = async () => {
        await addDoc(likesRef, {
            userId: user?.uid,
            postId: post.id
        });
    };

    useEffect(() => {
        getLikes();
    }, []);

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