using System;
using System.Linq;

namespace _04.WordFilter
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] words = Console.ReadLine().Split(' ');
            words.Where(a => a.Length % 2 == 0).ToList().ForEach(Console.WriteLine);
        }
    }
}
