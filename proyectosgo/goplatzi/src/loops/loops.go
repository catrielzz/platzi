package main

import "fmt"

func conditionalFor(){
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}
}

func whileFor(){
	counter := 0
	for counter < 10{
		fmt.Println(counter)
		counter++
	}
}

func foreverFor(){
	counter := 10
	for {
		fmt.Println(counter)
		if counter == 0 {
			break
		}
		counter--
	}
}

func main() {
	// Conditional For
	fmt.Println("---Conditional For---")
	//conditionalFor()

	// While For
	fmt.Println("---While For---")
	//whileFor()

	// Forever For
	fmt.Println("---Forever For---")
	foreverFor()
}
