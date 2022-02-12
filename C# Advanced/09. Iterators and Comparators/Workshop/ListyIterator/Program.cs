using System;
using System.Linq;

namespace ListyIterator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ListyIterator<string> listyIterator = new ListyIterator<string>();
            string input = Console.ReadLine();

            while (input != "END")
            {
                string[] tokens = input.Split(' ');
                string command = tokens[0];

                switch (command)
                {
                    case "Create":
                        listyIterator = new ListyIterator<string>(tokens.Skip(1).ToArray());
                        break;
                    case "Move":
                        Console.WriteLine(listyIterator.Move());
                        break;
                    case "Print":
                        listyIterator.Print();
                        break;
                    case "HasNext":
                        Console.WriteLine(listyIterator.HasNext());
                        break;
                    case "PrintAll":
                        listyIterator.PrintAll();
                        break;
                    default:
                        break;
                }

                input = Console.ReadLine();
            }
        }
    }
}
