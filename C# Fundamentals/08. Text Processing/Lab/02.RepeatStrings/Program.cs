using System;
using System.Text;

namespace _02.RepeatStrings
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] words = Console.ReadLine().Split(' ');

            foreach (var word in words)
            {
                StringBuilder sb = new StringBuilder();

                for (int i = 0; i < word.Length; i++)
                {
                    sb.Append(word);
                }

                Console.WriteLine(sb.ToString());
            }
        }
    }
}
