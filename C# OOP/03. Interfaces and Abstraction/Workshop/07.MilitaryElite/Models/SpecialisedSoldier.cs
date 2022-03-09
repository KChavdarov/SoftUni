using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal abstract class SpecialisedSoldier : Private, ISpecialisedSoldier
    {
        private Corps corps;
        public SpecialisedSoldier(string id, string firstName, string lastName, decimal salary, Corps corps) : base(id, firstName, lastName, salary)
        {
            Corps = corps;
        }

        public Corps Corps { get => corps; private set => corps = value; }
    }
}
