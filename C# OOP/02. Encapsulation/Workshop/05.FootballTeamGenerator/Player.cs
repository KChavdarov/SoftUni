using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _05.FootballTeamGenerator
{
    internal class Player
    {

        private string name;
        private Dictionary<string, int> stats;

        public string Name
        {
            get { return name; }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("A name should not be empty.");
                }
                name = value;
            }
        }


        public Player(string name, int endurance, int sprint, int dribble, int passing, int shooting)
        {
            Name = name;
            stats = new Dictionary<string, int>()
            {
                { "Endurance", endurance },
                { "Sprint", sprint },
                { "Dribble", dribble },
                { "Passing", passing },
                { "Shooting", shooting },
            };

            ValidateStats();
        }

        public IReadOnlyDictionary<string, int> Stats => stats;

        public double Skill => stats.Average(a => a.Value);

        private void ValidateStats()
        {
            foreach (var (stat, value) in stats)
            {
                if (value < 0 || value > 100)
                {
                    throw new ArgumentException($"{stat} should be between 0 and 100.");
                }
            }
        }
    }
}
