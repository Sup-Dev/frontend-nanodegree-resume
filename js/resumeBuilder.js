/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Sourabh Dev");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Architect");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);