using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Persons
{
    internal class Team
    {
        private List<Person> firstTeam;
        private List<Person> reserveTeam;

        public string Name { get; set; }
        public IReadOnlyCollection<Person> FirstTeam => firstTeam;
        public IReadOnlyCollection<Person> ReserveTeam => reserveTeam;

        public Team(string name)
        {
            firstTeam = new List<Person>();
            reserveTeam = new List<Person>();
            Name = name;
        }

        public void AddPlayer(Person person)
        {
            if (person.Age < 40)
            {
                firstTeam.Add(person);
            }
            else
            {
                reserveTeam.Add(person);
            }
        }
    }
}
