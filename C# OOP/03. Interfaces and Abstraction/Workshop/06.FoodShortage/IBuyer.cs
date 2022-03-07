using System;
using System.Collections.Generic;
using System.Text;

namespace _06.FoodShortage
{
    internal interface IBuyer
    {
        int Food { get; }
        void BuyFood();
    }
}
