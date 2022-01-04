using System;
using System.Linq;

namespace _07.EqualArrays
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var arr1 = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var arr2 = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int sum = 0;

            if (arr1.Length == arr2.Length)
            {

                for (int i = 0; i < arr1.Length; i++)
                {
                    if (arr1[i] != arr2[i])
                    {
                        Console.WriteLine($"Arrays are not identical. Found difference at {i} index");
                        return;
                    }
                    sum += arr1[i];
                }
                Console.WriteLine($"Arrays are identical. Sum: {sum}");
            }
        }
    }
}
