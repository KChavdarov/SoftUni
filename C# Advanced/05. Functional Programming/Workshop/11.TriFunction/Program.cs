using System;
using System.Linq;

namespace _11.TriFunction
{
    internal class Program
    {
        public delegate bool namePredicate(string name, int limit);
        static void Main(string[] args)
        {
            namePredicate IsCharSumLarge = (string name, int limit) =>
            {
                int sum = name.Sum(x => x);
                return sum >= limit;
            };

            int limit = int.Parse(Console.ReadLine());
            string[] names = Console.ReadLine().Split(' ');

            Action<string[], int, namePredicate> PrintMatchingName = (string[] names, int limit, namePredicate predicate) =>
            {
                Console.WriteLine(names.FirstOrDefault(a => predicate(a, limit)));
            };

            PrintMatchingName(names, limit, IsCharSumLarge);
        }
    }
}
