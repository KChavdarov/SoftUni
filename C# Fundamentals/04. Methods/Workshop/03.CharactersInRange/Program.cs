using System;
using System.Text;

namespace _03.CharactersInRange
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a = char.Parse(Console.ReadLine());
            int b = char.Parse(Console.ReadLine());
            int start = Math.Min(a, b);
            int end = Math.Max(a, b);

            StringBuilder result = new StringBuilder();
            for (int i = start + 1; i < end; i++)
            {
                result.Append($"{(char)i} ");
            }
            Console.WriteLine(result.ToString());
        }
    }
}
