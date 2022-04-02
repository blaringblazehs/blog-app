const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {/* {console.log("My Blogs- ", blogs)} */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.data.title}</h2>
                    <p>Written by - {blog.data.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>
                        delete blog
                    </button>
                </div>
            ))}
        </div>
    );
};
export default BlogList;
