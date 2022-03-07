using System;

namespace _03.Telephony
{
    public class Program
    {
        static void Main(string[] args)
        {
            Smartphone smartPhone = new Smartphone();
            string[] numbers = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);
            string[] urls = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);

            foreach (var number in numbers)
            {
                try
                {
                    Console.WriteLine(smartPhone.Call(number));
                }
                catch (Exception err)
                {
                    Console.WriteLine(err.Message);
                }
            }
            foreach (var url in urls)
            {
                try
                {
                    Console.WriteLine(smartPhone.Browse(url));
                }
                catch (Exception err)
                {
                    Console.WriteLine(err.Message);
                }
            }
        }
    }
}
