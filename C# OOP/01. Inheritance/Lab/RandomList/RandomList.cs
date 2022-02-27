using System;
using System.Collections.Generic;
using System.Text;

namespace RandomList
{
    internal class RandomList<T> : List<T>
    {
        private Random random = new Random();

        public T GetRandomItem()
        {
            return this[random.Next(0, Count)];
        }

        public void DeleteRandomItem()
        {
            RemoveAt(random.Next(0, Count));
        }
    }
}
