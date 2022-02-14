using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace StreetRacing
{
    internal class Race
    {
        public Race(string name, string type, int laps, int capacity, int maxHorsePower)
        {
            Name = name;
            Type = type;
            Laps = laps;
            Capacity = capacity;
            MaxHorsePower = maxHorsePower;
        }

        public Dictionary<string, Car> Participants { get; set; } = new Dictionary<string, Car>();
        public string Name { get; set; }
        public string Type { get; set; }
        public int Laps { get; set; }
        public int Capacity { get; set; }
        public int MaxHorsePower { get; set; }

        public int Count => Participants.Count;

        public void Add(Car car)
        {
            if (!Participants.ContainsKey(car.LicensePlate) && Capacity > Count && car.HorsePower <= MaxHorsePower)
            {
                Participants[car.LicensePlate] = car;
            }
        }

        public bool Remove(string licensePlate)
        {
            if (Participants.ContainsKey(licensePlate))
            {
                Participants.Remove(licensePlate);
                return true;
            }
            return false;
        }

        public Car FindParticipant(string licensePlate)
        {
            return Participants.ContainsKey(licensePlate) ? Participants[licensePlate] : null;
        }

        public Car GetMostPowerfulCar()
        {
            return Count > 0 ? Participants.OrderByDescending(a => a.Value.HorsePower).First().Value : null;
        }

        public string Report()
        {
            StringBuilder result = new StringBuilder($"Race: {Name} - Type: {Type} (Laps: {Laps})\n");
            foreach (var entry in Participants)
            {
                result.AppendLine(entry.Value.ToString());
            }

            return result.ToString();
        }
    }
}
