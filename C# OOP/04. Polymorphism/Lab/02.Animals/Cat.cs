using System;
using System.Collections.Generic;
using System.Text;

namespace _02.Animals
{
    internal class Cat : Animal
    {
        public Cat(string name, string favoriteFood) : base(name, favoriteFood) { }

        public override string ExplainSelf() => $"{base.ExplainSelf()}{Environment.NewLine}MEOW!";
    }
}
