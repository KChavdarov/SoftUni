using System;
using System.Linq;

namespace _08.ListOfPredicates
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[] divisors = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).Distinct().ToArray();
            int[] nums = Enumerable.Range(1, n).ToArray();

            //Option 1:
            Func<int, bool>[] predicates = divisors.Select(CreatePredicate).ToArray();

            foreach (var predicate in predicates)
            {
                nums = nums.Where(predicate).ToArray();
            }

            //Option 2:
            //Func<int, bool> isDivisible = x =>
            // {
            //     bool result = true;
            //     foreach (var divisor in divisors)
            //     {
            //         if (x % divisor != 0)
            //         {
            //             result = false;
            //             break;
            //         }
            //     }

            //     return result;
            // };

            //nums = nums.Where(isDivisible).ToArray();

            Console.WriteLine(String.Join(' ', nums));
        }

        static Func<int, bool> CreatePredicate(int n)
        {
            return x => x % n == 0;
        }
    }
}
