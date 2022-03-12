using System;
using System.Collections.Generic;
using System.Text;

namespace _02.Animals
{
    internal class Dog : Animal
    {
        public Dog(string name, string favoriteFood) : base(name, favoriteFood) { }

        public override string ExplainSelf() => $"{base.ExplainSelf()}{Environment.NewLine}WOOF!";
    }
}
