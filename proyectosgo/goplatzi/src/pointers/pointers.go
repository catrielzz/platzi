package main

import "fmt"

type pc struct {
	ram int
	disk int
	brand string
}


// This is the way for assign a function for a struct
func (myPc pc) ping(){
	fmt.Println(myPc.brand, "pong")
}

// This is the way to take values from a struct
func (myPc *pc) duplicateRAM(){
	myPc.ram = myPc.ram * 2
}

func main() {
	a := 50
	b := &a // & -> this is for reference de memory space that takes from the variable
	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(*b) // * -> this is for reference the value that takes from the variable

	myPc := pc{ram: 16, disk: 256, brand: "Intel"}

	fmt.Println(myPc)
	myPc.ping()
	fmt.Println(myPc)
	myPc.duplicateRAM()
	fmt.Println(myPc)
	myPc.duplicateRAM()
	fmt.Println(myPc)
}
