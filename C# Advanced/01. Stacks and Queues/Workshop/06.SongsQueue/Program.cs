using System;
using System.Collections.Generic;

namespace _06.SongsQueue
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Queue<string> songs = new Queue<string>(Console.ReadLine().Split(", ", StringSplitOptions.RemoveEmptyEntries));
            string input = Console.ReadLine();

            while (songs.Count > 0)
            {
                List<string> tokens = new List<string>(input.Split(' '));
                string action = tokens[0];

                switch (action)
                {
                    case "Add":
                        string song = String.Join(" ", tokens.GetRange(1, tokens.Count - 1));
                        if (songs.Contains(song))
                        {
                            Console.WriteLine($"{song} is already contained!");
                        }
                        else
                        {
                            songs.Enqueue(song);
                        }
                        break;
                    case "Play":
                        songs.Dequeue();
                        break;
                    case "Show":
                        Console.WriteLine(String.Join(", ", songs));
                        break;
                }

                input = Console.ReadLine();
            }

            Console.WriteLine("No more songs!");
        }
    }
}
