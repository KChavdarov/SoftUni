using System;
using System.Linq;

namespace _04.ArrayRotation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int rotations = int.Parse(Console.ReadLine());
            if (rotations >= numbers.Length)
            {
                rotations = rotations - numbers.Length;
            }

            for (int i = 0; i < rotations; i++)
            {
                int temp = numbers[0];
                for (int j = 1; j < numbers.Length; j++)
                {
                    numbers[j - 1] = numbers[j];
                }
                numbers[numbers.Length - 1] = temp;
            }
            Console.WriteLine(String.Join(" ", numbers));
        }
    }
}
