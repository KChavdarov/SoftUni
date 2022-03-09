using System;
using System.Collections.Generic;
using System.Text;

namespace _07.MilitaryElite
{
    internal class Engine
    {
        private Dictionary<string, ISoldier> soldiers;
        public Engine()
        {
            soldiers = new Dictionary<string, ISoldier>();
        }

        public void Run()
        {
            string input = Console.ReadLine();
            while (input != "End")
            {
                try
                {
                    ProcessInput(input);
                }
                catch (Exception) { }

                input = Console.ReadLine();
            }

            Console.WriteLine(reportSoldiers());
        }

        private void ProcessInput(string input)
        {
            string[] tokens = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);
            string type = tokens[0];
            string id = tokens[1];
            string firstName = tokens[2];
            string lastName = tokens[3];

            switch (type)
            {
                case "Private":
                    {
                        decimal salary = decimal.Parse(tokens[4]);
                        soldiers.Add(id, new Private(id, firstName, lastName, salary));
                        break;
                    }
                case "LieutenantGeneral":
                    {
                        decimal salary = decimal.Parse(tokens[4]);
                        LieutenantGeneral lieutenantGeneral = new LieutenantGeneral(id, firstName, lastName, salary);
                        for (int i = 5; i < tokens.Length; i++)
                        {
                            string privateId = tokens[i];
                            lieutenantGeneral.Privates.Add(privateId, (IPrivate)soldiers[privateId]);
                        }
                        soldiers.Add(id, lieutenantGeneral);

                        break;
                    }
                case "Engineer":
                    {
                        decimal salary = decimal.Parse(tokens[4]);
                        bool isValidCorps = Enum.TryParse(tokens[5], out Corps corps);
                        ICollection<IRepair> repairs = new List<IRepair>();

                        if (!isValidCorps)
                        {
                            throw new Exception();
                        }

                        for (int i = 6; i < tokens.Length; i++)
                        {
                            repairs.Add(new Repair(tokens[i], int.Parse(tokens[++i])));
                        }

                        soldiers.Add(id, new Engineer(id, firstName, lastName, salary, corps, repairs));

                        break;
                    }
                case "Commando":
                    {
                        decimal salary = decimal.Parse(tokens[4]);
                        bool isValidCorps = Enum.TryParse(tokens[5], out Corps corps);
                        ICollection<IMission> missions = new List<IMission>();

                        if (!isValidCorps)
                        {
                            throw new Exception();
                        }

                        for (int i = 6; i < tokens.Length; i++)
                        {
                            string codeName = tokens[i];
                            bool isValidState = Enum.TryParse(tokens[++i], out MissionState missionState);

                            if (!isValidState)
                            {
                                continue;
                            }

                            missions.Add(new Mission(codeName, missionState));
                        }

                        soldiers.Add(id, new Commando(id, firstName, lastName, salary, corps, missions));
                        break;
                    }
                case "Spy":
                    {
                        int codeNumber = int.Parse(tokens[4]);
                        soldiers.Add(id, new Spy(id, firstName, lastName, codeNumber));
                        break;
                    }
                default:
                    break;
            }
        }

        private string reportSoldiers()
        {
            StringBuilder result = new StringBuilder();

            foreach (var solider in soldiers.Values)
            {
                result.AppendLine(solider.ToString());
            }

            return result.ToString().Trim();
        }
    }
}
