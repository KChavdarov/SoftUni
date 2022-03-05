using System;
using System.Collections.Generic;

namespace _05.FootballTeamGenerator
{
    internal class Program
    {
        static Dictionary<string, Team> teams = new Dictionary<string, Team>();
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            while (input != "END")
            {
                try
                {
                    string[] tokens = input.Split(';', StringSplitOptions.RemoveEmptyEntries);
                    string command = tokens[0];
                    string teamName = tokens[1];

                    switch (command)
                    {
                        case "Team":
                            teams.Add(teamName, new Team(teamName));
                            break;
                        case "Add":
                            {
                                checkExistingTeam(teamName);
                                string playerName = tokens[2];
                                int endurance = int.Parse(tokens[3]);
                                int sprint = int.Parse(tokens[4]);
                                int dribble = int.Parse(tokens[5]);
                                int passing = int.Parse(tokens[6]);
                                int shooting = int.Parse(tokens[7]);
                                Player player = new Player(playerName, endurance, sprint, dribble, passing, shooting);
                                teams[teamName].AddPlayer(player);
                                break;
                            }
                        case "Remove":
                            {
                                checkExistingTeam(teamName);
                                string playerName = tokens[2];
                                bool isRemoved = teams[teamName].RemovePlayer(playerName);
                                if (!isRemoved)
                                {
                                    throw new Exception($"Player {playerName} is not in {teamName} team.");
                                }

                                break;
                            }
                        case "Rating":
                            {
                                checkExistingTeam(teamName);
                                Team team = teams[teamName];
                                Console.WriteLine($"{team.Name} - {team.Rating}");
                                break;
                            }
                        default:
                            break;
                    }

                }
                catch (Exception err)
                {
                    Console.WriteLine(err.Message);
                }

                input = Console.ReadLine();
            }
        }

        static void checkExistingTeam(string teamName)
        {
            if (!teams.ContainsKey(teamName))
            {
                throw new Exception($"Team {teamName} does not exist.");
            }
        }
    }
}
