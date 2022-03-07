using System;
using System.Collections.Generic;
using System.Text;

namespace _06.FoodShortage
{
    internal interface IIdable
    {
        string Id { get; }

        bool ValidateId(string fragment);
    }
}
