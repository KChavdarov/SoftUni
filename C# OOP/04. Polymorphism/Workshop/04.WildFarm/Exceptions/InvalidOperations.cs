using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm.Exceptions
{
    internal static class InvalidOperations
    {
        public static void InvalidFood(string animal, string food)
        {
            throw new ArgumentException($"{animal} does not eat {food}!");
        }
    }
}
