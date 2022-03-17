using System;
using System.Collections.Generic;
using System.Text;

namespace _03.Raiding.Models
{
    internal class Rogue : Fighter
    {
        public Rogue(string name) : base(name)
        {
            Power = 80;
        }
    }
}
