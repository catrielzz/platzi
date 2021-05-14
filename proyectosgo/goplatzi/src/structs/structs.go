package main

import "fmt"

type car struct {
	brand string
	model int
}

func main(){
	myCar := car{brand: "Chevrolet", model: 1969}
	fmt.Println(myCar)

	// another way to instance structs
	var anotherCar car
	anotherCar.brand = "BMW"
	fmt.Println(anotherCar)
}
