package main

import (
	"fmt"
	"strings"
)

func isPalindrome(word string) bool {
	for i:=0; i < len(word)/2; i++{
		if word[i] != word[len(word)-1 -i] {
			return false
		}
	}
	return true
}

func main()  {
	// Array
	var array [4]int
	array[0] = 1
	array[1] = 2
	fmt.Println(array, len(array), cap(array))
	// Slice
	slice := []int{0,1,2,3,4,5,6}
	fmt.Println(slice, len(slice), cap(slice))
	// Methods in slice
	fmt.Println(slice[0])
	fmt.Println(slice[:3]) // el segundo elemento es exclusivo siempre.
	fmt.Println(slice[2:4]) // el primer elemento siempre es inclusivo.
	fmt.Println(slice[4:])
	// Append, this method is only used for slices
	slice = append(slice, 7)
	fmt.Println(slice)
	// appende new list
	newSlice := []int{8,9,10}
	slice = append(slice, newSlice...)
	fmt.Println(slice)

	// How to iterate slice
	itSlice := []string{"Hello", "World", "Nya"}

	// if index not needed
	for _, value := range itSlice {
		fmt.Println(value)
	}

	// if only need index
	for i := range itSlice{
		fmt.Println(i)
	}
	// Palindrome function
	word := "araAra"
	fmt.Println(isPalindrome(strings.ToLower(word)))


}
