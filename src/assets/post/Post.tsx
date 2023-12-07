import './Post.css'
import {Post as TPost} from "../../services/Post-service.tsx";
export function Post({title,body}: TPost) {
    return (
        <div>
            <h3>Title</h3>
            <p>Body</p>
        </div>
    );
}