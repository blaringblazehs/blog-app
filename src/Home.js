import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "My new Website",
            body: "loperius ios lsllf s..",
            author: "myself",
            id: 1,
        },
        {
            title: "Welcome to my site",
            body: "loperius ios lsllf s..",
            author: "John",
            id: 2,
        },
        {
            title: "A New blog",
            body: "loperius ios lsllf s..",
            author: "Myself",
            id: 3,
        },
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList
                blogs={blogs.filter((blog) => blog.author === "myself")}
                title="My Blogs"
            />
        </div>
    );
};

export default Home;
