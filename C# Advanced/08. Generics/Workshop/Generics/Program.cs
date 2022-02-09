using System;
using System.Collections.Generic;
using System.Linq;

namespace Generics
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //int count = int.Parse(Console.ReadLine());
            ////List<Box<string>> boxes = new List<Box<string>>();
            ////List<Box<int>> boxes = new List<Box<int>>();
            //List<Box<double>> boxes = new List<Box<double>>();

            //for (int i = 0; i < count; i++)
            //{
            //    //string s = Console.ReadLine();
            //    //Box<string> box = new Box<string>(s);
            //    //int n = int.Parse(Console.ReadLine());
            //    //Box<int> box = new Box<int>(n);
            //    double d = double.Parse(Console.ReadLine());
            //    var box = new Box<double>(d);
            //    //Console.WriteLine(box);

            //    boxes.Add(box);
            //}

            ////int[] tokens = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            ////Swap(boxes, tokens[0], tokens[1]);
            ////boxes.ForEach(Console.WriteLine);

            ////var compareBox = new Box<string>(Console.ReadLine());
            //var compareBox = new Box<double>(double.Parse(Console.ReadLine()));

            //Console.WriteLine(Count(boxes, compareBox));


            string[] tokens = Console.ReadLine().Split(' ');
            Console.WriteLine(new CustomTuple<string, string, string>($"{tokens[0]} {tokens[1]}", tokens[2], tokens[3]));
            tokens = Console.ReadLine().Split(' ');
            Console.WriteLine(new CustomTuple<string, int, bool>(tokens[0], int.Parse(tokens[1]), tokens[2] == "drunk"));
            tokens = Console.ReadLine().Split(' ');
            Console.WriteLine(new CustomTuple<string, double, string>(tokens[0], double.Parse(tokens[1]), tokens[2]));


        }

        public static void Swap<T>(List<T> list, int first, int second)
        {
            (list[first], list[second]) = (list[second], list[first]);
        }

        public static int Count<T>(List<T> list, T value)
            where T : IComparable<T>
        {
            return list.Count(a => a.CompareTo(value) > 0);
        }
    }
}
