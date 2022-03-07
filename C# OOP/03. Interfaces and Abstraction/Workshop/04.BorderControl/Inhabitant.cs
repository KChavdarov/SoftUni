using System;
using System.Collections.Generic;
using System.Text;

namespace BorderControlBirthdays
{
    internal abstract class Inhabitant : IIdable
    {
        private string id;
        protected Inhabitant(string id)
        {
            Id = id;
        }
        public string Id { get => id; protected set => id = value; }

        public bool ValidateId(string fragment)
        {
            return Id.EndsWith(fragment);
        }
    }
}
