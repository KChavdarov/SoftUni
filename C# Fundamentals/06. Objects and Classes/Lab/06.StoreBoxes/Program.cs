using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;

namespace _06.StoreBoxes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            List<Box> store = new List<Box>();

            while (input != "end")
            {
                string[] tokens = input.Split(' ');

                if (tokens.Length >= 4)
                {
                    string serialNumber = tokens[0];
                    string itemName = tokens[1];
                    int itemQuantity = int.Parse(tokens[2]);
                    decimal itemPrice = decimal.Parse(tokens[3]);

                    var item = new Item(itemName, itemPrice);
                    Box box = new Box(item, itemQuantity, serialNumber);
                    store.Add(box);
                }

                input = Console.ReadLine();
            }

            //var bc = new BoxComparer();
            //store.Sort(bc);
            //store.Reverse();

            store.Sort((x, y) => y.BoxPrice.CompareTo(x.BoxPrice));

            store.ForEach(box => box.Summarize());
        }

        public class BoxComparer : IComparer<Box>
        {
            public int Compare([AllowNull] Box boxA, [AllowNull] Box boxB)
            {
                if (boxA == null)
                {
                    if (boxB == null)
                    {
                        return 0;
                    }
                    else
                    {
                        return -1;
                    }
                }
                else
                {
                    if (boxB == null)
                    {
                        return 1;
                    }
                    else
                    {
                        int retval = boxA.BoxPrice.CompareTo(boxB.BoxPrice);

                        if (retval != 0)
                        {

                            return retval;
                        }
                        else
                        {

                            return boxA.SerialNumber.CompareTo(boxB.SerialNumber);
                        }
                    }
                }
            }
        }

        public class Item
        {
            public Item(string name, decimal price)
            {
                Name = name;
                Price = price;
            }
            public string Name { get; set; }
            public decimal Price { get; set; }
        }

        public class Box
        {
            public Box(Item item, int itemQuantity, string serialNumber)
            {
                Item = item;
                ItemQuantity = itemQuantity;
                SerialNumber = serialNumber;
            }
            public Item Item { get; set; }
            public int ItemQuantity { get; set; }
            public string SerialNumber { get; set; }
            public decimal BoxPrice
            {
                get { return Item.Price * ItemQuantity; }
            }

            public void Summarize()
            {
                Console.WriteLine(SerialNumber);
                Console.WriteLine($"-- {Item.Name} - ${Item.Price:f2}: {ItemQuantity}");
                Console.WriteLine($"-- ${BoxPrice:f2}");
            }
        }
    }
}
