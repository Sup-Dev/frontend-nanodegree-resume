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
    "location": "Gurgaon, India"
  },
  "welcomeMessage": "Hello World!",
  "skills": ["programming", "planning", "entertaining"]
};

var eduaction = {
  "schools": [
    {
      "name": "Indraprast University",
      "city": "New Delhi, India",
      "degree": "Bachelors",
      "mojors": ["CS"],
      "dates": 2014,
      "url": "http://test.com"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Ubinext Software",
      "title": "Software Architect",
      "dates": "May 2014 - Current",
      "description": "I work as a computer architect here!"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Infrastitch",
      "dates": "Dec 2014",
      "description": "A project managemant software"
    }
  ]
};


// Add to resume

// Bio
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

// Skills
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkills;
  
  for (var i=0; i<bio.skills.length; i++) {
    formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
  }
}

// Work
if (work.jobs.length > 0) {
  $("#workExperience").append(HTMLworkStart);
    
  for (job in work.jobs) {
    var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    
    $(".work-entry:last").append(employer + title);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
  }
}
