using System;
using System.Linq;

namespace _04.FindEvensOrOdds
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] tokens = Console.ReadLine().Split(' ');
            int min = int.Parse(tokens[0]);
            int max = int.Parse(tokens[1]);
            string command = Console.ReadLine();
            var nums = Enumerable.Range(min, max - min + 1);

            Console.WriteLine(String.Join(' ', nums.Where(GetPredicate(command))));
        }

        static Func<int, bool> GetPredicate(string command)
        {
            switch (command)
            {
                case "even":
                    return a => a % 2 == 0;
                case "odd":
                    return a => a % 2 != 0;
                default:
                    return a => true;
            }
        }
    }
}
