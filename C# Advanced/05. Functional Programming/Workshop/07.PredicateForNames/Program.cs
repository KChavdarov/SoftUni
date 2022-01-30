using System;
using System.Linq;

namespace _07.PredicateForNames
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            string[] names = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);
            Func<string, bool> nameFilter = name => name.Length <= n;
            names.Where(nameFilter).ToList().ForEach(Console.WriteLine);
        }
    }
}
