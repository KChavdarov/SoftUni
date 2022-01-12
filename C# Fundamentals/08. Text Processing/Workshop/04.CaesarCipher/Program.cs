using System;
using System.Text;

namespace _04.CaesarCipher
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            StringBuilder result = new StringBuilder();

            foreach (var symbol in input)
            {
                result.Append((char)(symbol + 3));
            }

            Console.WriteLine(result.ToString());
        }
    }
}
