package main

import "fmt"

func main(){
	m := make(map[string]int)
	m["Jose"] = 17
	m["Yoel"] = 24
	fmt.Println(m)

	// Iterate map
	for i, value := range m{
		fmt.Println(i, value)
	}

	// Find value
	val:= m["Yoel"]
	fmt.Println(val)

	// Find non existent value
	incVal, exist := m["Andres"]
	fmt.Println(incVal, exist)
	corVal, exist := m["Yoel"]
	fmt.Println(corVal, exist)
}