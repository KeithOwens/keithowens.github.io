
 
if (!String.prototype.trim) 
{
	String.prototype.trim = function () 
	{
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	};
}
 
 var bio = {
			"name" : "Keith Owens",
			"role" : "Software Engineer, Embedded and Web",
			"contacts" : {
						  "mobile" : "815-353-6949",
						  "email" : "koengineer@ymail",
						  "github" : "<span class=\"gray-text\" href = \"https://github.com/KeithOwens\">KeithOwens</span>",
						  "location" : "Crystal Lake, IL"
						 },
			"biopic" : "images/KO_Closeup.JPG",
			"welcomeMessage" : "<hr>Thanks for viewing my online resume'.  Please contact me, so we can talk about how I can improve your company's bottom line.",
			"skills" : ["Software Development - Multi-processor, multi-threading, algorithms, System V and POSIX APIs, MFC, .NET, object-oriented, user and kernel space",
					"Languages - C, C++, C#, HTML, CSS, Javascript, Java, assembly",
					"Operating Systems  - Linux, Windows, QNX, VxWorks",
					"Version Control Tools - SVN, Git, Clearcase",
					"Defect Tracking - Trac, Clearquest",
					"Debugging - Single-step, trace, logging", 
					"Testing - Unit, integration, regression, automated, static analysis", 
					"Technical Management - Multi-discipline project schedules and priorities, FMEAs, FOSS",
					"Systems, hardware, and software requirements, design, and interface doucment preparation",
					"Hardware design - digital, audio, power management, EMI, ESD, UL, I/O, DFM, Quality"]
            };
				 
var work = { 
			"jobs" : [
					   {
						"employer" : "Toshiba Medical Research Institute USA",
						"title" : "Principal Software Engineer",
						"location" : "Vernon Hills, IL",
						"dates" : "Jul, 2012 - Present",
						"description" : "Staff-level, individual contributor completely responsible for design, implementation, and maintenance of "+
								"data acquisition, system health monitoring/reporting, and detector calibration.  "+  
								"Responsible for developing automated testing as part of "+
								"task design and implementation.  Responsible for FOSS compliance.  Responsible for "+
								"helping improve software quality, including maintenance of Coverity static analysis tool."
					   },
					   {
						"employer" : "Toshiba Medical Research Institute USA",
						"title" : "Principal Software Engineer",
						"location" : "Vernon Hills, IL",
						"dates" : "Mar, 2007 - Jul, 2012",
						"description" : "Staff-level, individual contributor completely design and implement new features for and maintenance of the "+
								"image-processing subsystem.  Responsible for creating a system-integration process and release test plan.  "+
								"Responsible for techincal leadership of X-ray software team.  Led group in feasibility study for next-generation cardiac, "+
								"angiographic, and neurological platform X-ray system."
					   },
					   {
						"employer" : "Motorola",
						"title" : "Principal Component Sourcing Engineer",
						"location" : "Libertyville, IL",
						"dates" : "Nov, 2004 - Mar, 2007",
						"description" : "Staff-level, individual contributor responsible for all product-level qualification and sourcing of production quantities of new components "+
								"for new 3G phones.  Required coordinating activities with Category Management, prototype manufacturing, suppliers, and Development engineering "+
								"including the identification of cost reduction opportunities related to phone BOMs."
					   },
					   {
						"employer" : "Motorola",
						"title" : "Principal Software Engineer",
						"location" : "Deer Park, IL",
						"dates" : "Nov, 2001 - Nov, 2004",
						"description" : "Staff-level, individual contributor who developed algorithms and C implementations for the full-duplex hands-free software module."+
								"  Responsible for mentoring and directing work tasks for two junior engineers in Deer Park office."
					   },
					   {
						"employer" : "Motorola",
						"title" : "Senior Hardware Engineer",
						"location" : "Boynton Beach, FL",
						"dates" : "Jan, 1994 - Nov, 2001",
						"description" : "Led design of baseband sections for mobile radios, pagers, GSM mobile phone, and "+
										"CDMA Telematics embedded telephone."
					   }
					 ]
			};		
			
