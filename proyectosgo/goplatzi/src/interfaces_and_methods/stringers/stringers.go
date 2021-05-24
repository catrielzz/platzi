package main

import "fmt"

type pc struct {
	ram int
	disk int
	brand string
}

func (myPC pc) String() string {
	return fmt.Sprintf("PC SPECS:%d RAM, %d Disk, Brand: %s", myPC.ram, myPC.disk, myPC.brand)
}
func main(){
	myPc := pc{ram: 16, disk: 256, brand: "Aorus"}
	fmt.Println(myPc)
}