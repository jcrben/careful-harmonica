/* 
***** FIREBASE NOTES
Per https://www.firebase.com/docs/web/guide/understanding-data.html Firebase keys:
 "can include any unicode characters except for . $ # [ ] / and ASCII control characters 0-31 and 127".
Note: email address has period replaced by a comma for above reason.
For keys

***** MOCKUP DATA GENERATOR
var mock_users = ['tough.gem2059@fastmail.com', 'poppin3000@gmail.com', '', 'Ryan'];
var mock_employers = ['Google', 'LinkedIn', 'Facebook', 'Twitter'];
var mock_positions = ['Software Engineer', 'Software Developer', 'UX Engineer', 'Validation Engineer'];
var mock_resume = 'Insert resume file';
var mock_locations = ['San Jose', 'San Francisco', 'Seattle', 'Los Angeles', 'Portland'];
var mock_experience = '6 months';
var mock_education = ['Bachelor\'s degree', 'High-school diploma'];
var badges = ['Enterprising', 'Seasoned', 'Scalleywag', 'Captain']

var users = [];
mock_users.forEach(function(uname, i, coll) {
  var user = {};
  user.uname = {};
})


****** JSON TEMPLATE
// Note email '.' has been replaced with ','
{
  "users": {
    "tough.gem2059@fastmail,com": {
      "name": "Ben",
      "resume": "insert resume",
      "desired_job": "Software Engineer",
      "education": "Bachelor's degree",
      "experience": "3 months",
      "contact_info": "tough.gem2059@fastmail.com",
      "badges": "insert array of either base64-encoded stringified icons or data:url",
      "friends": ["Tyler", "Ryan", "Pavan"],
      "to-dos": ["Apply for Job X at Employer A", "Research Job X", "Follow-up with application 1"],
      "employers": [{
        "Employer A": {
          "Job X": {
            "created_at": "2015-03-12",
            "description": "Job Description X",
            "progress": {
              "application": true,
              "resume": "insert resume",
              "research_notes": "insert research notes",
              "emails": 1,
              "calls": 0,
              "interviews": 0,
              "responses": 0
            }
          }
        },
        "Employer B": {
          "Job Y": {
            "created_at": "2015-03-12",
            "description": "Job Description X",
            "progress": {
              "application": true,
              "resume": "insert resume",
              "research_notes": "insert research notes",
              "emails": 1,
              "calls": 0,
              "interviews": 0,
              "responses": 0
            }
          }
        }]
      } 
    }
  }
}
/*

***** FIREBASE SCHEMA LAYOUT
users[email address]      
  name      
  resume      
  cover letter      
  desired job     
  education     
  experience      
  location      
  profile picture     
  contact info      
  badges      
  friends     
  to-dos      
  employers     
  employer name     
    position    
    job title   
      created at  
      description 
      progress  
        application (bool)
        resume
        research notes
        emails
        calls
        interviews
        responses

badges[badge_name]
  icon
  point_property

employers
careers
*/