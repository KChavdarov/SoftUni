using System;
using System.Linq;
using System.Text;

namespace _01.ReverseStrings
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string word = Console.ReadLine();

            while (word != "end")
            {
                string reversed = string.Join("", word.ToCharArray().Reverse().ToArray());

                Console.WriteLine($"{word} = {reversed}");

                word = Console.ReadLine();
            }

        }
    }
}
