Worker Manager Website Service
This project is an Angular website service that communicates with an ASP.NET Core API and MSSQL Server to manage worker data. The website allows users to add, delete, edit, and create random employers.

Prerequisites
Node.js and NPM
Angular CLI
.NET Core SDK
Microsoft SQL Server Management Studio
Installation
Clone the repository to your local machine.
Open the command prompt and navigate to the project folder.
Run npm install to install the necessary dependencies for the Angular project.
Run dotnet restore to restore the necessary dependencies for the API project.
Create a new database in MSSQL Server Management Studio named "WorkerManagerDB".
Run the SQL script located at WorkerManagerAPI\Database\WorkerManagerDB.sql to create the necessary tables and data in the database.
Open two separate command prompts and navigate to the API project folder and the Angular project folder, respectively.
In the API command prompt, run dotnet run to start the API server on port 7172.
In the Angular command prompt, run ng serve --port 4200 to start the Angular website on port 4200.
Usage
Open a web browser and navigate to http://localhost:4200 to access the website.
Use the navigation menu to add, delete, edit, or create random employers.
The website communicates with the API server on port 7172 to retrieve and update worker data in the database.
Development
To develop the Angular website, run ng serve --port 4200 and make changes to the files in the WorkerManagerWeb folder. The website will automatically reload to reflect the changes.
To develop the ASP.NET Core API, run dotnet run in the WorkerManagerAPI folder and make changes to the files in the Controllers and Services folders. The API server will automatically restart to reflect the changes.
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.