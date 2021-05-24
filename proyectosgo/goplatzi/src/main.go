package main

import "fmt"

func DoubleReturn(a int) (c, d int) { return a, a * 2 }
func main() {
	a := 10
	b := &a
	c := *b

	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
}
