using System;
using System.Collections.Generic;

namespace _10.ThePartyReservationFilterModule
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<string> guests = new List<string>(Console.ReadLine().Split(' '));
            List<Filter> predicates = new List<Filter>();
            string input = Console.ReadLine();

            while (input != "Print")
            {
                string[] tokens = input.Split(';');
                string command = tokens[0];
                string kind = tokens[1];
                string criteria = tokens[2];
                Filter filter = new Filter(kind, criteria);

                switch (command)
                {
                    case "Add filter":
                        if (!predicates.Exists(a => a.Kind == kind && a.Criteria == criteria))
                        {
                            predicates.Add(filter);
                        }
                        break;
                    case "Remove filter":
                        predicates.RemoveAll(a => a.Kind == kind && a.Criteria == criteria);
                        break;
                }

                input = Console.ReadLine();
            }

            predicates.ForEach(f =>
            {
                guests.RemoveAll(f.Function);
            });

            Console.WriteLine(String.Join(' ', guests));
        }

        static Predicate<string> CreatePrеdicate(string type, string criteria)
        {
            switch (type)
            {
                case "Starts with":
                    return x => x.StartsWith(criteria);
                case "Ends with":
                    return x => x.EndsWith(criteria);
                case "Length":
                    return x => x.Length == int.Parse(criteria);
                case "Contains":
                    return x => x.Contains(criteria);
                default:
                    return x => true;
            }
        }
        class Filter
        {
            public Filter(string kind, string criteria)
            {
                Kind = kind;
                Criteria = criteria;
                Function = CreatePrеdicate(kind, criteria);
            }
            public string Kind { get; set; }
            public string Criteria { get; set; }
            public Predicate<string> Function { get; set; }
        }
    }
}
