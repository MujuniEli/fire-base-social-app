import { Post as Ipost } from "./Main"

interface Props {
    post: Ipost;
}

export const Post = (props: Props) => {
    const { post } = props;
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
                    </div>
                </div>
    )
}