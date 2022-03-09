using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal class Engineer : SpecialisedSoldier, IEngineer
    {
        private ICollection<IRepair> repairs;
        public Engineer(string id, string firstName, string lastName, decimal salary, Corps corps, ICollection<IRepair> repairs) : base(id, firstName, lastName, salary, corps)
        {
            this.repairs = repairs;
        }
        public ICollection<IRepair> Repairs { get => repairs; private set => repairs = value; }
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine(base.ToString());
            sb.AppendLine($"Corps: {Corps}");
            sb.AppendLine("Repairs:");

            foreach (var currentRepair in Repairs)
            {
                sb.AppendLine("  " + currentRepair.ToString());
            }

            return sb.ToString().TrimEnd();
        }
    }
}
