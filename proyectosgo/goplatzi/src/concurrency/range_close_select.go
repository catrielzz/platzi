package main

import "fmt"

func message(text string, c chan <- string)  {
	c <- text
}

func main() {
	c := make(chan string, 2)
	c <- "First Message"
	c <- "Second Message"
	// If we try to overflow a channel this will be raise an exception: "fatal error: all goroutines are asleep - deadlock!"
	// c <- "Third Message"

	fmt.Printf("The channel has a length of : %d, and has a capability of: %d \n",len(c), cap(c))

	// Range and close
	// Close, this keyword closes the channel, we always need to close channel after consume them
	close(c)

	//c <- "Fourth Message" // This generates a runtime error. "panic: send on closed channel"

	// Range in channels, before iterate a channel we must close it
	for message := range c {
		fmt.Println(message)
	}
	// Select
	firstEmail := make(chan string)
	secondEmail := make(chan string)

	go message("First Message", firstEmail)
	go message("Second Message", secondEmail)

	for i := 0; i < 2; i++ {
		select {
		case m1 := <- firstEmail:
			fmt.Println("Email received from first channel", m1)
		case m2 := <- secondEmail:
			fmt.Println("Email received from first channel", m2)
		}
	}
}