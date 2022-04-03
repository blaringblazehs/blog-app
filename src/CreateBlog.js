import { addDoc, collection } from "firebase/firestore";
import db from "./firebase";
import { useFormInput } from "./hooks";
const CreateBlog = () => {
    const title = useFormInput("");
    const author = useFormInput("");
    const content = useFormInput("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log("title", title);
        console.log("author", author);
        console.log("content", content);
        //saving data to firestore
        const postRef = collection(db, "blogs");
        const data = {
            title: title.value,
            body: content.value,
            author: author.value,
            createdAt: new Date(),
        };
        addDoc(postRef, { data })
            .then((res) => {
                console.log(res);
                alert("Blog Saved");
            })
            .catch((err) => {
                console.log(err);
            });

        // db.collection("posts").add({
        //     title,
        //     content,
        //     subTitle,
        //     createdAt: new Date(),
        // });
    }
    return (
        <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Title</label>
                    <input {...title} />
                </div>
                <div className="form-field">
                    <label>Author Name</label>
                    <input {...author} />
                </div>
                <div className="form-field">
                    <label>Content</label>
                    <textarea {...content}></textarea>
                </div>
                <button className="create-post-btn">Create Post</button>
            </form>
        </div>
    );
};
export default CreateBlog;
