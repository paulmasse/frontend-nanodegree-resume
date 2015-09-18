
var work = {
    "jobs" : [
        {
            "employer" : "York region district School Board",
            "title" : "Office Assistant",
            "location" : "Aurora, Ontario, Canada",
            "dates" : "2000 - Present",
            "description" : "Assist with ongoing projects and duties as assigned"
        }
    ]
}

var projects = {
    "projects" : [
        {
            "title" : "York region district School Board",
            "dates" : "2000 - Present",
            "description" : "Assist with ongoing projects and duties as assigned",
            "images" : ["images/197x148.gif", "images/fry.jpg"]
        }
    ]
}

var bio = {
    "name" : "Paul Masse",
    "role" : "Front-end Developer",
    "welcomeMessage" : "Welcome to the page",
    "contacts" : {
        "mobile" : "905-551-1052",
        "email" : "paul.masse@bell.net",
        "guthub" : "paulmasse",
        "twitter" : "@paulfromtoronto",
        "location" : "Bradford, Ontario, Canada"
    },
    "bioPic" : "images/fry.jpg",
    "skills" : ["HTML","CSS", "Javascript", "JQuery"]
}

var education = {
    "schools" : [
        {
            "name" : "Sutton District High School",
            "degree" : "Ontario Secondary School Diploma",
            "location" : "Sutton, Ontario, Canada",
            "majors" : ["N/A"],
            "dates" : "1990-1994",
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-End Web Developer Nanodegree",
            "school" : "Udacity",
            "dates" : "2015 - Present",
            "url" : "www.udacity.com"
        }
    ]
}

work.display = function () {
    for (job in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
}

projects.display = function() {
    for (project in projects.projects) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
}

bio.display = function () {
    var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.guthub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedHeaderName + formattedHeaderRole);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcomeMessage);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0;i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
}


education.display = function () {
    for (school in education.schools) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedMajors);
    }
    for (course in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)
        $(".education-entry:last").append(HTMLonlineClasses);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
    }
}

function inName (name)
{
    var nameSplit = name.split(" ");
    nameSplit[0] = nameSplit[0].slice(0,1).toUpperCase() + nameSplit[0].slice(1).toLowerCase();
    nameSplit[1] = nameSplit[1].toUpperCase();
    return nameSplit[0] + " " + nameSplit[1];
}

bio.display();
work.display();
projects.display();
education.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
