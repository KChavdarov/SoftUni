using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal interface IMission
    {
        public string CodeName { get; }
        public MissionState State { get; }
        void CompleteMission();
    }
}
