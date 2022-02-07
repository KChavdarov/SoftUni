using System;

namespace Custom_Queue
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var queue = new CustomQueue<int>();

            queue.Enqueue(1);
            queue.Enqueue(2);
            queue.Enqueue(3);
            queue.Enqueue(4);
            queue.Enqueue(5);
            queue.Enqueue(6);
            queue.Enqueue(7);
            queue.Dequeue();
            queue.Dequeue();
            queue.Dequeue();
            queue.Dequeue();
            queue.Enqueue(8);
            queue.Enqueue(9);
            queue.Dequeue();
            queue.Dequeue();
        }
    }
}
