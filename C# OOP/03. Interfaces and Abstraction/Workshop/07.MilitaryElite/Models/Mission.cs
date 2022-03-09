using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal class Mission : IMission
    {
        public Mission(string codeName, MissionState state)
        {
            CodeName = codeName;
            State = state;
        }

        public string CodeName { get; private set; }

        public MissionState State { get; private set; }

        public void CompleteMission()
        {
            State = MissionState.Finished;
        }

        public override string ToString()
        {
            return $"Code Name: {CodeName} State: {State}";
        }
    }
}
