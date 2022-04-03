import { useParams } from "react-router-dom";
import db from "./firebase";
import { onSnapshot } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

const BlogDetails = () => {
    const [blog, setBlog] = useState({});
    const { blogId } = useParams();
    useEffect(() => {
        const docRef = doc(db, "blogs", blogId);
        console.log("this is post id:", blogId);
        // getDoc(docRef).then((doc) => {
        //     console.log(doc.data().data);
        //     setBlog(doc.data().data);
        // });
        onSnapshot(docRef, (doc) => {
            setBlog(doc.data().data);
        });
        console.log(blog);
        // setPost(docSnap.data.data());
    }, []);

    return (
        <div className="blog-details">
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
        </div>
    );
};
export default BlogDetails;
