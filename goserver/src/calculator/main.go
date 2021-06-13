package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

type calc struct {

}

func (calc) operate(entry string, operator string) int {
	cleanEntry := strings.Split(entry, operator)
	operator1 := parse(cleanEntry[0])
	operator2 := parse(cleanEntry[1])
	switch operator {
	case "+":
		return operator1 + operator2
	case "-":
		return operator1 - operator2
	case "/":
		return operator1 / operator2
	case "*":
		return operator1 * operator2
	default:
		fmt.Println("Unknown Operation..")
		return 0
	}
}

func readEntry() string {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	return scanner.Text()
}

func parse(entry string) int {
	operator1, _ := strconv.Atoi(entry)
	return operator1
}



func main (){
	entry := readEntry()
	operator := readEntry()
	c := calc{}
	fmt.Println(c.operate(entry, operator))
}
