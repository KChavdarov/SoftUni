using System;
using System.Collections.Generic;

namespace _10.SoftUniCoursePlanning
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<string> schedule = new List<string>(Console.ReadLine().Split(", "));
            string input = Console.ReadLine();

            while (input != "course start")
            {
                string[] tokens = input.Split(':');
                string command = tokens[0];

                switch (command)
                {
                    case "Add":
                        {
                            string lesson = tokens[1];
                            schedule = AddLesson(schedule, lesson);
                        }
                        break;
                    case "Insert":
                        {
                            string lesson = tokens[1];
                            int index = int.Parse(tokens[2]);
                            schedule = InsertLesson(schedule, index, lesson);
                        }
                        break;
                    case "Remove":
                        {
                            string lesson = tokens[1];
                            schedule = RemoveLessonAndExercise(schedule, lesson);
                        }
                        break;

                    case "Exercise":
                        {
                            string lesson = tokens[1];
                            schedule = AddExercise(schedule, lesson);
                        }
                        break;

                    case "Swap":
                        {
                            string lessonA = tokens[1];
                            string lessonB = tokens[2];
                            schedule = SwapLessonsAndExercises(schedule, lessonA, lessonB);
                        }
                        break;
                }

                input = Console.ReadLine();
            }

            printSchedule(schedule);
        }

        private static List<string> SwapLessonsAndExercises(List<string> schedule, string lessonA, string lessonB)
        {
            if (schedule.Contains(lessonA) && schedule.Contains(lessonB))
            {
                string exerciseA = $"{lessonA}-Exercise";
                string exerciseB = $"{lessonB}-Exercise";
                int lessonAIndex = schedule.IndexOf(lessonA);
                int lessonBIndex = schedule.IndexOf(lessonB);

                schedule.RemoveAt(lessonAIndex);
                schedule.Insert(lessonAIndex, lessonB);

                schedule.RemoveAt(lessonBIndex);
                schedule.Insert(lessonBIndex, lessonA);

                lessonAIndex = schedule.IndexOf(lessonA);
                if (schedule.Contains(exerciseA))
                {
                    schedule.Remove(exerciseA);
                    if (lessonAIndex == schedule.Count - 1)
                    {
                        schedule.Add(exerciseA);
                    }
                    else
                    {
                        schedule.Insert(lessonAIndex + 1, exerciseA);
                    }
                }

                lessonBIndex = schedule.IndexOf(lessonB);
                if (schedule.Contains(exerciseB))
                {
                    schedule.Remove(exerciseB);
                    if (lessonBIndex == schedule.Count - 1)
                    {
                        schedule.Add(exerciseB);
                    }
                    else
                    {
                        schedule.Insert(lessonBIndex + 1, exerciseB);
                    }
                }
            }
            return schedule;
        }

        private static List<string> AddExercise(List<string> schedule, string lesson)
        {
            string exercise = $"{lesson}-Exercise";
            int lessonIndex = schedule.IndexOf(lesson);

            if (!schedule.Contains(exercise))
            {
                if (lessonIndex == schedule.Count - 1)
                {
                    schedule.Add(exercise);
                }
                else if (lessonIndex == -1)
                {
                    schedule.Add(lesson);
                    schedule.Add(exercise);
                }
                else
                {
                    schedule.Insert(lessonIndex + 1, exercise);
                }
            }
            return schedule;
        }

        private static List<string> RemoveLessonAndExercise(List<string> schedule, string lesson)
        {
            if (schedule.Contains(lesson))
            {
                schedule.Remove(lesson);
                schedule.Remove($"{lesson}-Exercise");
            }
            return schedule;
        }

        private static List<string> InsertLesson(List<string> schedule, int index, string lesson)
        {
            if (!schedule.Contains(lesson))
            {
                schedule.Insert(index, lesson);
            }
            return schedule;
        }

        private static List<string> AddLesson(List<string> schedule, string lesson)
        {
            if (!schedule.Contains(lesson))
            {
                schedule.Add(lesson);
            }
            return schedule;
        }

        static void printSchedule(List<string> schedule)
        {
            for (int i = 0; i < schedule.Count; i++)
            {
                Console.WriteLine($"{i + 1}.{schedule[i]}");
            }
        }
    }
}
