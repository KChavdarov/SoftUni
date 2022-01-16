using System;
using System.Collections.Generic;

namespace _04.MatchingBrackets
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string expression = Console.ReadLine();
            Stack<int> brackets = new Stack<int>();

            for (int i = 0; i < expression.Length; i++)
            {
                if (expression[i] == '(')
                {
                    brackets.Push(i);
                }
                else if (expression[i] == ')')
                {
                    int start = brackets.Pop();

                    Console.WriteLine(expression.Substring(start, i - start + 1));
                }
            }
        }
    }
}
