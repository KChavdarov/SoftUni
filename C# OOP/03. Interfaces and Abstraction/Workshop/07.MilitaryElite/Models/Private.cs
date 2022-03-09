using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal class Private : Soldier, IPrivate
    {
        public Private(string id, string firstName, string lastName, decimal salary) : base(id, firstName, lastName)
        {
            Salary = salary;
        }

        private decimal salary;

        public decimal Salary
        {
            get { return salary; }
            private set { salary = value; }
        }

        public override string ToString()
        {
            return base.ToString() + $" Salary: {Salary:F2}";
        }
    }
}
