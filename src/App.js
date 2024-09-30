import './App.css';
import { GetCourses } from './components/LoadCourses'


function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <header>
          <Profile />
          <Title />
        </header>
        <CoursesWrap />
      </div>
      <Footer />
    </div>
  );
}

function Profile() {
  return (
    <div className="Profile">
      <div className="ProfileImage"><img src="https://avatars.githubusercontent.com/u/11271706?v=4&size=64" alt="Profile" /></div>
      <div className="ProfileMenu"><a href="#">My Profile</a><a href="#">Logout</a></div>
    </div>
  );
}

function Title() {
  return (
    <div className="Title">
      <h1><a href="#">Courses</a></h1>
    </div>
  );
}

function CoursesWrap() {
  const courses = GetCourses();

  return (
    <div className="CoursesWrap">
      {courses.map((course, index) => (
        <CourseBlock
          key={index}
          course={{
            name: course.name,
            description: course.description,
            imageLink: course.imageLink,
            tags: course.tags,
          }}
        />
      ))}
    </div>
  );
}

function CourseBlock({ course }) {
  return (
    <div className="CourseBlock">
      <img src={course.imageLink} alt="Course" />
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      <div className="CourseFooter">
        <div className="CourseFooterTags">
          {course.tags.map((tag, index) => (
            <div key={index} className="Tag" style={{ backgroundColor: tag.color }}>
              {tag.name}
            </div>
          ))}
        </div>
        <div>
          <button>Buy Course</button>
        </div>
      </div>
    </div>
  );
}


function Footer() {
  return (
    <footer>
      <div className="Footer">
        © 2024
      </div>
    </footer>
  );
}


export default App;
