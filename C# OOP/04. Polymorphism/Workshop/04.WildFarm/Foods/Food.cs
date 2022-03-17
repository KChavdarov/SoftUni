using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm.Foods
{
    internal abstract class Food : IFood
    {
        public int Quantity { get; set; }

        protected Food(int quantity)
        {
            Quantity = quantity;
        }
    }
}
