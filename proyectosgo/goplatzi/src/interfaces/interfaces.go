package main

import "fmt"

type twoDFigures interface {
	area() float64
}

type square struct {
	base float64
}

type rectangle struct {
	base float64
	height float64
}

func (sq square) area() float64{
	return sq.base * sq.base
}

func (rec rectangle) area() float64 {
	return rec.base * rec.height
}

func calculate(figure twoDFigures){
	fmt.Println("Area:", figure.area())
}

func main(){
	mySquare := square{base: 2}
	myRectangle := rectangle{base: 2, height: 4}

	calculate(mySquare)
	calculate(myRectangle)

	// Interface List
	myInterface := []interface{}{"Hello", 12, 4.90}
	fmt.Println(myInterface...)
}
