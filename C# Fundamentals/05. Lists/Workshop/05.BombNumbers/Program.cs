using System;
using System.Collections.Generic;
using System.Linq;

namespace _05.BombNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int[] tokens = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int bomb = tokens[0];
            int power = tokens[1];

            int bombIndex = numbers.IndexOf(bomb);

            while (bombIndex != -1)
            {
                int rightIndex = bombIndex + 1;
                for (int i = 0; i < power; i++)
                {
                    if (rightIndex >= 0 && rightIndex < numbers.Count)
                    {
                        numbers.RemoveAt(rightIndex);
                    }
                    else
                    {
                        break;
                    }
                }

                int leftIndex = bombIndex;
                for (int i = 0; i <= power; i++)
                {
                    if (leftIndex >= 0 && leftIndex < numbers.Count)
                    {
                        numbers.RemoveAt(leftIndex);
                        leftIndex--;
                    }
                    else
                    {
                        break;
                    }
                }

                bombIndex = numbers.IndexOf(bomb);
            }

            Console.WriteLine(numbers.Sum());
            //Console.WriteLine(String.Join(" ", numbers));
        }
    }
}
