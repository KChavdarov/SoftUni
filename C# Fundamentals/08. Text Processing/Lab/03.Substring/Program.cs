using System;

namespace _03.Substring
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string str = Console.ReadLine();
            string text = Console.ReadLine();

            while (text.Contains(str))
            {
                text = text.Replace(str, "");
            }

            Console.WriteLine(text);
        }
    }
}
