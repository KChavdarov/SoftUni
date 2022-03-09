using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal interface ILieutenantGeneral : IPrivate
    {
        public Dictionary<string, IPrivate> Privates { get; }
    }
}
