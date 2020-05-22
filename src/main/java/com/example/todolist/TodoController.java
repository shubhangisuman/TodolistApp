package com.example.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class TodoController {
    @Autowired
    private TodoService todoService;
    @RequestMapping("/todo")
    public AllResponse getAllTodo(){
        return todoService.getAllTodo();
    }
    @RequestMapping(method = RequestMethod.POST,value = "/todo")
    public void addTodo(@RequestBody Todo todo){
        todoService.addTodo(todo);
    }
    @RequestMapping(method = RequestMethod.PUT,value="/todo/{id}")
    public AllResponse updateTodo(@PathVariable String id, @RequestBody Todo todo){
        return todoService.updateTodo(id, todo);
    }
    @RequestMapping(method = RequestMethod.DELETE,value="/todo/{id}")
    public AllResponse deleteTodo(@PathVariable String id){
        return todoService.deleteTodo(id);
    }
    @RequestMapping(method = RequestMethod.DELETE,value="/todo")
    public AllResponse deleteAllTodo(){
        return todoService.deleteAllTodo();
    }
}
