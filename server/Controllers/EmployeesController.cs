using elbar_dummy.Data;
using elbar_dummy.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace elbar_dummy.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly ElbarDummyDbContext elbarDummyDbContext;

        public EmployeesController(ElbarDummyDbContext elbarDummyDbContext)
        {
            this.elbarDummyDbContext = elbarDummyDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await elbarDummyDbContext.Employees.ToListAsync();

            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employee)
        {

            await elbarDummyDbContext.AddAsync(employee);
            await elbarDummyDbContext.SaveChangesAsync();

            return Ok(employee);
        }


        [HttpGet]
        [Route("{id:}")]

        public async Task<IActionResult> GetEmployee([FromRoute] long id)
        {
            var employee = await elbarDummyDbContext.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        [HttpPut]
        [Route("{id:}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] long id, Employee updateEmployeeRequest)
        {
            var employee = await elbarDummyDbContext.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if (employee == null)
            {
                return NotFound();
            }
            employee.Name = updateEmployeeRequest.Name;
            employee.Email = updateEmployeeRequest.Email;
            employee.Phone = updateEmployeeRequest.Phone;
            employee.Salary = updateEmployeeRequest.Salary;
            employee.Department = updateEmployeeRequest.Department;

            await elbarDummyDbContext.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpDelete]
        [Route("{id:}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] long id)
        {
            var employee = await elbarDummyDbContext.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if (employee == null)
            {
                return NotFound();
            }
            elbarDummyDbContext.Employees.Remove(employee);
            await elbarDummyDbContext.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpPost]
        [Route("Random")]

        public async Task<IActionResult> RandomEmployee()
        {
            Employee employee = Employee.CreateRandomEmployee();

            await elbarDummyDbContext.AddAsync(employee);
            await elbarDummyDbContext.SaveChangesAsync();

            return Ok(employee);
        }

    }
}
