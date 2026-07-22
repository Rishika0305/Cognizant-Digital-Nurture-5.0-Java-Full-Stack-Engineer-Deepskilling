import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import "./App.css";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="container">

      {showBooks && (
        <div className="column">
          <BookDetails />
        </div>
      )}

      {showBlogs ? (
        <div className="column">
          <BlogDetails />
        </div>
      ) : null}

      {showCourses && (
        <div className="column">
          <CourseDetails />
        </div>
      )}

    </div>
  );
}

export default App;