var projects = { 
				"project" : [
							   {
								"title" : "PET Scanner",
								"dates" : "2012 - Present",
								"description" : "<li>Gated Acquisition - Design, implement, and maintain the new respiratory gating "+
								"waveform and trigger information collected for patient studies. (C, C++, Linux, SVN)</li>"+
								"<li>DICOM Study Converter - Create conversion program for research groups to convert DICOM studies to proprietary data "+
								"formats. (C, C++, Windows, MFC, SVN)</li>"+
								"<li>Data Acquisition - Design, implement, and maintain the data collection tasks on the Acquisition Server.  "+
								"Included creation of a scan hardware simulator and data verification test program. (C, C++, Linux, QNX, Windows, C#, .NET, SVN, FMEA) </li>"+
								"<li>Automated Testing - Update and extend overnight automated tests to handle 40 different acquisition test cases.  "+
								"(C#, .NET, Windows, SVN)</li>"+
								"<li>Detector Calibration - Port research software/algorithms to run on production system.  Includes interfacing to "+
								"new Host server software and calculation speed-ups. (C, C++, MATLAB, Windows, SVN)</li>"+
								"<li>Health Monitoring  - Added new features to automated testing to better model production system "+
								"performance and eliminate system-level defects. (C, C++, Linux, Windows, C#, .NET, SVN)</li>",
								"images" : ["images/Toshiba-PET-CT.jpg", "images/celesteion_mod.jpg"]
							   },
							   {
								"title" : "X-ray Angiography/Cardiac Scanner",
								"dates" : "2007 - 2012",
								"description" : "<li>Next-generation X-ray system - Proved feasibility of Preempt-RT Linux OS for X-ray/data "+
								"acquisition applications as part of a cost-reduction effort to use COTS hardware. (C, C++, Linux, OpenGL/GLX, SVN)</li>"+
								"<li>High-speed data transfer for VCT - Implemented Fibre Channel communication between RAID and separate "+
								"cariac-application server to support new Cardiac applications. (C, C++, VxWorks, C#, .NET, SVN)</li>"+
								"<li>Cost Reduction - Reduce cost by updating older product boards to newer parts and reducing the number of "+
								"image-processing boards needed. (C, C++, VxWorks, MFC, Windows, SVN)</li>",
								"images" : ["images/cardiac_p8000v.jpg", "images/panel-angiography.jpg"]
							   },
							   {
								"title" : "3G Mobile Phone Component Sourcing (Supply Chain)",
								"dates" : "2004 - 2007",
								"description" : "<li>Cost Reduction - Identify second- and third-source suppliers for new and high-volume "+
								"existing components.  Explain component pricing and BOM structure to Business Development teams to promote "+
								"cost reduction and accurate phone cost estimates for new phone business plans.(Project schedules)</li>"+
								"<li>IC technology Roadmap - Created dual-sourced, 3-year memory roadmap for stacked memory for 3 new 3G phones. (Project schedules, priorities, risk mitigation)</li>"+		
								"<li>BOM preparation  - Work with new product development teams, factories, and Category Management on transition to "+
								"new BOM entry/control system.</li>"+
								"<li>Green Belt - Earned Six-Sigma Green Belt to improve component quality.</li>",
								"images" : ["images/pennwell.jpg"]
							   },
							   {
								"title" : "Automotive Acoustic Echo Canceller",
								"dates" : "2001 - 2004",
								"description" : "<li>Voice Activity Detector - Designed, developed, and tested for production a new voice activity "+
								"detector, echo estimator, and landline echo canceller for the hands-free software solution resulted in a $6/unit savings "+
								"for products shipping 1 million+ units/year.(C, MATLAB, project schedules, Clearcase, Clearquest)</li>"+
								"<li>Deep Cost Reduction - Involved in the system, hardware, and software specification and initial design of a "+
								"Telematics support gate array for executing current and future hands-free, voice recognition, and navigation applications. (C)</li>"+
								"<li>Quality Initiative - Successfully led the management effort within the Hands-free Software team to achieve"+
								" SEI Level 3 to secure new contracts with existing automotive customers.  (Documentation, Clearcase, Clearquest)</li>",
								"images" : ["images/caraudio.jpg", "images/echocancellerpic.jpg"]
							   },
							   {
								"title" : "Baseband Design for Various Wireless Products",
								"dates" : "1994 - 2001",
								"description" : "<li>Digital Embedded Telephone - Designed and implemented Qualcomm-based CDMA embedded mobile phone "+
								"for use with GM-OnStar products.  Evaluated performance of Qualcomm, Conexant, and Infineon mobile phone chipsets for "+
								"use in future embedded mobile phone products. (Digital, power management, EMI, ESD, I/O, FMEA, DFM, quality)</li>"+
								"<li>Wireless Products - Designed, implemented, and tested the digital controller, power, audio, lighting, and "+
								"alert sections of public safety radios, numeric and alphanumeric pagers, and a GSM phone.(digital, audio, power management, UL, ESD, EMI, I/O, DFM, quality)</li>"+
								"<li>Cost Reduction - Successfully identified, implemented, and tested several circuit redesigns on multiple pagers.  "+
								"Design changes on an alphanumeric Pager resulted in a cost savings of $5/unit for a product that shipped "+
								"another 2 million units until EOL.  (digital, audio, power management, ESD, EMI, I/O, DFM, quality)</li>"+
								"<li>Quality Improvements - Successfully collaborated with factory and field service teams on various product "+
								"redesigns to reduce manufacturing defects, simplify product servicing, and resolve customer return issues.  "+
								"(digital, audio, power management, EMI, ESD, UL, I/O, DFM, Quality)</li>",
								"images" : ["images/devices.jpg"]
							   }
							]
				};
						  
