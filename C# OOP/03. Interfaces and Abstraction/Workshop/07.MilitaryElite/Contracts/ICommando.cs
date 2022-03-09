using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal interface ICommando : ISpecialisedSoldier
    {
        ICollection<IMission> Missions { get; }
    }
}
