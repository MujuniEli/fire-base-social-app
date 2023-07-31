import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { addDoc, collection } from "firebase/firestore"
import { auth, database } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate  } from "react-router-dom";

interface CreatFormData {
    title: string;
    description: string;
}


export const CreateForm = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("Post title is missing."),
        description: yup.string().required("Please add your post here"),
    });

    const { register, handleSubmit, formState: {errors} } = useForm<CreatFormData>({
        resolver: yupResolver(schema),
    });

    const postsRef = collection(database, "posts");

    const onCreatePost = async (data: CreatFormData) => {
        await addDoc(postsRef, {
            title: data.title,
            description: data.description,
            username: user?.displayName,
            userId: user?.uid, 
        });

        navigate("/")
    };

    return (
                <div>
                    <form onSubmit={handleSubmit(onCreatePost)}>
                        <input placeholder="Title..." {...register("title")}/>
                        <p style={{color:"red"}}> {errors.title?.message} </p>
                        <textarea placeholder="Description..." {...register("description")}/>
                        <p style={{color:"red"}}> {errors.description?.message} </p>
                        <input type="submit" />
                    </form>
                </div>
    )
}