var education ={
				"schools" : [
							 {"name" : "Udacity",
							  
							  "degree" : "Nanodegree",
							  "majors" : ["Front-End Web Development"],
							  "dates" : "2015 - 2016",
							  "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
							 },
							 {"name" : "University of Florida",
							  "location" : "Gainesville, FL",
							  "degree" : "Masters",
							  "majors" : ["EE, DSP and Digital comm specializations"],
							  "dates" : "1994 - 1998",
							  "url" : "http://www.ece.ufl.edu"
							  },
							  {"name" : "University of Florida",
							  "location" : "Gainesville, FL",
							  "degree" : "BS",
							  "majors" : ["EE, Mathematics minor"],
							  "dates" : "1988 - 1993",
							  "url" : "http://www.ece.ufl.edu"
							  }
							],
				"onlineCourses" : [
									{"title" : "HTML Syntax",
									 "school" : "Udacity",
									 "dates" : 2016,
									 "url" : "https://www.udacity.com/course/viewer#!/c-ud001-nd/l-6987421963"
									},
									{"title" : "Intro to HTML and CSS",
									 "school" : "Udacity",
									 "dates" : 2015,
									 "url" : "http://www.udacity.com/course/ud304"
									},
									{"title" : "Responsive Web Design Fundamentals",
									 "school" : "Udacity",
									 "dates" : 2016,
									 "url" : "http://www.udacity.com/course/ud893"
									},
									{"title" : "Responsive Images",
									 "school" : "Udacity",
									 "dates" : 2016,
									 "url" : "http://www.udacity.com/course/ud882"
									},
									{"title" : "How to Use Git and GitHub",
									 "school" : "Udacity",
									 "dates" : 2015,
									 "url" : "http://www.udacity.com/course/ud775"
									},
									{"title" : "JavaScript Basics",
									 "school" : "Udacity",
									 "dates" : 2016,
									 "url" : "http://www.udacity.com/course/ud804"
									}
								  ]
			   };
 
function locationizer(work_obj) 
{
    var places = [];
	
    for (job in work_obj.jobs)
    {
        {
            places.push(work_obj.jobs[job].location);
        }
    }
    return places;
}

