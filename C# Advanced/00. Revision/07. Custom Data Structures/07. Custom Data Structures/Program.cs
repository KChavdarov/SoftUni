using _07._Custom_Data_Structures;

//var LinkedList = new DoublyLinkedList<int>();
//LinkedList.AddFirst(2);
//LinkedList.AddFirst(1);
//LinkedList.AddFirst(0);
//LinkedList.AddLast(3);
//LinkedList.AddLast(4);
//LinkedList.RemoveFirst();
//LinkedList.RemoveLast();
//LinkedList.ForEach(Console.WriteLine);
//Console.WriteLine(string.Join(" ", LinkedList.ToArray()));

var list = new _07._Custom_Data_Structures.List<int>();
list.Add(0);
list.Add(1);
list.Add(2);
list.Add(3);
list.Add(4);
list.Add(5);
list.RemoveAt(0);
list.Swap(0, 3);
list.Insert(4, 6);
Console.WriteLine(list.Contains(2));
