using System;

namespace Custom_List
{
    internal class Program
    {
        static void Main(string[] args)
        {
            CustomList<string> myList = new CustomList<string>();

            myList.Add("K");
            myList.Add("i");
            myList.Add("i");
            myList.Add("l");
            myList.Insert(2, "r");
            myList.Insert(2, "r");
            myList.Add("l");
            Console.WriteLine(myList);
            myList.RemoveAt(3);
            Console.WriteLine(myList);
            myList.RemoveAt(myList.Count-1);
            Console.WriteLine(myList);
        }
    }
}
