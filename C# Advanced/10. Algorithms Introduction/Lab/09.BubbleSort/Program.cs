using System;
using System.Linq;

namespace _09.BubbleSort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            //bool swapped = true;
            //while (swapped)
            //{
            //    swapped = false;
            //    for (int i = 0; i < numbers.Length - 1; i++)
            //    {
            //        int numA = numbers[i];
            //        int numB = numbers[i + 1];
            //        if (numA > numB)
            //        {
            //            numbers[i] = numB;
            //            numbers[i + 1] = numA;
            //            swapped = true;
            //        }
            //    }
            //}

            for (int i = 0; i < numbers.Length; i++)
            {
                for (int j = i + 1; j < numbers.Length; j++)
                {
                    if (numbers[i] > numbers[j])
                    {
                        int temp = numbers[i];
                        numbers[i] = numbers[j];
                        numbers[j] = temp;
                    }
                }
            }

            Console.WriteLine(String.Join(" ", numbers));
        }
    }
}
