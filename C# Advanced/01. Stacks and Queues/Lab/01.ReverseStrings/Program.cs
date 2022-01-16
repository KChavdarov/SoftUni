using System;
using System.Collections.Generic;
using System.Text;

namespace _01.ReverseStrings
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine();
            Stack<char> stack = new Stack<char>();
            StringBuilder result = new StringBuilder();

            foreach (char letter in text)
            {
                stack.Push(letter);
            }

            while (stack.Count > 0)
            {
                result.Append(stack.Pop());
            }

            Console.WriteLine(result.ToString());
        }
    }
}
