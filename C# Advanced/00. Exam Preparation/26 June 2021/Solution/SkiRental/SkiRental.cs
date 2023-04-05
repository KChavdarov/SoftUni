using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace SkiRental
{
    internal class SkiRental
    {
        private List<Ski> data;

        public int Count { get; private set; }
        public SkiRental(string name, int capacity)
        {
            Count = 0;
            data = new List<Ski>();
            Name = name;
            Capacity = capacity;
        }

        public string Name { get; set; }
        public int Capacity { get; set; }

        public void Add(Ski ski)
        {
            if (Count < Capacity)
            {
                data.Add(ski);
                Count++;
            }
        }

        public bool Remove(string manufacturer, string model)
        {
            Ski ski = GetSki(manufacturer, model);
            if (ski != null)
            {
                Count--;
                return data.Remove(ski);
            }
            return false;
        }

        public Ski GetNewestSki()
        {
            return data.OrderByDescending(a => a.Year).FirstOrDefault();
        }

        public Ski GetSki(string manufacturer, string model)
        {
            return data.Find(a => a.Manufacturer == manufacturer && a.Model == model);
        }
        public string GetStatistics()
        {
            StringBuilder result = new StringBuilder($"The skis stored in {Name}:\n");
            foreach (var ski in data)
            {
                result.AppendLine(ski.ToString());
            }

            return result.ToString();
        }
    }
}
