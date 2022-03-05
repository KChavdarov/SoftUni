using System;
using System.Collections.Generic;

namespace _03.ShoppingSpree
{
    public class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Person> people = new Dictionary<string, Person>();
            Dictionary<string, Product> products = new Dictionary<string, Product>();

            try
            {
                for (int i = 0; i < 2; i++)
                {
                    string[] input = Console.ReadLine().Split(';', StringSplitOptions.RemoveEmptyEntries);
                    foreach (var item in input)
                    {
                        string[] tokens = item.Split('=', StringSplitOptions.RemoveEmptyEntries);

                        if (i == 0)
                        {
                            people.Add(tokens[0], new Person(tokens[0], decimal.Parse(tokens[1])));
                        }
                        else
                        {
                            products.Add(tokens[0], new Product(tokens[0], decimal.Parse(tokens[1])));
                        }
                    }
                }

                string command = Console.ReadLine();
                while (command != "END")
                {
                    string[] tokens = command.Split(' ');
                    Person person = people[tokens[0]];
                    Product product = products[tokens[1]];


                    if (person.Buy(product))
                    {
                        Console.WriteLine($"{person.Name} bought {product.Name}");
                    }
                    else
                    {
                        Console.WriteLine($"{person.Name} can't afford {product.Name}");
                    }

                    command = Console.ReadLine();
                }

                Console.WriteLine(string.Join(Environment.NewLine, people.Values));
            }
            catch (Exception err)
            {
                Console.WriteLine(err.Message);
            }
        }
    }
}
