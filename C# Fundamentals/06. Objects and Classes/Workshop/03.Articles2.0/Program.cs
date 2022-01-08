using System;
using System.Collections.Generic;

namespace _03.Articles2._0
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<Article> collection = new List<Article>();

            for (int i = 0; i < n; i++)
            {
                string[] tokens = Console.ReadLine().Split(", ");
                Article article = new Article(tokens[0], tokens[1], tokens[2]);
                collection.Add(article);
            }
            string sorting = Console.ReadLine();

            switch (sorting)
            {
                case "title":
                    collection.Sort((x, y) => x.Title.CompareTo(y.Title));
                    break;
                case "content":
                    collection.Sort((x, y) => x.Content.CompareTo(y.Content));
                    break;
                case "author":
                    collection.Sort((x, y) => x.Author.CompareTo(y.Author));
                    break;
            }

            foreach (var article in collection)
            {
                Console.WriteLine(article);
            }
        }
    }

    public class Article
    {
        public Article(string title, string content, string author)
        {
            Author = author;
            Title = title;
            Content = content;
        }

        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }

        public override string ToString()
        {
            return $"{Title} - {Content}: {Author}";
        }
    }
}
