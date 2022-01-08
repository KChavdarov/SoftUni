using System;

namespace _02.Articles
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] tokens = Console.ReadLine().Split(", ");
            Article article = new Article(tokens[0], tokens[1], tokens[2]);
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                tokens = Console.ReadLine().Split(": ");
                string command = tokens[0];
                string value = tokens[1];

                switch (command)
                {
                    case "Edit":
                        article.Edit(value);
                        break;
                    case "ChangeAuthor":
                        article.ChangeAuthor(value);
                        break;
                    case "Rename":
                        article.Rename(value);
                        break;
                }
            }

            Console.WriteLine(article.ToString());
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

        public void Edit(string newContent)
        {
            Content = newContent;
        }

        public void ChangeAuthor(string newAuthor)
        {
            Author = newAuthor;
        }

        public void Rename(string newTitle)
        {
            Title = newTitle;
        }

        public override string ToString()
        {
            return $"{Title} - {Content}: {Author}";
        }
    }
}
