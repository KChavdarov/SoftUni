using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09._Iterators_and_Comparators
{
    internal class CustomComparator : IComparer<int>
    {
        public int Compare(int x, int y)
        {
            int result = Math.Abs(x % 2) - Math.Abs(y % 2);
            if (result == 0)
            {
                result = x - y;
            }
            return result;
        }
    }
}