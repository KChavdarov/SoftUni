using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _03.ShoppingSpree
{
    public class Person
    {
        private string name;
        private decimal money;
        private List<Product> products;

        public Person(string name, decimal money)
        {
            products = new List<Product>();
            Name = name;
            Money = money;
        }

        public string Name
        {
            get => name;
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Name cannot be empty");
                }
                name = value;
            }
        }

        public decimal Money
        {
            get => money;
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Money cannot be negative");
                }
                money = value;
            }
        }

        public bool Buy(Product product)
        {
            if (product.Cost > Money)
            {
                return false;
            }
            else
            {
                Money -= product.Cost;
                products.Add(product);
                return true;
            }
        }

        public override string ToString()
        {
            string bought = products.Count == 0 ? "Nothing bought" : string.Join(", ", products.Select(a => a.Name));
            return $"{Name} - {bought}";
        }
    }
}
