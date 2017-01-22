
var bio = {
	"name": "Kenneth Cruz",
	"role": "Web Developer",
	"contacts": {
		"mobile": "1-416-725-4991",
		"email": "cruzken@gmail.com",
		"github": "https://github.com/cruzken",
		"twitter": "@cenkruz",
		"location": "North York"
	},
	"welcomeMessage": "Hello! I am an aspiring Web developer living in the Greater Toronto Area.  It's my pleasure learning new skills from creating engaging projects that deliver exceptional user experiences.  Feel free to contact me for any inquiries.  Thanks!",
	"skills": ["HTML5", "CSS3", "Bootstrap", "JS", "jQuery", "Node.js", "React.js", "Git", "Gulp", "Responsive Design"],
	"biopic": "images/2015pic.jpg",
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedPic);
		$("#header").append(formattedMsg);


		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);


		if (bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);

			for (skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
	}
}

var work = {
	"jobs": [
	{
		"employer": "TJX Canada",
		"title": "Store Investigator",
		"location": "Toronto, ON",
		"dates": "Jul 2015 - Present",
		"description": "Detecting and apprehending retail theft"
	},
	{
		"employer": "TJX Canada",
		"title": "Customer Service Agent",
		"location": "Toronto, ON",
		"dates": "Oct 2013 - Present",
		"description": "Providing Customer Service focused Loss Prevention methods"
	},
	{
		"employer": "TJX Canada",
		"title": "Sales Associate",
		"location": "Mississauga, ON",
		"dates": "Apr 2011 - Oct 2013",
		"description": "Providing Customer Service in Sales floor"	
	},
	{
		"employer": "Canadian Springs",
		"title": "Dispatch Clerk",
		"location": "Mississauga, ON",
		"dates": "2009 - 2010",
		"description": "Operator of truck delivery schedules"	
	}
	],
	display: function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

var projects = {
	"projects": [
	{
		"title": "<a href='http://cruzken.github.io/bm'>Burrito Masters</a>",
		"dates": "February 2016",
		"description": "Client requested site development and online ordering system alternative.  Work in progress.  Deployment at February 4, 2016",
		"images": [
			"http://cruzken.github.io/images/codepenportfolio/bm.jpg"
		]
	},
	{
		"title": "<a href='http://codepen.io/cruzken/full/dGJxvy'>Weather Forecast</a>",
		"dates": "January 2016",
		"description": "Shows weather and forecast for rest of the week. Uses openweather API and google street view image API.  Allow device location for this one!",
		"images": [
			"http://cruzken.github.io/images/codepenportfolio/weather.jpg"
		]
	},
	{
		"title": "<a href='http://codepen.io/cruzken/full/yeYayL'>Basic Calculator</a>",
		"dates": "December 2015",
		"description": "Just a calculator made with JS and jQuery",
		"images": [
			"http://cruzken.github.io/images/codepenportfolio/calculator.jpg"
		]
	},
	{
		"title": "<a href='http://codepen.io/cruzken/full/epojGQ/'>Pomodoro Clock</a>",
		"dates": "November 2015",
		"description": "Creating a pomodoro clock with JS and jQuery. Now with mood color transitions!",
		"images": [
			"http://cruzken.github.io/images/codepenportfolio/pomodoro.jpg"
		]
	},
	{
		"title": "<a href='http://codepen.io/cruzken/full/GpeZNR/'>Random Quote Generator</a>",
		"dates": "November 2015",
		"description": "Generates random quotes that are tweetable with JS and jQuery",
		"images": [
			"http://cruzken.github.io/images/codepenportfolio/randomquotegen.jpg"
		]
	},
	{
		"title": "<a href='http://codepen.io/cruzken/full/epPoaQ/'>Portfolio 2</a>",
		"dates": "November 2015",
		"description": "Second portfolio using HTML5, CSS3, and JS",
		"images": [
			"http://cruzken.github.io/images/codepenportfolio/portfolio2.jpg"
		]
	},
	{
		"title": "<a href='https://github.com/cruzken/FEND0415-P4'>Website optimization</a>",
		"dates": "July 2015",
		"description": "Optimized a low performing website with compression, inlining, and asynchronous techniques.",
		"images": [
			"http://cruzken.github.io/images/codepenportfolio/wpo.jpg"
		]
	},
			{
		"title": "<a href='http://cruzken.github.io/game'>Classic Arcade Game Clone</a>",
		"dates": "June 2015",
		"description": "Built an interactive game using Object-Oriented JavaScript and HTML5 Canvas.",
		"images": [
			"images/project3pic1.jpg"
			]
	},
		{
		"title": "<a href='http://cruzken.github.io/resume'>Online Resume</a>",
		"dates": "May 2015",
		"description": "Built an interactive website using JavaScript and jQuery displaying my resume.",
		"images": [
			"images/project2pic1.jpg",
			"images/project2pic2.jpg"
			]
	},
	{
		"title": "<a href='http://cruzken.github.io/'>Build a Portfolio Site</a>",
		"dates": "April 2015",
		"description": "Developed a responsive website that will display images, descriptions and links to each of the portfolio projects that will be completed throughout the course of the Front-End Web Developer Nanodegree.",
		"images": [
			"images/project1pic1.jpg",
			"images/project1pic2.jpg"
		]
	}
	],
	display: function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
}

var education = {
	"schools": [
		{
		"name": "York University",
		"location": "Toronto, ON",
		"degree": "",
		"majors": ["Chemistry"],
		"dates": "2011 - 2015",
		"url": "http://www.yorku.ca/"
	},
	{
		"name": "George Brown College",
		"location": "Toronto, ON",
		"degree": "Certificate",
		"majors": ["General Arts"],
		"dates": "2008 - 2009",
		"url": "http://www.georgebrown.ca/"
	}
	],
	"onlineCourses": [
	{
		"title": "Object-Oriented JavaScript",
		"school": "Udacity",
		"dates": "June 2015",
		"url": "https://www.udacity.com/course/viewer#!/c-ud015-nd"
	},
	{
		"title": "HTML5 Canvas",
		"school": "Udacity",
		"dates": "June 2015",
		"url": "https://www.udacity.com/course/viewer#!/c-ud292-nd"
	},
	{
		"title": "Intro to jQuery",
		"school": "Udacity",
		"dates": "May 2015",
		"url": "http://www.udacity.com/course/intro-to-jquery--ud245/"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "May 2015",
		"url": "http://www.udacity.com/course/javascript-basics--ud804/"
	},
	{
		"title": "Responsive Images",
		"school": "Udacity",
		"dates": "April 2015",
		"url": "http://www.udacity.com/course/responsive-images--ud882/"
	},
	{
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"dates": "April 2015",
		"url": "http://www.udacity.com/course/responsive-web-design-fundamentals--ud893/"
	},
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "April 2015",
		"url": "http://www.udacity.com/course/intro-to-html-and-css--ud304/"
	}
	],
	display: function() {

		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	//		$(".education-entry:last").append(formattedName);
			var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(schoolName + schoolDegree);

			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);

			if (education.schools[school].majors.length > 0) {
				for (major in education.schools[school].majors) {
					var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
					$(".education-entry:last").append(formattedMajor);
				}
			}
		}
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {

			$("#education").append(HTMLschoolStart);
			var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(onlineTitle + onlineSchool);

			var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(onlineDates);

			var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(onlineURL);
			$(".education-entry:last").append("<hr>");
		}
		$("div > hr").last().remove(); // Removes the last <hr> tag
	}
}

bio.display();
work.display();
projects.display();
education.display();



$("#main").append(internationalizeButton);

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0][0].toUpperCase() + name[0].slice(1);
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);

// fading elements functionality


/*
$(window).on("load",function() {
  function fade() {
    $('.fade').each(function() {
      // Check the location of each desired element 
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();

      // If the object is completely visible in the window, fade it in 
      if (objectBottom < windowBottom) {
        if ($(this).css('opacity')==0) {$(this).fadeTo(1000,1);}
      } else {
        if ($(this).css('opacity')==1) {$(this).fadeTo(500,0);}
      }
    });
  }
  fade(); //Fade in completely visible elements during page-load
  $(window).scroll(function() {fade();}); //Fade in elements during scroll
});
*/