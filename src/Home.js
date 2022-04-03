import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "./firebase";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const blogRef = collection(db, "blogs");
    // const [blogs, setBlogs] = useState([
    //     {
    //         title: "My new Website",
    //         body: "loperius ios lsllf s..",
    //         author: "myself",
    //         id: 1,
    //     },
    //     {
    //         title: "Welcome to my site",
    //         body: "loperius ios lsllf s..",
    //         author: "John",
    //         id: 2,
    //     },
    // ]);

    useEffect(() => {
        getDocs(blogRef)
            .then((res) => {
                const blogs = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setBlogs(blogs);
                setIsPending(false);
            })
            .catch((err) => console.log(err.message));
    }, []);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };
    return (
        <div className="content">
            {console.log("Home blogs", blogs)}
            {isPending && <div>Loading...</div>}
            {blogs && (
                <BlogList
                    blogs={blogs}
                    title="All Blogs"
                    isPending={isPending}
                    handleDelete={handleDelete}
                />
            )}
        </div>
    );
};

export default Home;
