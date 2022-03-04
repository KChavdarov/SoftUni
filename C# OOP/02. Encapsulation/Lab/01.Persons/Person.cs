﻿using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Persons
{
    internal class Person
    {
        private int age;
        private string firstName;
        private decimal salary;
        private string lastName;

        public Person(string firstName, string lastName, int age, decimal salary)
        {
            FirstName = firstName;
            LastName = lastName;
            Age = age;
            Salary = salary;
        }

        public string FirstName
        {
            get => firstName;
            private set
            {
                if (value.Length < 3)
                {
                    throw new ArgumentException("First name cannot contain fewer than 3 symbols!");
                }
                firstName = value;
            }
        }
        public string LastName
        {
            get => lastName;
            private set
            {
                if (value.Length < 3)
                {
                    throw new ArgumentException("Last name cannot contain fewer than 3 symbols!");
                }
                lastName = value;
            }

        }
        public int Age
        {
            get => age;
            private set
            {
                if (value < 0 || value > 150)
                {
                    throw new ArgumentException("Age cannot be zero or a negative integer!");
                }

                age = value;
            }
        }
        public decimal Salary
        {
            get => salary;
            set
            {
                if (value < 650)
                {
                    throw new ArgumentException("Salary cannot be less than 650 leva!");
                }
                salary = value;
            }
        }

        public void IncreaseSalary(decimal percentage)
        {
            if (Age < 30)
            {
                percentage /= 2m;
            }

            Salary += Salary * percentage / 100;
        }

        public override string ToString()
        {
            return $"{FirstName} {LastName} receives {Salary:f2} leva.";
        }
    }
}
