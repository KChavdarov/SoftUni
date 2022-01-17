using System;
using System.Collections.Generic;
using System.Text;

namespace _09.SimpleTextEditor
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //StringBuilder text = new StringBuilder();
            string text = "";
            int n = int.Parse(Console.ReadLine());
            Stack<string> history = new Stack<string>();
            //Stack<StringBuilder> history = new Stack<StringBuilder>();

            for (int i = 0; i < n; i++)
            {
                string[] tokens = Console.ReadLine().Split(' ');
                string command = tokens[0];

                switch (command)
                {
                    case "1":
                        history.Push(text);
                        //text.Append(tokens[1]);
                        text += tokens[1];
                        break;
                    case "2":
                        history.Push(text);
                        int count = int.Parse(tokens[1]);
                        text = text.Remove(text.Length - count, count);
                        break;
                    case "3":
                        Console.WriteLine(text[int.Parse(tokens[1]) - 1]);
                        break;
                    case "4":
                        var oldText = history.Pop();
                        text = oldText;
                        break;
                }
            }
        }
    }
}
