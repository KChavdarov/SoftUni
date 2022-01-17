using System;
using System.Collections.Generic;

namespace _08.BalancedParenthesis
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string expression = Console.ReadLine();
            Stack<char> opening = new Stack<char>();
            string closing = ")]}";

            for (int i = 0; i < expression.Length; i++)
            {
                if (!closing.Contains(expression[i]))
                {
                    opening.Push(expression[i]);
                }
                else
                {
                    if (opening.Count == 0 || GetOpening(expression[i]) != opening.Pop())
                    {
                        Console.WriteLine("NO");
                        return;
                    }
                }
            }

            Console.WriteLine("YES");
        }

        static char GetOpening(char a)
        {
            switch (a)
            {
                case ')': return '(';
                case ']': return '[';
                case '}': return '{';
                default:
                    return ' ';
            }
        }
    }
}
