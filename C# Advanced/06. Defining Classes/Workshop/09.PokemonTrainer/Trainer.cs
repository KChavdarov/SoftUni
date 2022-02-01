using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace _09.PokemonTrainer
{
    internal class Trainer
    {
        public string Name { get; set; }

        public Trainer(string name)
        {
            Name = name;
            Badges = 0;
            Pokemons = new List<Pokemon>();
        }

        public int Badges { get; set; }
        public List<Pokemon> Pokemons { get; set; }

        public void AddPokemon(Pokemon pokemon)
        {
            Pokemons.Add(pokemon);
        }
        public void TournamentRound(string element)
        {
            if (Pokemons.Any(a => a.Element == element))
            {
                Badges++;
            }
            else
            {
                Pokemons.ForEach(a => a.LoseRound());
                Pokemons = Pokemons.FindAll(a => a.Health > 0);
            }
        }

        public override string ToString()
        {
            return $"{Name} {Badges} {Pokemons.Count}";
        }
    }
}
