using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal class LieutenantGeneral : Private, ILieutenantGeneral
    {
        private Dictionary<string, IPrivate> privates;
        public LieutenantGeneral(string id, string firstName, string lastName, decimal salary) : base(id, firstName, lastName, salary)
        {
            privates = new Dictionary<string, IPrivate>();
        }
        public Dictionary<string, IPrivate> Privates => privates;

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine(base.ToString());
            sb.AppendLine("Privates:");

            foreach (var currentPrivate in Privates)
            {
                sb.AppendLine("  " + currentPrivate.Value.ToString());
            }

            return sb.ToString().TrimEnd();
        }
    }
}
