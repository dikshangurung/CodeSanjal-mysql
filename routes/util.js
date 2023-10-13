const express = require("express");
const router = express.Router();
let people = [
	{
		person: {
			name: "Dikshan Gurung",
			contents: [
				{
					title: "WAP to print sum of two numbers",
					code: `#include <stdio.h>
                    int main(){
                     int a,b;
                     printf("Enter first number:");
                     scanf(%d, &a);
                     printf("Enter second number:");
                     scanf(%d, &b);
                     int sum = a+b;
                     printf("The sum of %d and %d is: %d",a,b,sum);
                     return 0;
         
                    }`,
					description: `The program you provided is a simple C program that calculates the sum of two numbers entered by the user and displays the result.
                    Here's a step-by-step description of the program:
                    The program starts with the '#include <stdio.h>' directive, which includes the standard input/output library in the program. This library provides functions like 'printf()' and 'scanf()' that are used for input and output operations.
                    The 'main()' function is the entry point of the program where the execution begins.
                    Two integer variables, 'a' and 'b', are declared to store the user input for the two numbers.
                    The 'printf()' function is used to display the message "Enter the first number: " to prompt the user to enter the first number.
                    The 'scanf()' function is then used to read an integer value from the user and store it in the variable a using the '%d' format specifier.
                    Similarly, the program displays the message "Enter the second number: " and reads the second number from the user, storing it in the variable 'b'.
                    The sum of the two numbers, 'a' and 'b', is calculated and stored in the sum variable.
                    Finally, the 'printf()' function is used to display the result by printing the message "The sum of a and b is: sum" where the values of 'a', 'b', and 'sum' are substituted using the '%d' format specifier.
                    The program ends with the 'return 0'; statement, indicating successful execution and termination of the program.
                    When the program is run, it prompts the user to enter two numbers, calculates their sum, and displays the result on the console.`,
					output: `
                    Enter the first number: 2
                    Enter the second number: 3
                    The sum of 2 and 3 is: 5
                    this is the time
                  `,
					upvote: 10,
					comments: 5,
					language_used: "C",
					date: "2023/01/01",
				},
				{
					title: "WAP to print sum of two numbers",
					code: `#include <stdio.h>
                    int main(){
                     int a,b;
                     printf("Enter first number:");
                     scanf(%d, &a);
                     printf("Enter second number:");
                     scanf(%d, &b);
                     int sum = a+b;
                     printf("The sum of %d and %d is: %d",a,b,sum);
                     return 0;
         
                    }`,
					description: `The program you provided is a simple C program that calculates the sum of two numbers entered by the user and displays the result.
                    Here's a step-by-step description of the program:
                    The program starts with the '#include <stdio.h>' directive, which includes the standard input/output library in the program. This library provides functions like 'printf()' and 'scanf()' that are used for input and output operations.
                    The 'main()' function is the entry point of the program where the execution begins.
                    Two integer variables, 'a' and 'b', are declared to store the user input for the two numbers.
                    The 'printf()' function is used to display the message "Enter the first number: " to prompt the user to enter the first number.
                    The 'scanf()' function is then used to read an integer value from the user and store it in the variable a using the '%d' format specifier.
                    Similarly, the program displays the message "Enter the second number: " and reads the second number from the user, storing it in the variable 'b'.
                    The sum of the two numbers, 'a' and 'b', is calculated and stored in the sum variable.
                    Finally, the 'printf()' function is used to display the result by printing the message "The sum of a and b is: sum" where the values of 'a', 'b', and 'sum' are substituted using the '%d' format specifier.
                    The program ends with the 'return 0'; statement, indicating successful execution and termination of the program.
                    When the program is run, it prompts the user to enter two numbers, calculates their sum, and displays the result on the console.`,
					output: `
                    Enter the first number: 2
                    Enter the second number: 3
                    The sum of 2 and 3 is: 5
                    this is the time
                  `,
					upvote: 10,
					comments: 5,
					language_used: "C",
					date: "2023/01/01",
				},
				{
					title: "WAP to print difference of two numbers",
					code: `#include <stdio.h>
                    int main(){
                     int a,b;
                     printf("Enter first number:");
                     scanf(%d, &a);
                     printf("Enter second number:");
                     scanf(%d, &b);
                     int sum = a+b;
                     printf("The sum of %d and %d is: %d",a,b,sum);
                     return 0;
         
                    }`,
					description: `The program you provided is a simple C program that calculates the sum of two numbers entered by the user and displays the result.
                    Here's a step-by-step description of the program:
                    The program starts with the '#include <stdio.h>' directive, which includes the standard input/output library in the program. This library provides functions like 'printf()' and 'scanf()' that are used for input and output operations.
                    The 'main()' function is the entry point of the program where the execution begins.
                    Two integer variables, 'a' and 'b', are declared to store the user input for the two numbers.
                    The 'printf()' function is used to display the message "Enter the first number: " to prompt the user to enter the first number.
                    The 'scanf()' function is then used to read an integer value from the user and store it in the variable a using the '%d' format specifier.
                    Similarly, the program displays the message "Enter the second number: " and reads the second number from the user, storing it in the variable 'b'.
                    The sum of the two numbers, 'a' and 'b', is calculated and stored in the sum variable.
                    Finally, the 'printf()' function is used to display the result by printing the message "The sum of a and b is: sum" where the values of 'a', 'b', and 'sum' are substituted using the '%d' format specifier.
                    The program ends with the 'return 0'; statement, indicating successful execution and termination of the program.
                    When the program is run, it prompts the user to enter two numbers, calculates their sum, and displays the result on the console.`,
					output: `
                    Enter the first number: 2
                    Enter the second number: 3
                    The sum of 2 and 3 is: 5
                    this is the time
                  `,
					upvote: 10,
					comments: 5,
					language_used: "C",
					date: "2023/01/01",
				},
				{
					title: "WAP to print product of two numbers",
					code: `#include <stdio.h>
                    int main(){
                     int a,b;
                     printf("Enter first number:");
                     scanf(%d, &a);
                     printf("Enter second number:");
                     scanf(%d, &b);
                     int sum = a+b;
                     printf("The sum of %d and %d is: %d",a,b,sum);
                     return 0;
         
                    }`,
					description: `The program you provided is a simple C program that calculates the sum of two numbers entered by the user and displays the result.
                    Here's a step-by-step description of the program:
                    The program starts with the '#include <stdio.h>' directive, which includes the standard input/output library in the program. This library provides functions like 'printf()' and 'scanf()' that are used for input and output operations.
                    The 'main()' function is the entry point of the program where the execution begins.
                    Two integer variables, 'a' and 'b', are declared to store the user input for the two numbers.
                    The 'printf()' function is used to display the message "Enter the first number: " to prompt the user to enter the first number.
                    The 'scanf()' function is then used to read an integer value from the user and store it in the variable a using the '%d' format specifier.
                    Similarly, the program displays the message "Enter the second number: " and reads the second number from the user, storing it in the variable 'b'.
                    The sum of the two numbers, 'a' and 'b', is calculated and stored in the sum variable.
                    Finally, the 'printf()' function is used to display the result by printing the message "The sum of a and b is: sum" where the values of 'a', 'b', and 'sum' are substituted using the '%d' format specifier.
                    The program ends with the 'return 0'; statement, indicating successful execution and termination of the program.
                    When the program is run, it prompts the user to enter two numbers, calculates their sum, and displays the result on the console.`,
					output: `
                    Enter the first number: 2
                    Enter the second number: 3
                    The sum of 2 and 3 is: 5
                    this is the time
                  `,
					upvote: 10,
					comments: 5,
					language_used: "C",
					date: "2023/01/01",
				},
			],
		},
	},
	{
		person: {
			name: "Kushal Pariyar",
			contents: [
				{
					title: "WAP to print sum of two numbers",
					code: `#include <stdio.h>
                    int main(){
                     int a,b;
                     printf("Enter first number:");
                     scanf(%d, &a);
                     printf("Enter second number:");
                     scanf(%d, &b);
                     int sum = a+b;
                     printf("The sum of %d and %d is: %d",a,b,sum);
                     return 0;
         
                    }`,
					description: `The program you provided is a simple C program that calculates the sum of two numbers entered by the user and displays the result.
                    Here's a step-by-step description of the program:
                    The program starts with the '#include <stdio.h>' directive, which includes the standard input/output library in the program. This library provides functions like 'printf()' and 'scanf()' that are used for input and output operations.
                    The 'main()' function is the entry point of the program where the execution begins.
                    Two integer variables, 'a' and 'b', are declared to store the user input for the two numbers.
                    The 'printf()' function is used to display the message "Enter the first number: " to prompt the user to enter the first number.
                    The 'scanf()' function is then used to read an integer value from the user and store it in the variable a using the '%d' format specifier.
                    Similarly, the program displays the message "Enter the second number: " and reads the second number from the user, storing it in the variable 'b'.
                    The sum of the two numbers, 'a' and 'b', is calculated and stored in the sum variable.
                    Finally, the 'printf()' function is used to display the result by printing the message "The sum of a and b is: sum" where the values of 'a', 'b', and 'sum' are substituted using the '%d' format specifier.
                    The program ends with the 'return 0'; statement, indicating successful execution and termination of the program.
                    When the program is run, it prompts the user to enter two numbers, calculates their sum, and displays the result on the console.`,
					output: `
                    Enter the first number: 2
                    Enter the second number: 3
                    The sum of 2 and 3 is: 5
                    this is the time
                  `,
					upvote: 10,
					comments: 5,
					language_used: "C",
					date: "2023/01/01",
				},
				{
					title: "WAP to print sum of two numbers",
					code: `#include <stdio.h>
                    int main(){
                     int a,b;
                     printf("Enter first number:");
                     scanf(%d, &a);
                     printf("Enter second number:");
                     scanf(%d, &b);
                     int sum = a+b;
                     printf("The sum of %d and %d is: %d",a,b,sum);
                     return 0;
         
                    }`,
					description: `The program you provided is a simple C program that calculates the sum of two numbers entered by the user and displays the result.
                    Here's a step-by-step description of the program:
                    The program starts with the '#include <stdio.h>' directive, which includes the standard input/output library in the program. This library provides functions like 'printf()' and 'scanf()' that are used for input and output operations.
                    The 'main()' function is the entry point of the program where the execution begins.
                    Two integer variables, 'a' and 'b', are declared to store the user input for the two numbers.
                    The 'printf()' function is used to display the message "Enter the first number: " to prompt the user to enter the first number.
                    The 'scanf()' function is then used to read an integer value from the user and store it in the variable a using the '%d' format specifier.
                    Similarly, the program displays the message "Enter the second number: " and reads the second number from the user, storing it in the variable 'b'.
                    The sum of the two numbers, 'a' and 'b', is calculated and stored in the sum variable.
                    Finally, the 'printf()' function is used to display the result by printing the message "The sum of a and b is: sum" where the values of 'a', 'b', and 'sum' are substituted using the '%d' format specifier.
                    The program ends with the 'return 0'; statement, indicating successful execution and termination of the program.
                    When the program is run, it prompts the user to enter two numbers, calculates their sum, and displays the result on the console.`,
					output: `
                    Enter the first number: 2
                    Enter the second number: 3
                    The sum of 2 and 3 is: 5
                    this is the time
                  `,
					upvote: 10,
					comments: 5,
					language_used: "C",
					date: "2023/01/01",
				},
				{
					title: "WAP to print difference of two numbers",
					code: `#include <stdio.h>
                    int main(){
                     int a,b;
                     printf("Enter first number:");
                     scanf(%d, &a);
                     printf("Enter second number:");
                     scanf(%d, &b);
                     int sum = a+b;
                     printf("The sum of %d and %d is: %d",a,b,sum);
                     return 0;
         
                    }`,
					description: `The program you provided is a simple C program that calculates the sum of two numbers entered by the user and displays the result.
                    Here's a step-by-step description of the program:
                    The program starts with the '#include <stdio.h>' directive, which includes the standard input/output library in the program. This library provides functions like 'printf()' and 'scanf()' that are used for input and output operations.
                    The 'main()' function is the entry point of the program where the execution begins.
                    Two integer variables, 'a' and 'b', are declared to store the user input for the two numbers.
                    The 'printf()' function is used to display the message "Enter the first number: " to prompt the user to enter the first number.
                    The 'scanf()' function is then used to read an integer value from the user and store it in the variable a using the '%d' format specifier.
                    Similarly, the program displays the message "Enter the second number: " and reads the second number from the user, storing it in the variable 'b'.
                    The sum of the two numbers, 'a' and 'b', is calculated and stored in the sum variable.
                    Finally, the 'printf()' function is used to display the result by printing the message "The sum of a and b is: sum" where the values of 'a', 'b', and 'sum' are substituted using the '%d' format specifier.
                    The program ends with the 'return 0'; statement, indicating successful execution and termination of the program.
                    When the program is run, it prompts the user to enter two numbers, calculates their sum, and displays the result on the console.`,
					output: `
                    Enter the first number: 2
                    Enter the second number: 3
                    The sum of 2 and 3 is: 5
                    this is the time
                  `,
					upvote: 10,
					comments: 5,
					language_used: "C",
					date: "2023/01/01",
				},
				{
					title: "WAP to print product of two numbers",
					code: `#include <stdio.h>
                    int main(){
                     int a,b;
                     printf("Enter first number:");
                     scanf(%d, &a);
                     printf("Enter second number:");
                     scanf(%d, &b);
                     int sum = a+b;
                     printf("The sum of %d and %d is: %d",a,b,sum);
                     return 0;
         
                    }`,
					description: `The program you provided is a simple C program that calculates the sum of two numbers entered by the user and displays the result.
                    Here's a step-by-step description of the program:
                    The program starts with the '#include <stdio.h>' directive, which includes the standard input/output library in the program. This library provides functions like 'printf()' and 'scanf()' that are used for input and output operations.
                    The 'main()' function is the entry point of the program where the execution begins.
                    Two integer variables, 'a' and 'b', are declared to store the user input for the two numbers.
                    The 'printf()' function is used to display the message "Enter the first number: " to prompt the user to enter the first number.
                    The 'scanf()' function is then used to read an integer value from the user and store it in the variable a using the '%d' format specifier.
                    Similarly, the program displays the message "Enter the second number: " and reads the second number from the user, storing it in the variable 'b'.
                    The sum of the two numbers, 'a' and 'b', is calculated and stored in the sum variable.
                    Finally, the 'printf()' function is used to display the result by printing the message "The sum of a and b is: sum" where the values of 'a', 'b', and 'sum' are substituted using the '%d' format specifier.
                    The program ends with the 'return 0'; statement, indicating successful execution and termination of the program.
                    When the program is run, it prompts the user to enter two numbers, calculates their sum, and displays the result on the console.`,
					output: `
                    Enter the first number: 2
                    Enter the second number: 3
                    The sum of 2 and 3 is: 5
                    this is the time
                  `,
					upvote: 10,
					comments: 5,
					language_used: "C",
					date: "2023/01/01",
				},
			],
		},
	},
	{
		person: {
			name: "Sakar Adhikari",
			contents: [
				{
					title: "WAP to print sum of two numbers",
					code: `#include <stdio.h>
                    int main(){
                     int a,b;
                     printf("Enter first number:");
                     scanf(%d, &a);
                     printf("Enter second number:");
                     scanf(%d, &b);
                     int sum = a+b;
                     printf("The sum of %d and %d is: %d",a,b,sum);
                     return 0;
         
                    }`,
					description: `The program you provided is a simple C program that calculates the sum of two numbers entered by the user and displays the result.
                    Here's a step-by-step description of the program:
                    The program starts with the '#include <stdio.h>' directive, which includes the standard input/output library in the program. This library provides functions like 'printf()' and 'scanf()' that are used for input and output operations.
                    The 'main()' function is the entry point of the program where the execution begins.
                    Two integer variables, 'a' and 'b', are declared to store the user input for the two numbers.
                    The 'printf()' function is used to display the message "Enter the first number: " to prompt the user to enter the first number.
                    The 'scanf()' function is then used to read an integer value from the user and store it in the variable a using the '%d' format specifier.
                    Similarly, the program displays the message "Enter the second number: " and reads the second number from the user, storing it in the variable 'b'.
                    The sum of the two numbers, 'a' and 'b', is calculated and stored in the sum variable.
                    Finally, the 'printf()' function is used to display the result by printing the message "The sum of a and b is: sum" where the values of 'a', 'b', and 'sum' are substituted using the '%d' format specifier.
                    The program ends with the 'return 0'; statement, indicating successful execution and termination of the program.
                    When the program is run, it prompts the user to enter two numbers, calculates their sum, and displays the result on the console.`,
					output: `
                    Enter the first number: 2
                    Enter the second number: 3
                    The sum of 2 and 3 is: 5
                    this is the time
                  `,
					upvote: 10,
					comments: 5,
					language_used: "C",
					date: "2023/01/01",
				},
				{
					title: "WAP to print sum of two numbers",
					code: `#include <stdio.h>
                    int main(){
                     int a,b;
                     printf("Enter first number:");
                     scanf(%d, &a);
                     printf("Enter second number:");
                     scanf(%d, &b);
                     int sum = a+b;
                     printf("The sum of %d and %d is: %d",a,b,sum);
                     return 0;
         
                    }`,
					description: `The program you provided is a simple C program that calculates the sum of two numbers entered by the user and displays the result.
                    Here's a step-by-step description of the program:
                    The program starts with the '#include <stdio.h>' directive, which includes the standard input/output library in the program. This library provides functions like 'printf()' and 'scanf()' that are used for input and output operations.
                    The 'main()' function is the entry point of the program where the execution begins.
                    Two integer variables, 'a' and 'b', are declared to store the user input for the two numbers.
                    The 'printf()' function is used to display the message "Enter the first number: " to prompt the user to enter the first number.
                    The 'scanf()' function is then used to read an integer value from the user and store it in the variable a using the '%d' format specifier.
                    Similarly, the program displays the message "Enter the second number: " and reads the second number from the user, storing it in the variable 'b'.
                    The sum of the two numbers, 'a' and 'b', is calculated and stored in the sum variable.
                    Finally, the 'printf()' function is used to display the result by printing the message "The sum of a and b is: sum" where the values of 'a', 'b', and 'sum' are substituted using the '%d' format specifier.
                    The program ends with the 'return 0'; statement, indicating successful execution and termination of the program.
                    When the program is run, it prompts the user to enter two numbers, calculates their sum, and displays the result on the console.`,
					output: `
                    Enter the first number: 2
                    Enter the second number: 3
                    The sum of 2 and 3 is: 5
                    this is the time
                  `,
					upvote: 10,
					comments: 5,
					language_used: "C",
					date: "2023/01/01",
				},
				{
					title: "WAP to print difference of two numbers",
					code: `#include <stdio.h>
                    int main(){
                     int a,b;
                     printf("Enter first number:");
                     scanf(%d, &a);
                     printf("Enter second number:");
                     scanf(%d, &b);
                     int sum = a+b;
                     printf("The sum of %d and %d is: %d",a,b,sum);
                     return 0;
         
                    }`,
					description: `The program you provided is a simple C program that calculates the sum of two numbers entered by the user and displays the result.
                    Here's a step-by-step description of the program:
                    The program starts with the '#include <stdio.h>' directive, which includes the standard input/output library in the program. This library provides functions like 'printf()' and 'scanf()' that are used for input and output operations.
                    The 'main()' function is the entry point of the program where the execution begins.
                    Two integer variables, 'a' and 'b', are declared to store the user input for the two numbers.
                    The 'printf()' function is used to display the message "Enter the first number: " to prompt the user to enter the first number.
                    The 'scanf()' function is then used to read an integer value from the user and store it in the variable a using the '%d' format specifier.
                    Similarly, the program displays the message "Enter the second number: " and reads the second number from the user, storing it in the variable 'b'.
                    The sum of the two numbers, 'a' and 'b', is calculated and stored in the sum variable.
                    Finally, the 'printf()' function is used to display the result by printing the message "The sum of a and b is: sum" where the values of 'a', 'b', and 'sum' are substituted using the '%d' format specifier.
                    The program ends with the 'return 0'; statement, indicating successful execution and termination of the program.
                    When the program is run, it prompts the user to enter two numbers, calculates their sum, and displays the result on the console.`,
					output: `
                    Enter the first number: 2
                    Enter the second number: 3
                    The sum of 2 and 3 is: 5
                    this is the time
                  `,
					upvote: 10,
					comments: 5,
					language_used: "C",
					date: "2023/01/01",
				},
				{
					title: "WAP to print product of two numbers",
					code: `#include <stdio.h>
                    int main(){
                     int a,b;
                     printf("Enter first number:");
                     scanf(%d, &a);
                     printf("Enter second number:");
                     scanf(%d, &b);
                     int sum = a+b;
                     printf("The sum of %d and %d is: %d",a,b,sum);
                     return 0;
         
                    }`,
					description: `The program you provided is a simple C program that calculates the sum of two numbers entered by the user and displays the result.
                    Here's a step-by-step description of the program:
                    The program starts with the '#include <stdio.h>' directive, which includes the standard input/output library in the program. This library provides functions like 'printf()' and 'scanf()' that are used for input and output operations.
                    The 'main()' function is the entry point of the program where the execution begins.
                    Two integer variables, 'a' and 'b', are declared to store the user input for the two numbers.
                    The 'printf()' function is used to display the message "Enter the first number: " to prompt the user to enter the first number.
                    The 'scanf()' function is then used to read an integer value from the user and store it in the variable a using the '%d' format specifier.
                    Similarly, the program displays the message "Enter the second number: " and reads the second number from the user, storing it in the variable 'b'.
                    The sum of the two numbers, 'a' and 'b', is calculated and stored in the sum variable.
                    Finally, the 'printf()' function is used to display the result by printing the message "The sum of a and b is: sum" where the values of 'a', 'b', and 'sum' are substituted using the '%d' format specifier.
                    The program ends with the 'return 0'; statement, indicating successful execution and termination of the program.
                    When the program is run, it prompts the user to enter two numbers, calculates their sum, and displays the result on the console.`,
					output: `
                    Enter the first number: 2
                    Enter the second number: 3
                    The sum of 2 and 3 is: 5
                    this is the time
                  `,
					upvote: 10,
					comments: 5,
					language_used: "C",
					date: "2023/01/01",
				},
			],
		},
	},
];
exports.people = people;
