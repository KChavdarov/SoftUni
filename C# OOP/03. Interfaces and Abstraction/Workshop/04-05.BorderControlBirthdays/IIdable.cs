using System;
using System.Collections.Generic;
using System.Text;

namespace BorderControlBirthdays
{
    internal interface IIdable
    {
        string Id { get; }

        bool ValidateId(string fragment);
    }
}
