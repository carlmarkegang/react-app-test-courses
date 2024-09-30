export const GetCourses = () => {
  // Mock API

  let courses = [];
  var tags = [];

  function create_course(name, description, imageLink, tags) {
    this.name = name;
    this.description = description;
    this.imageLink = imageLink;
    this.tags = [];
    this.tags.push(new create_tag("Fiction", "#fc5618"));
    this.tags.push(new create_tag("Writing", "rgb(55 108 4)"));
  }

  function create_tag(name, color) {
    this.name = name;
    this.color = color;
  }

  courses.push(new create_course("J.R.R. Tolkien World-building 1", "Explore Tolkien's writing in detail", "https://i.imgur.com/8XcCjF1.jpeg", tags));
  courses.push(new create_course("J.R.R. Tolkien World-building 2", "Explore Tolkien's writing in detail", "https://i.imgur.com/8XcCjF1.jpeg", tags));
  courses.push(new create_course("J.R.R. Tolkien World-building 3", "Explore Tolkien's writing in detail", "https://i.imgur.com/8XcCjF1.jpeg", tags));
  courses.push(new create_course("J.R.R. Tolkien World-building 4", "Explore Tolkien's writing in detail", "https://i.imgur.com/8XcCjF1.jpeg", tags));
  courses.push(new create_course("J.R.R. Tolkien World-building 5", "Explore Tolkien's writing in detail", "https://i.imgur.com/8XcCjF1.jpeg", tags));
  courses.push(new create_course("J.R.R. Tolkien World-building 6", "Explore Tolkien's writing in detail", "https://i.imgur.com/8XcCjF1.jpeg", tags));
  courses.push(new create_course("J.R.R. Tolkien World-building 7", "Explore Tolkien's writing in detail", "https://i.imgur.com/8XcCjF1.jpeg", tags));
  courses.push(new create_course("J.R.R. Tolkien World-building 8", "Explore Tolkien's writing in detail", "https://i.imgur.com/8XcCjF1.jpeg", tags));

  return courses;
};