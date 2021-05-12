package main

import "fmt"

func normalFunction(message string){
	fmt.Printf(message)
}

func tripleArgument(message string, numberOne, numberTwo int){
	fmt.Println(message, numberOne, numberTwo)
}

func returnValue(numberOne int) int {
	return numberOne * 2
}

func returnDoubleValue(numberOne int) (c,d int){
	return numberOne, numberOne*2
}


func main(){
	normalFunction("Hello, world!\n")
	tripleArgument("Hello", 1, 2)
	value := returnValue(2)
	fmt.Println("Value: ", value)
	value1, value2 := returnDoubleValue(2)
	fmt.Printf("Normal Value: %d\nPow Value: %d", value1, value2)
}