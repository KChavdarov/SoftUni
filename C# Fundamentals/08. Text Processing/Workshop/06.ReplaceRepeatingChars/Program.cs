using System;
using System.Text;

namespace _06.ReplaceRepeatingChars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string str = Console.ReadLine();
            StringBuilder result = new StringBuilder(str);
            char current = result[0];

            for (int i = 0; i < result.Length - 1; i++)
            {
                if (result[i + 1] == current)
                {
                    result.Remove(i, 1);
                    i--;
                }
                else
                {
                    current = result[i + 1];
                }
            }

            Console.WriteLine(result.ToString());
        }
    }
}
