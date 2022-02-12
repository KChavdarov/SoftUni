using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Doubly_Linked_List
{
    internal class LinkedListEnumerator<T> : IEnumerator<LinkedListItem<T>>
    {
        private LinkedListItem<T> first = null;
        private LinkedListItem<T> current = null;

        public LinkedListEnumerator(LinkedListItem<T> first)
        {
            this.first = first;
        }

        public LinkedListItem<T> Current { get => current; private set => current = value; }

        object IEnumerator.Current => Current;

        public void Dispose() { }

        public bool MoveNext()
        {
            if (current == null)
            {
                current = first;
                if (current == null)
                {
                    return false;
                }
                return true;
            }
            if (current.Next != null)
            {
                current = current.Next;
                return true;
            }
            return false;
        }

        public void Reset()
        {
            current = first;
        }
    }
}
