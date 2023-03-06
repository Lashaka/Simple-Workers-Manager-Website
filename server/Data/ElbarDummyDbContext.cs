using elbar_dummy.Models;
using Microsoft.EntityFrameworkCore;

namespace elbar_dummy.Data
{
    public class ElbarDummyDbContext : DbContext
    {
        public ElbarDummyDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

    }
}
