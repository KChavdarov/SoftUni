using System;
using System.Linq;

namespace CustomComparator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            Comparison<int> numComparison = (x, y) =>
              {
                  if (x % 2 == 0 && y % 2 != 0)
                  {
                      return -1;
                  }
                  else if (x % 2 != 0 && y % 2 == 0)
                  {
                      return 1;
                  }
                  else
                  {
                      return x - y;
                  }
              };

            Array.Sort(numbers, numComparison);
            //Array.Sort(numbers, new NumberComparator());
            Console.WriteLine(string.Join(' ', numbers));
        }
    }
}
