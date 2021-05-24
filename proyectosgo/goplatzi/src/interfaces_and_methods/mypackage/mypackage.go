package mypackage

import "fmt"

// PublicCar this is a car struct with public access
type PublicCar struct {
	Brand string
	Year int
}

type privateCar struct {
	brand string
	year int
}

// PrintMessage to print a message
func PrintMessage(text string) {
	fmt.Println(text)
}

// Private function
func printMessage(text string) {
	fmt.Println(text)
}