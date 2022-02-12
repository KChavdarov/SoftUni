using System;

namespace Doubly_Linked_List
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var list = new DoublyLinkedList<string>();
            list.AddFirst("r");
            list.AddFirst("i");
            list.AddFirst("K");
            list.AddLast("i");
            list.AddLast("l");
            Console.WriteLine(string.Join("-", list.ToArray()));

            //list.ForEach(Console.WriteLine);

            foreach (var item in list)
            {
                Console.WriteLine(item.Value);
            }
        }
    }
}
