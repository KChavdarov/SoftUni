using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Drones
{
    public class Airfield
    {
        public Airfield(string name, int capacity, double landingStrip)
        {
            Drones = new List<Drone>();
            Name = name;
            Capacity = capacity;
            LandingStrip = landingStrip;
        }

        public string Name { get; set; }
        public int Capacity { get; private set; }
        public double LandingStrip { get; set; }
        public List<Drone> Drones { get; set; }
        public int Count => Drones.Count;

        public string AddDrone(Drone drone)
        {
            if (Count < Capacity)
            {
                if (string.IsNullOrEmpty(drone.Name) || string.IsNullOrEmpty(drone.Brand) || drone.Range < 5 || drone.Range > 15)
                {
                    return "Invalid drone.";
                }
                else
                {
                    Drones.Add(drone);
                    return $"Successfully added {drone.Name} to the airfield.";
                }
            }
            else
            {
                return "Airfield is full.";
            }
        }

        public bool RemoveDrone(string name)
        {
            Drone drone = Drones.FirstOrDefault(a => a.Name == name);
            return Drones.Remove(drone);
        }

        public int RemoveDroneByBrand(string brand)
        {
            return Drones.RemoveAll(a => a.Brand == brand);
        }

        public Drone FlyDrone(string name)
        {
            Drone drone = Drones.FirstOrDefault(a => a.Name == name);
            if (drone == null)
            {
                drone.Fly();
            }
            return drone;
        }

        public List<Drone> FlyDronesByRange(int range)
        {
            var drones = Drones.FindAll(a => a.Range >= range);
            drones.ForEach(a => a.Fly());
            return drones;
        }

        public string Report()
        {
            StringBuilder result = new StringBuilder();

            result.AppendLine($"Drones available at {Name}:");

            foreach (var drone in Drones.FindAll(a => a.Available))
            {
                result.AppendLine(drone.ToString());
            }

            return result.ToString().Trim();
        }
    }
}
