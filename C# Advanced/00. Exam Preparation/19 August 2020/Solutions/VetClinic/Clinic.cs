using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace VetClinic
{
    public class Clinic
    {
        public List<Pet> data;
        public int Capacity { get; set; }
        public int Count => data.Count;

        public Clinic(int capacity)
        {
            data = new List<Pet>();
            Capacity = capacity;
        }


        public void Add(Pet pet)
        {
            if (Count < Capacity)
            {
                data.Add(pet);
            }
        }

        public bool Remove(string name)
        {
            Pet pet = data.Find(a => a.Name == name);
            return data.Remove(pet);
        }

        public Pet GetPet(string name, string owner)
        {
            return data.Find(a => a.Name == name && a.Owner == owner);
        }

        public Pet GetOldestPet()
        {
            return data.OrderByDescending(a => a.Age).FirstOrDefault();
        }

        public string GetStatistics()
        {
            StringBuilder result = new StringBuilder("The clinic has the following patients:\n");
            foreach (Pet pet in data)
            {
                result.AppendLine($"Pet {pet.Name} with owner: {pet.Owner}");
            }
            return result.ToString().TrimEnd();
        }
    }
}
