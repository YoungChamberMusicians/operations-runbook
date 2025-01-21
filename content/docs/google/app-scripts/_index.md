+++
title = "App Scripts"
weight = 10
+++ 

# App Scripts 

There are some simple scripts coded in Google App Script (a subset of Javascript) that runs some custom functions. Copies of all of these scripts are located in the [App Scripts](https://drive.google.com/drive/folders/1niRVMT3ji5OWy0GLfzCOCn8DpOtAGzce?usp=drive_link) folder. 

## Coach Report Mailer 

This script is setup to run every Thursday and email the coaches that coached that week to remind them to submit reports about the ensembles they coached this week. 

### Trigger mechanism 

The script is ran on a [cron job](https://en.wikipedia.org/wiki/Cron) associated with the script. This trigger is setup to be ran by the ea@youngchambermusicians.org Google account. It is scheduled to run on Thursdays between 6-7pm PT. 

### Method of Action 

When the script is ran, it checks the [Coaching Calendar](https://calendar.google.com/calendar/embed?src=c_7e84edd0cc845673c650bd07334bac0ca505d47a1b3599b273235b1d8df08c35%40group.calendar.google.com&ctz=America%2FLos_Angeles) and first checks if there were any events for this calendar week. If there were events, it collects all events and looks at the guest list of each event. This event list *should* be the coach(es) that worked with the group fro that week. Using this information, it then uses these emails to send the reminder to the coaches. 


Admissions to documents 
Coach form to tabs 