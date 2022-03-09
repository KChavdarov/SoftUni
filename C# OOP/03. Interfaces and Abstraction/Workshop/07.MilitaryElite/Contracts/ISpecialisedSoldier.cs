using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal interface ISpecialisedSoldier : IPrivate
    {
        public Corps Corps { get; }
    }
}
