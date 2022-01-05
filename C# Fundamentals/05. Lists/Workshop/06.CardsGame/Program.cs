using System;
using System.Collections.Generic;
using System.Linq;

namespace _06.CardsGame
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> firstPlayer = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> secondPlayer = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            while (firstPlayer.Count != 0 && secondPlayer.Count != 0)
            {
                int cardA = firstPlayer[0];
                int cardB = secondPlayer[0];

                if (cardA == cardB)
                {
                    firstPlayer.RemoveAt(0);
                    secondPlayer.RemoveAt(0);
                }
                else if (cardA > cardB)
                {
                    firstPlayer.RemoveAt(0);
                    secondPlayer.RemoveAt(0);
                    firstPlayer.Add(cardB);
                    firstPlayer.Add(cardA);
                }
                else if (cardA < cardB)
                {
                    firstPlayer.RemoveAt(0);
                    secondPlayer.RemoveAt(0);
                    secondPlayer.Add(cardA);
                    secondPlayer.Add(cardB);
                }
            }

            if (firstPlayer.Count > secondPlayer.Count)
            {
                PrintWinner("First player", firstPlayer);
            }
            else
            {
                PrintWinner("Second player", secondPlayer);
            }
        }

        static void PrintWinner(string name, List<int> player)
        {
            Console.WriteLine($"{name} wins! Sum: {player.Sum()}");
        }
    }
}
