using System;
using System.Collections.Generic;
using System.Text;

namespace _03.Raiding.Models
{
    internal class Druid : Healer
    {
        public Druid(string name) : base(name)
        {
            Power = 80;
        }
    }
}
