import './App.css';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <header>
          <Profile />
        </header>
        <CoursesWrap />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

function Profile() {
  return (
    <div class="Profile">
      <div class="ProfileImage"><img src="https://avatars.githubusercontent.com/u/11271706?v=4&size=64" alt="Profile"/></div>
      <div class="ProfileMenu"><a href="#">My Profile</a><a href="#">Logout</a></div>
    </div>
  );
}


function CoursesWrap() {
  return (
    <div className="CoursesWrap">
      <CourseBlock />
      <CourseBlock />
      <CourseBlock />
      <CourseBlock />
      <CourseBlock />
      <CourseBlock />
      <CourseBlock />
      <CourseBlock />
    </div>
  );
}

function CourseBlock() {
  return (
    <div className="CourseBlock">
      <img src="https://i.imgur.com/8XcCjF1.jpeg" alt="Course" />
      <h2>J.R.R. Tolkien World-building</h2>
      <p>Tests 123 123</p>
      <div className="CourseFooter">
        <div className="CourseFooterTags">
          <div className="Tag">
            Fiction
          </div>
          <div className="Tag" style={{backgroundColor:"rgb(55 108 4)"}}>
            Writing
          </div>
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
    <div className="Footer">
      © 2024
    </div>
  );
}


export default App;
