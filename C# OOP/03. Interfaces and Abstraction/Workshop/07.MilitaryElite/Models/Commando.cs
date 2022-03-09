using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal class Commando : SpecialisedSoldier, ICommando
    {
        private ICollection<IMission> missions;
        public Commando(string id, string firstName, string lastName, decimal salary, Corps corps, ICollection<IMission> missions) : base(id, firstName, lastName, salary, corps)
        {
            this.missions = missions;
        }
        public ICollection<IMission> Missions { get => missions; private set => missions = value; }
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine(base.ToString());
            sb.AppendLine($"Corps: {Corps}");
            sb.AppendLine("Missions:");

            foreach (var currentMission in Missions)
            {
                sb.AppendLine("  " + currentMission.ToString());
            }

            return sb.ToString().TrimEnd();
        }
    }
}
