using System;
using System.Collections.Generic;
using System.Linq;

namespace _07.AppendArrays
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] tokens = Console.ReadLine().Split('|');
            List<int> result = new List<int>();

            for (int i = tokens.Length - 1; i >= 0; i--)
            {
                int[] arr = tokens[i].Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                result.AddRange(arr);
            }

            Console.WriteLine(String.Join(' ', result));
        }
    }
}
