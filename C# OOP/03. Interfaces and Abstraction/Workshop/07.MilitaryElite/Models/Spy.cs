using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal class Spy : Soldier, ISpy
    {
        private int codeNumber;
        public Spy(string id, string firstName, string lastName, int codeNumber) : base(id, firstName, lastName)
        {
            CodeNumber = codeNumber;
        }
        public int CodeNumber { get => codeNumber; private set => codeNumber = value; }
        public override string ToString()
        {
            return base.ToString() + $"{Environment.NewLine}Code Number: {CodeNumber}";
        }
    }
}
