﻿using _07._Custom_Data_Structures;

var LinkedList = new DoublyLinkedList<int>();
LinkedList.AddFirst(2);
LinkedList.AddFirst(1);
LinkedList.AddFirst(0);
LinkedList.AddLast(3);
LinkedList.AddLast(4);
LinkedList.RemoveFirst();
LinkedList.RemoveLast();
//LinkedList.ForEach(Console.WriteLine);
//Console.WriteLine(string.Join(" ", LinkedList.ToArray()));
foreach (var item in LinkedList)
{
    Console.WriteLine(item);
}

//var list = new _07._Custom_Data_Structures.List<int>();
//list.Add(0);
//list.Add(1);
//list.Add(2);
//list.Add(3);
//list.Add(4);
//list.Add(5);
//list.RemoveAt(0);
//list.Swap(0, 3);
//list.Insert(4, 6);
//Console.WriteLine(list.Contains(2));

//var stack = new _07._Custom_Data_Structures.Stack<int>();
//stack.Push(0);
//stack.Push(1);
//stack.Push(2);
//stack.Push(3);
//stack.Push(4);
//stack.Push(5);
//Console.WriteLine(stack.Peek());
//Console.WriteLine(stack.Pop());
//Console.WriteLine(stack.Peek());
//Console.WriteLine(stack.Pop());
//Console.WriteLine(stack.Pop());
//Console.WriteLine(stack.Pop());
//Console.WriteLine(stack.Pop());
//Console.WriteLine(stack.Pop());
//Console.WriteLine(stack.Pop());

//var queue = new _07._Custom_Data_Structures.Queue<int>();
//queue.Enqueue(0);
//queue.Enqueue(1);
//queue.Enqueue(2);
//queue.Enqueue(3);
//queue.Enqueue(4);
//Console.WriteLine(queue.Peek());
//Console.WriteLine(queue.Deque());
//Console.WriteLine(queue.Peek());
//Console.WriteLine(queue.Deque());
//Console.WriteLine(queue.Deque());
//Console.WriteLine(queue.Deque());
//Console.WriteLine(queue.Deque());
//Console.WriteLine(queue.Deque());
//Console.WriteLine(queue.Deque());