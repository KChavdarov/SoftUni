using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TheRace
{
    public class Race
    {
        readonly private List<Racer> data;
        public int Count => data.Count;

        public Race(string name, int capacity)
        {
            data = new List<Racer>();
            Name = name;
            Capacity = capacity;
        }

        public string Name { get; set; }
        public int Capacity { get; set; }

        public void Add(Racer racer)
        {
            if (data.Count < Capacity)
            {
                data.Add(racer);
            }
        }

        public bool Remove(string name)
        {
            if (data.Any(a => a.Name == name))
            {
                return data.Remove(data.Find(a => a.Name == name));
            }
            return false;
        }

        public Racer GetOldestRacer()
        {
            return data.OrderByDescending(a => a.Age).FirstOrDefault();
        }

        public Racer GetRacer(string name)
        {
            return data.FirstOrDefault(a => a.Name == name);
        }

        public Racer GetFastestRacer()
        {
            return data.OrderByDescending(a => a.Car.Speed).FirstOrDefault();
        }

        public string Report()
        {
            StringBuilder result = new StringBuilder($"Racers participating at {Name}:\n");
            foreach (var racer in data)
            {
                result.AppendLine(racer.ToString());
            }
            return result.ToString();
        }
    }
}
