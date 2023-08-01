import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, database } from "../../config/firebase";
import { Post as Ipost } from "./Main"
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props {
    post: Ipost;
}

interface Like {
    userId: string;
}

export const Post = (props: Props) => {
    const { post } = props;
    const [user] = useAuthState(auth);

    const [likes, setLikes] = useState<Like[] | null>(null)

    const likesRef = collection(database, "likes");

    const likesDoc = query(likesRef, where("postId", "==", post.id))

    const getLikes = async () => {
       const data = await getDocs(likesDoc)
       setLikes(data.docs.map((doc) => ({ userId: doc.data().userId })));
    }

    const addLike = async () => {
        await addDoc(likesRef, {
            userId: user?.uid,
            postId: post.id
        });
    };

    const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

    useEffect(() => {
        getLikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        <button onClick={addLike}> {hasUserLiked ? <>&#x1F44E;</> : <>&#9825;</> } </button>
                        {likes && <p> Likes: {likes?.length} </p>}
                    </div>
                </div>
    )
}