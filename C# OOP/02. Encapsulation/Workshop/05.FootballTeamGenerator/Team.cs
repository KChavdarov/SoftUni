using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _05.FootballTeamGenerator
{
    internal class Team
    {
        private Dictionary<string, Player> players;

        private string name;

        public Team(string name)
        {
            Name = name;
            players = new Dictionary<string, Player>();
        }

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

        public int Rating => players.Any() ? 0 : (int)Math.Round(players.Values.Average(a => a.Skill));

        public void AddPlayer(Player player)
        {
            players.Add(player.Name, player);
        }

        public bool RemovePlayer(string name)
        {
            return players.Remove(name);
        }
    }
}
