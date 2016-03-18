/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name": "Sourabh Dev",
  "role": "Software Architect",
  "contacts": {
    "mobile": "999-999-9999",
    "email": "sourabh@test.com",
    "github": "Sup-Dev",
    "twitter": "@sevenzone",
    "location": "Gurgaon"
  },
  "welcomeMessage": "Hello World!",
  "skills": ["programming", "planning", "entertaining"],
  "bioPic": "images/fry.jpg"
};

var education = {
  "schools": [
    {
      "name": "Indraprast University",
      "location": "New Delhi, India",
      "degree": "Bachelors",
      "mojors": ["CS"],
      "dates": "Sep 2010 - May 2014",
      "url": "http://test.com"
    }
  ], "onlineCourses": [
      {
        "title": "Front End Web Development NanoDegree",
        "school": "Udacity",
        "date": "Feb 2016 - Conti",
        "url": "https://udacity.com"
      }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Ubinext Software",
      "title": "Software Architect",
      "dates": "May 2014 - Current",
      "description": "I work as a computer architect here!",
      "location": "Gurgaon"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Infrastitch",
      "dates": "Dec 2014",
      "description": "A project managemant software",
      "images": ["images/197x148.gif"]
    }
  ]
};


// Add to resume

// Bio
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

  // Skills
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkills;

    for (var i = 0; i < bio.skills.length; i++) {
      formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
  }
};

bio.display();

// Work
work.display = function() {
  if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);

    for (job in work.jobs) {
      var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);

      $(".work-entry:last").append(employer + title);
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
  }
};

work.display();

// Projects
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    
    var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
    $(".project-entry:last").append(formattedImages);
  }
};

projects.display();

// Education
education.display = function () {
  if (education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);

    for (school in education.schools) {
      var foramttedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(foramttedName + formattedDegree);
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].mojors));
    }
    
    $(".education-entry:last").append(HTMLonlineClasses);
    for (school in education.onlineCourses) {
      
      var foramttedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
      $(".education-entry:last").append(foramttedTitle + formattedSchool);
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[school].date));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[school].url));
    }
  }
};

education.display();

// Footer
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

// Map
$("#mapDiv").append(googleMap);

// Log Clicks
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  
  logClicks(x, y);
});

// internationlize
function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase();
  name[0].slice(1).toLowerCase();
  
  return name[0] + " " + name[1];
};

$("#main").append(internationalizeButton);

