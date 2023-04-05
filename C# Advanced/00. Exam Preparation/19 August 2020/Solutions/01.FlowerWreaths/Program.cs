using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.FlowerWreaths
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Stack<int> lilies = new Stack<int>(Console.ReadLine().Split(", ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            Queue<int> roses = new Queue<int>(Console.ReadLine().Split(", ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));

            int wreaths = 0;
            int store = 0;

            while (lilies.Count > 0 && roses.Count > 0)
            {
                int lily = lilies.Pop();
                int rose = roses.Dequeue();

                while (true)
                {
                    if (rose + lily == 15)
                    {
                        wreaths++;
                        break;
                    }
                    else if (rose + lily < 15)
                    {
                        store += rose + lily;
                        break;
                    }
                    else if (rose + lily > 15)
                    {
                        lily -= 2;
                    }
                }
            }

            wreaths += store / 15;

            if (wreaths < 5)
            {
                Console.WriteLine($"You didn't make it, you need {5 - wreaths} wreaths more!");
            }
            else
            {
                Console.WriteLine($"You made it, you are going to the competition with {wreaths} wreaths!");
            }
        }
    }
}
