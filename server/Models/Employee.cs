namespace elbar_dummy.Models
{
    public class Employee
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public long Phone { get; set; }
        public int Salary { get; set; }
        public string? Department { get; set; }

        private static readonly Random _random = new Random();

        private static readonly string[] _firstNames = new[]
        {
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve",
        "Frank",
        "Grace",
        "Heidi",
        "Ivan",
        "Jack",
        "Kate",
        "Liam",
        "Mia",
        "Nate",
        "Olivia",
        "Pam",
        "Quinn",
        "Ralph",
        "Sara",
        "Tom",
        "Una",
        "Vera",
        "Wendy",
        "Xander",
        "Yara",
        "Zack"
    };

        private static readonly string[] _lastNames = new[]
        {
        "Anderson",
        "Baker",
        "Carter",
        "Davis",
        "Edwards",
        "Fisher",
        "Garcia",
        "Hill",
        "Ingram",
        "Jackson",
        "Kumar",
        "Lee",
        "Martin",
        "Nguyen",
        "O'Connor",
        "Patel",
        "Quinn",
        "Rodriguez",
        "Smith",
        "Taylor",
        "Ulrich",
        "Vargas",
        "Williams",
        "Xu",
        "Yang",
        "Zhang"
    };

        private static readonly string[] _departments = new[]
        {
        "Accounting",
        "Customer Service",
        "Engineering",
        "Finance",
        "Human Resources",
        "Information Technology",
        "Legal",
        "Marketing",
        "Operations",
        "Product Management",
        "Quality Assurance",
        "Research and Development",
        "Sales"
    };

        public static Employee CreateRandomEmployee()
        {
            var firstName = _firstNames[_random.Next(_firstNames.Length)];
            var lastName = _lastNames[_random.Next(_lastNames.Length)];
            var salary = _random.Next(5000, 100000);
            var email = $"{firstName.ToLower()}.{lastName.ToLower()}@example.com";
            var phone = _random.Next(100000000, 999999999);
            var department = _departments[_random.Next(_departments.Length)];

            return new Employee
            {
                Name = firstName+" "+ lastName,
                Salary = salary,
                Email = email,
                Phone = phone,
                Department = department
            };
        }
    }
}