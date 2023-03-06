# Worker Manager Website Service
This project is an Angular website service that communicates with an ASP.NET Core API and MSSQL Server to manage worker data. The website allows users to add, delete, edit, and create random employers.

## Using
- Angular CLI
- .NET Core API
- Microsoft SQL Server Management Studio


## Installation
- Clone the repository to your local machine.
- Open the command prompt and navigate to the project folder.
- Run npm install to install the necessary dependencies for the Angular project.
- Run dotnet restore to restore the necessary dependencies for the API project.
- (i think it auto creates gotta make cure) Create a new database in MSSQL Server Management Studio named "WorkerManagerDB".!!!!!!!!!!!!!!!!!!!
- Run the SQL script located at WorkerManagerAPI\Database\WorkerManagerDB.sql to create the necessary tables and data in the database. !!!!!!!!!!!!!!!!!!
- Open two separate command prompts and navigate to the API project folder and the Angular project folder, respectively.
- In the API command prompt, run dotnet run to start the API server on port 7172.
- In the Angular command prompt, run ng serve --port 4200 to start the Angular website on port 4200.
- 
## Usage
- Open a web browser and navigate to http://localhost:4200 to access the website.
- Use the navigation menu to add, delete, edit, or create random employers.
- The website communicates with the API server on port 7172 to retrieve and update worker data in the database.
