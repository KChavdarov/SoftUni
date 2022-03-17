using _03.Raiding.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace _03.Raiding.Core
{
    internal class Engine
    {
        private List<BaseHero> heroes;

        public Engine()
        {
            heroes = new List<BaseHero>();
        }

        public void Run()
        {
            int count = int.Parse(Console.ReadLine());

            while (heroes.Count != count)
            {
                string name = Console.ReadLine();
                string type = Console.ReadLine();
                BaseHero hero = HeroFactory(name, type);

                if (hero == null)
                {
                    Console.WriteLine("Invalid hero!");
                    continue;
                }

                heroes.Add(hero);
            }

            int bossPower = int.Parse(Console.ReadLine());

            FightBoss(bossPower);

        }

        private void FightBoss(int bossPower)
        {
            int partyPower = 0;
            foreach (var hero in heroes)
            {
                partyPower += hero.Power;
                Console.WriteLine(hero.CastAbility());
            }

            if (partyPower < bossPower)
            {
                Console.WriteLine("Defeat...");
            }
            else
            {
                Console.WriteLine("Victory!");
            }
        }

        private BaseHero HeroFactory(string name, string type)
        {
            switch (type)
            {
                case "Druid":
                    return new Druid(name);
                case "Paladin":
                    return new Paladin(name);
                case "Rogue":
                    return new Rogue(name);
                case "Warrior":
                    return new Warrior(name);
                default:
                    return null;
            }
        }

    }
}
