using System;

namespace _04.PizzaCalories
{
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string[] tokens = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                Pizza pizza = new Pizza(tokens[1]);
                tokens = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                Dough dough = new Dough(tokens[1], tokens[2], double.Parse(tokens[3]));
                pizza.Dough = dough;

                string input = Console.ReadLine();
                while (input != "END")
                {
                    tokens = input.Split(" ", StringSplitOptions.RemoveEmptyEntries);
                    Topping topping = new Topping(tokens[1], double.Parse(tokens[2]));
                    pizza.AddTopping(topping);

                    input = Console.ReadLine();
                }

                Console.WriteLine($"{pizza.Name} - {pizza.Calories:f2} Calories.");

            }
            catch (Exception err)
            {
                Console.WriteLine(err.Message);
            }
        }
    }
}
