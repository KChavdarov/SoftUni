using System;
using System.Collections.Generic;
using System.Text;

namespace _03.Raiding.Models
{
    internal class Fighter : BaseHero
    {
        public Fighter(string name) : base(name)
        {
        }

        public override string CastAbility()
        {
            return $"{GetType().Name} - {Name} hit for {Power} damage";
        }
    }
}
