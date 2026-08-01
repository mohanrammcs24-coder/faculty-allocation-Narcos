Faculty Workload Planning & Allocation System




Team: Narcos
Bannari Amman Institute of Technology
Computer Science and Engineering
31 June 2026


 


Software Requirements Specification






Table of Contents:
1.	Introduction
2.	System Features (Functional Requirements)
3.	External Interface Requirements
4.	System Architecture
5.	Business Rules
6.	Use Cases
7.Software & Hardware Requirements
     








1.Introduction:
The Faculty Workload Planning and Allocation System is a web-based application developed to automate the planning, calculation, validation, and allocation of faculty workload within an educational institution. The system eliminates manual allocation errors, ensures fair workload distribution, and provides administrators with tools to monitor faculty assignments, generate reports, and manage academic activities efficiently.

The system allows
•	User Management 
•	Department Management 
•	Faculty Management 
•	Subject Management 
•	Workload Allocation 
•	Automatic Workload Calculation 
•	Notifications 
•	Reports 
•	Audit Logs 


2.Functional Requirements:
User Authentication
	Users shall login using email and password.
Department Management
Admin shall Create department, Edit department, Delete department, View department
Faculty Management
	Fields include Name, Employee ID, Expertise, Available Hours
Allocation Module
	Admin can allocate Theory, Lab, Mentoring, Committee
Workload Calculator
	Automatically calculate Lab Hours, Training Hours, Monitoring, Committees

3.External Interface Requirements
User Interface
React
Responsive
Desktop
Mobile
________________________________________
Backend
Express REST API
JWT
Node.js
________________________________________
Database
MongoDB
Collections
•	Users 
•	Faculty 
•	Departments 
•	Subjects 
•	Allocations 
4.System Architecture

 

5.Business Rules
•	Faculty cannot exceed max hours. 
•	Department mismatch not allowed. 
•	Duplicate allocation not allowed. 
•	Theory and Lab counted separately. 
•	Total workload automatically calculated.

6.Use Cases
Example
UC-01 Login
Actor
Admin
Precondition
User registered
Flow
1.	Enter email 
2.	Enter password 
3.	Validate 
4.	Dashboard 
Postcondition
User logged in
________________________________________
Repeat for
•	Add Faculty 
•	Add Subject 
•	Allocate Subject 
•	Calculate Workload 
•	Generate Report

7.Software Requirements
Backend
Node.js
Express
MongoDB
JWT
Frontend
React
Tailwind
Axios
Deployment
Docker
AWS
GitHub

