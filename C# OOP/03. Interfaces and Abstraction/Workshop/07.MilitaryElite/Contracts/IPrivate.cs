﻿using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal interface IPrivate : ISoldier
    {
        public decimal Salary { get; }
    }
}
