using System;

namespace _01.RandomizeWords
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(' ');
            Random random = new Random();

            for (int i = 0; i < input.Length; i++)
            {
                int randomIndex = random.Next(0, input.Length);

                string temp = input[randomIndex];
                input[randomIndex] = input[i];
                input[i] = temp;
            }

            foreach (var item in input)
            {
                Console.WriteLine(item);
            }
        }
    }
}
