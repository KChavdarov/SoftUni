using System;
using System.Collections.Generic;
using System.Text;

namespace Animals
{
    internal class Tomcat : Cat
    {
        private const string TomCatGender = "Male";
        public Tomcat(string name, int age, string gender) : base(name, age, TomCatGender)
        {
        }

        public override string ProduceSound()
        {
            return "MEOW";
        }
    }
}
