using System;
using System.Collections.Generic;
using System.Text;

namespace _03.Raiding.Models
{
    internal class Paladin : Healer
    {
        public Paladin(string name) : base(name)
        {
            Power = 100;
        }
    }
}