function inName()
{
	var outputName = "";
	var input = bio.name.trim();
	
	var nameArray = input.split(' ');
	outputName = (nameArray[0][0]).toUpperCase()+nameArray[0].slice(1).toLowerCase()+ " " + nameArray[1].toUpperCase();
	
	return outputName;
}
 
bio.display = function()
{
	if (bio.name.length > 0)		 
	{
		var formattedName        = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole        = HTMLheaderRole.replace("%data%", bio.role);
		var formattedpRole       = HTMLheaderpRole.replace("%data%", bio.role);
		var formattedMobile      = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail       = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub      = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation    = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic      = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg  = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedpWelcomeMsg = HTMLpwelcomeMsg.replace("%data%", bio.welcomeMessage);
	 
		if ($(window).width() > 600)
		{
			$("#header").prepend(formattedRole);
		}
		else
		{
			$("#header").prepend(formattedpRole);
		}
		$("#header").prepend(formattedName);
		$("#header").prepend(formattedBioPic);
		$("#topContacts").append(formattedLocation);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGitHub);
		//$("#header").append(formattedBioPic);
		if (bio.skills.length > 0)		 
		{
			 $("#header").append(HTMLskillsStart);
			 for (i = 0; i < bio.skills.length; i++)
			 {
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
				$("#header").append(formattedSkills);
			 }
		}
		if ($(window).width() > 767)
		{
			$("#header").append(formattedWelcomeMsg);
		}
	}
}
 
work.display = function()
{
	if (work.jobs.length > 0)		 
	{
		 for (jobs in work.jobs)
		 { 
			$("#workExperience").append(HTMLworkStart);
			
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
			
			$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkDescription);

		 }
	}
}
 
projects.display = function()
{
	if (projects.project.length > 0)		 
	{
		 for (project in projects.project)
		 { 
			$("#projects").append(HTMLprojectStart);
			
			var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
			var formattedProjDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
			var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);

			$(".project-entry:last").append(formattedProjTitle);
			$(".project-entry:last").append(formattedProjDates);
			$(".project-entry:last").append(formattedProjDescription);
			
			if ($(window).width() > 767)
			{
				if (projects.project[project].images.length > 0)
				{
					for (image in projects.project[project].images)
					{
						var formattedProjImage = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
						$(".project-entry:last").append(formattedProjImage);
					}
				}
			}
		 }
	}
}
 
education.display = function()
{
	if (education.schools.length > 0)
	{
		 for (school in education.schools)
		 { 
			$("#education").append(HTMLschoolStart);
			
			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedschoolName = formattedschoolName.replace("%url%", education.schools[school].url);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

			$(".education-entry:last").append(formattedschoolName);
			if (education.schools[school].hasOwnProperty('location'))
			{
				var HTMLschoolLocation = HTMLworkLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").prepend(HTMLschoolLocation);
			}
			$(".education-entry:last").append(formattedschoolDates);
			$(".education-entry:last").append(formattedschoolMajor);	
			$(".education-entry:last").append(formattedschoolDegree);
		 }
	}

	if (education.onlineCourses.length > 0)
	{
		 $(".education-entry:last").append(HTMLonlineClasses);
		 for (course in education.onlineCourses)
		 { 
			var formattedonlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedonlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			//var formattedonlineCoursesDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates +"<br>");
			formattedonlineCourseTitle = formattedonlineCourseTitle.replace("%url%", education.onlineCourses[course].url);

			$(".education-entry:last").append(formattedonlineCourseTitle + formattedonlineCourseSchool);
			//$(".education-entry:last").append(formattedonlineCoursesDates);
			//$(".education-entry:last").append(formattedonlinecoursesURL)
		 }
	}
}

window.addEventListener('resize', refresh, true);  //Third argument needed to prevent Firefox exception

function refresh()
{
	window.location.reload(true);
}

bio.display();
work.display();
projects.display();
education.display();


//var formattedButton = internationalizeButton.replace("<button>", <button type="button" onclick="$("#header").append(formattedInternationalName)">);
$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

/*$(document).click(function(loc)
{
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x, y);
});*/









