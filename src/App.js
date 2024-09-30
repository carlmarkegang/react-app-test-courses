import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Profile />
      </header>
      <CoursesWrap />
      <footer>
      <Footer />
      </footer>
    </div>
  );
}

function Profile() {
  return (
    <div class="Profile">
      <div class="ProfileImage"><img src="https://avatars.githubusercontent.com/u/11271706?v=4&size=64"/></div>
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
      <img src="https://i.imgur.com/8XcCjF1.jpeg" />
      <h2>Name of course</h2>
      <p>Tests 123 123</p>
      <div className="CourseFooter">
        <div className="CourseFooterTags">
          <div className="Tag">
            test
          </div>
          </div>
          <div>
            <button>Buy</button>
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
