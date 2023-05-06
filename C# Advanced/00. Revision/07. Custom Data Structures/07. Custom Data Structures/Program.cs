using _07._Custom_Data_Structures;

var LinkedList = new DoublyLinkedList<int>();

LinkedList.AddFirst(2);
LinkedList.AddFirst(1);
LinkedList.AddFirst(0);
LinkedList.AddLast(3);
LinkedList.AddLast(4);
LinkedList.RemoveFirst();
LinkedList.RemoveLast();
LinkedList.ForEach(Console.WriteLine);
Console.WriteLine(string.Join(" ", LinkedList.ToArray()));