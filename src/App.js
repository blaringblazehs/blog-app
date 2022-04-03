import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* Routes makes sure onle one route
             is visible it switches b/w route */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-blog" element={<CreateBlog />} />
                <Route path="/blog/:blogId" element={<BlogDetails />} />
            </Routes>
        </div>
    );
}

export default App;
