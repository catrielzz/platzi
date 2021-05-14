package main

import (
	"../mypackage"
	"fmt"
)

func main() {
	var myCar mypackage.PublicCar
	myCar.Brand = "Toyota"
	myCar.Year = 1960
	fmt.Println(myCar)

	// If you call a private struct from package it breaks
	//var anotherCar mypackage.privateCar
	//fmt.Println(anotherCar)

	mypackage.PrintMessage("Hello My Dear")
}

