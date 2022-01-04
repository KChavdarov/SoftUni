using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.MergingLists
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> listA = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> ListB = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> result = new List<int>();

            int maxLenght = Math.Max(listA.Count, ListB.Count);

            for (int i = 0; i < maxLenght; i++)
            {
                if (listA.Count > i)
                {
                    result.Add(listA[i]);
                }
                if (ListB.Count > i)
                {
                    result.Add(ListB[i]);
                }
            }

            Console.WriteLine(String.Join(' ', result));
        }
    }
}
