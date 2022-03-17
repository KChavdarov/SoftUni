using System;
using System.Collections.Generic;
using System.Text;

namespace _03.Raiding.Models
{
    internal abstract class Healer : BaseHero
    {
        protected Healer(string name) : base(name)
        {
        }

        public override string CastAbility()
        {
            return $"{GetType().Name} - {Name} healed for {Power}";
        }
    }
}
