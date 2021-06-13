package main

import "fmt"

// Task and task functions

type task struct {
	name string
	description string
	completed bool
}

func (task task) String() string {
	return fmt.Sprintf("Name of task: %s \nDescription of the task: %s \nTask is finished: %t", task.name, task.description, task.completed)
}

func (task *task) updateDescription(desc string){
	task.description = desc
}

func (task *task) updateName(name string){
	task.name = name
}

// TaskList and tasklist functions
type taskList struct {
	tasks []*task
}

func (taskList *taskList) addToList(tl *task){
	taskList.tasks = append(taskList.tasks, tl)
}

func (taskList *taskList) deleteFromList(index int){
	taskList.tasks = append(taskList.tasks[:index], taskList.tasks[index + 1:]...)
}

func main (){
	t := &task{
		name: "Study",
		description: "Study go on platzi on this week",
		completed: false,
	}

	t2 := &task{
		name: "Study",
		description: "Study python on platzi on this week",
		completed: false,
	}

	t3 := &task{
		name: "Study",
		description: "Study Java on platzi on this week",
		completed: false,
	}

	list := &taskList{
		tasks: []*task{
			t, t2,
		},
	}
	fmt.Println(len(list.tasks))
	list.addToList( &task{
		name: "Study",
		description: "Study Nodejs on platzi on this week",
		completed: false,
	})
	fmt.Println(len(list.tasks))
	list.addToList(t3)
	fmt.Println(len(list.tasks))
	list.deleteFromList(1)
	fmt.Println(len(list.tasks))
}
