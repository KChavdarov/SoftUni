using System;
using System.Collections.Generic;

namespace _03.Song
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            List<Song> songs = new List<Song>();

            for (int i = 0; i <= count; i++)
            {
                string[] input = Console.ReadLine().Split('_');
                if (input.Length > 1)
                {
                    string typeList = input[0];
                    string name = input[1];
                    string time = input[2];

                    Song song = new Song(typeList, name, time);
                    songs.Add(song);
                }
                else if (input.Length > 0)
                {
                    string typeList = input[0];
                    Song.Play(songs, typeList);
                }
            }
        }
    }

    class Song
    {
        public Song(string typeList, string name, string time)
        {
            TypeList = typeList;
            Name = name;
            Time = time;
        }

        public string TypeList { get; set; }
        public string Name { get; set; }
        public string Time { get; set; }

        public static void Play(List<Song> songs, string typeList)
        {
            foreach (var song in songs)
            {
                if (typeList == "all" || song.TypeList == typeList)
                {
                    Console.WriteLine(song.Name);
                }
            }
        }
    }
}
