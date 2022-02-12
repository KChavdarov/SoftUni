using System;
using System.Linq;

namespace Stack
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var myStack = new CustomStack<int>();
            string input = Console.ReadLine();

            while (input != "END")
            {
                string[] tokens = input.Split(new string[] { " ", ", " }, StringSplitOptions.RemoveEmptyEntries);
                string command = tokens[0];

                switch (command)
                {
                    case "Push":
                        var ints = tokens.Skip(1).Select(int.Parse).ToArray();
                        myStack.Push(ints);
                        break;
                    case "Pop":
                        try
                        {
                            myStack.Pop();
                        }
                        catch
                        {
                            Console.WriteLine("No elements");
                        }
                        break;
                    default:
                        break;
                }

                input = Console.ReadLine();
            }

            foreach (var item in myStack)
            {
                Console.WriteLine(item);
            }
            foreach (var item in myStack)
            {
                Console.WriteLine(item);
            }
        }
    }
}
