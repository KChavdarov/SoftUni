using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Guild
{
    internal class Guild
    {
        public Guild(string name, int capacity)
        {
            roster = new List<Player>();
            Name = name;
            Capacity = capacity;
        }

        public List<Player> roster { get; set; }
        public string Name { get; set; }
        public int Capacity { get; set; }
        public int Count => roster.Count;

        public void AddPlayer(Player player)
        {
            if (Count < Capacity)
            {
                roster.Add(player);
            }
        }

        public bool RemovePlayer(string name)
        {
            Player player = roster.Find(x => x.Name == name);
            return roster.Remove(player);
        }

        public void PromotePlayer(string name)
        {
            Player player = roster.Find(x => x.Name == name);
            if (player != null)
            {
                player.Rank = "Member";
            }
        }

        public void DemotePlayer(string name)
        {
            Player player = roster.Find(x => x.Name == name);
            if (player != null)
            {
                player.Rank = "Trial";
            }
        }

        public Player[] KickPlayersByClass(string @class)
        {
            Player[] players = roster.Where(x => x.Class == @class).ToArray();
            foreach (var player in players)
            {
                roster.Remove(player);
            }

            return players;
        }

        public string Report()
        {
            StringBuilder result = new StringBuilder();

            result.AppendLine($"Players in the guild: {Name}");
            foreach (var player in roster)
            {
                result.AppendLine(player.ToString());
            }

            return result.ToString().Trim();
        }
    }
}