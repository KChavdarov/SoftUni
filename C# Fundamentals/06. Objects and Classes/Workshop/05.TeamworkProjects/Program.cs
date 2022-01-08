using System;
using System.Collections.Generic;

namespace _05.TeamworkProjects
{
    internal class Program
    {
        static void Main(string[] args)
        {
            TeamList teamList = new TeamList();
            int count = int.Parse(Console.ReadLine());

            for (int i = 0; i < count; i++)
            {
                string[] tokens = Console.ReadLine().Split('-');
                teamList.CreateAndAddTeam(tokens[0], tokens[1]);
            }

            string input = Console.ReadLine();
            while (input != "end of assignment")
            {
                string[] tokens = input.Split("->");
                teamList.AddMember(tokens[0], tokens[1]);

                input = Console.ReadLine();
            }

            teamList.LogTeamList();
        }
    }

    public class TeamList
    {
        public TeamList()
        {
            Teams = new List<Team>();
        }

        public List<Team> Teams { get; }

        public void CreateAndAddTeam(string creator, string teamName)
        {
            if (Teams.Exists(x => x.Name == teamName))
            {
                Console.WriteLine($"Team {teamName} was already created!");
                return;
            }
            if (Teams.Exists(x => x.Creator == creator))
            {
                Console.WriteLine($"{creator} cannot create another team!");
                return;
            }

            Team team = new Team(teamName, creator);
            Teams.Add(team);
        }

        public void AddMember(string user, string teamName)
        {
            Team team = Teams.Find(x => x.Name == teamName);
            if (team != null)
            {

                if (Teams.Exists(x => x.Members.Contains(user) || x.Creator == user))
                {
                    Console.WriteLine($"Member {user} cannot join team {teamName}!");
                }
                else
                {
                    team.Members.Add(user);
                }
            }
            else
            {
                Console.WriteLine($"Team {teamName} does not exist!");
            }
        }

        public void LogTeamList()
        {
            Teams.Sort((x, y) => x.Name.CompareTo(y.Name));
            Teams.Sort((x, y) => y.Members.Count.CompareTo(x.Members.Count));
            Teams.FindAll(x => x.Members.Count > 0).ForEach(team => team.LogTeam());
            Console.WriteLine("Teams to disband:");
            Teams.FindAll(x => x.Members.Count == 0).ForEach(team => Console.WriteLine(team.Name));
        }
    }

    public class Team
    {
        public Team(string name, string creator)
        {
            Name = name;
            Creator = creator;
            Members = new List<string>();

            Console.WriteLine($"Team {Name} has been created by {Creator}!");
        }

        public string Name { get; set; }
        public string Creator { get; set; }
        public List<string> Members { get; set; }

        public void LogTeam()
        {
            Console.WriteLine(Name);
            Console.WriteLine($"- {Creator}");
            Members.Sort();
            foreach (var member in Members)
            {
                Console.WriteLine($"-- {member}");
            }
        }
    }
}
