using System;

namespace _02.CommonElements
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var arr1 = Console.ReadLine().Split(' ');
            var arr2 = Console.ReadLine().Split(' ');

            foreach (var item in arr2)
            {
                foreach (var otherItem in arr1)
                {
                    if (item.Equals(otherItem))
                    {
                        Console.Write($"{item} ");
                        break;
                    }
                }
            }
        }
    }
}
