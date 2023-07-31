import { getDocs, collection } from "firebase/firestore";
import { database } from "../config/firebase";
import { useState, useEffect } from "react";

interface Post {
    id: string,
    userId: string,
    title: string,
    userName: string,
    description: string
}

export const  Main = () => {
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    const postRef = collection(database, "posts");

    const getPosts = async () => {
        const data = await getDocs(postRef);
        setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]);
    };

    useEffect(() => {

    }, []);
    return (
            <div>
                <h4>main page</h4>
            </div>
    )
}