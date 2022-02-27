using System;
using System.Linq;

namespace _08.SelectionSort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            for (int i = 0; i < numbers.Length; i++)
            {
                int current = numbers[i];
                int min = numbers[i];
                int minIndex = i;
                for (int j = i + 1; j < numbers.Length; j++)
                {
                    if (numbers[j] < min)
                    {
                        min = numbers[j];
                        minIndex = j;
                    }
                }

                numbers[i] = min;
                numbers[minIndex] = current;
            }

            Console.WriteLine(String.Join(" ", numbers));
        }
    }
}
