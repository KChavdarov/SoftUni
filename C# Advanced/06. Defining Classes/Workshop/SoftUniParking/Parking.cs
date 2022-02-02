using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SoftUniParking
{
    internal class Parking
    {
        private Dictionary<string, Car> cars;

        private int capacity;

        public Dictionary<string, Car> Cars
        {
            get { return cars; }
            set { cars = value; }
        }

        public Parking(int capacity)
        {
            this.capacity = capacity;
            cars = new Dictionary<string, Car>(this.capacity);
        }

        public int Count { get => Cars.Count; }

        public string AddCar(Car car)
        {
            if (Cars.ContainsKey(car.RegistrationNumber))
            {
                return "Car with that registration number, already exists!";
            }
            else
            {
                if (Cars.Count == capacity)
                {
                    return "Parking is full!";
                }
                else
                {
                    Cars.Add(car.RegistrationNumber, car);
                    return $"Successfully added new car {car.Make} {car.RegistrationNumber}";
                }
            }
        }

        public string RemoveCar(string registrationNumber)
        {
            if (Cars.ContainsKey(registrationNumber))
            {
                cars.Remove(registrationNumber);
                return $"Successfully removed {registrationNumber}";
            }
            else
            {
                return "Car with that registration number, doesn't exist!";
            }

        }

        public Car GetCar(string registrationNumber)
        {
            return Cars.FirstOrDefault(a => a.Value.RegistrationNumber == registrationNumber).Value;
        }

        public void RemoveSetOfRegistrationNumber(List<string> registrationNumbers)
        {
            foreach (string registrationNumber in new HashSet<string>(registrationNumbers))
            {
                RemoveCar(registrationNumber);
            }
        }
    }
}
