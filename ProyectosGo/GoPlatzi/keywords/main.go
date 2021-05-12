package main

import "fmt"

func main() {
	// Defer is the last piece of code that runs in local scope
	defer fmt.Println("Last code")
	fmt.Println("World")

	// Continue and Break, are used in loops.

	for i := 0; i < 10; i++ {
		fmt.Println(i)

		// Continue is used fo continue the flow, if u have an error and u want to continue de flow just put continue
		if i == 2 {
			fmt.Println("Is two")
			continue
		}
		// Break, is used to stops the flow excution
		if i == 8 {
			fmt.Println("Break")
			break
		}
	}
}
