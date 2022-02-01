using System;
using System.Collections.Generic;
using System.Linq;

namespace _09.PokemonTrainer
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            Dictionary<string, Trainer> trainers = new Dictionary<string, Trainer>();
            while (input != "Tournament")
            {
                string[] tokens = input.Split(' ');
                string trainerName = tokens[0];
                string pokemonName = tokens[1];
                string element = tokens[2];
                int health = int.Parse(tokens[3]);
                if (!trainers.ContainsKey(trainerName))
                {
                    trainers.Add(trainerName, new Trainer(trainerName));
                }
                trainers[trainerName].AddPokemon(new Pokemon(pokemonName, element, health));
                input = Console.ReadLine();
            }

            input = Console.ReadLine();
            while (input != "End")
            {
                foreach (var trainer in trainers)
                {
                    trainer.Value.TournamentRound(input);
                }
                input = Console.ReadLine();
            }

            Console.WriteLine(String.Join(Environment.NewLine, trainers.Values.OrderByDescending(a => a.Badges)));
        }
    }
}
