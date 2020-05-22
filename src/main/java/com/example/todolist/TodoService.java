package com.example.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;
    public AllResponse getAllTodo(){
        AllResponse allResponse = new AllResponse();
        List<Todo> todo = new ArrayList<>();
        todoRepository.findAll().forEach(todo::add);
        allResponse.setData(todo);
        allResponse.setSuccess(true);
        String msg;
        if(todo.isEmpty()){
            msg = "List is empty";
        }
        else{
            msg = "List found";
        }
        allResponse.setMessage(msg);
        return allResponse;
    }
    public void addTodo(Todo todo){
        todoRepository.save(todo);
    }

    public AllResponse updateTodo(String id, Todo todo) {
        AllResponse allResponse = new AllResponse();
        allResponse.setSuccess(todoRepository.findById(id).isPresent());
        String msg;
        if(todoRepository.findById(id).isPresent())
            msg=id+" Updated successfully";
        else
            msg="Updation is not possible.";
        allResponse.setMessage(msg);
        todoRepository.save(todo);
        List<Todo> todos = new ArrayList<>();
        todoRepository.findAll().forEach(todos::add);
        allResponse.setData(todos);
        return allResponse;
    }

    public AllResponse deleteTodo(String id) {
        AllResponse allResponse = new AllResponse();
        allResponse.setSuccess(todoRepository.findById(id).isPresent());
        String msg;
        if(todoRepository.findById(id).isPresent())
            msg=id+" Deleted successfully!";
        else
            msg="Deletion is not possible.";
        allResponse.setMessage(msg);
        todoRepository.deleteById(id);
        List<Todo> todo = new ArrayList<>();
        todoRepository.findAll().forEach(todo::add);
        allResponse.setData(todo);
        return allResponse;
    }

    public AllResponse deleteAllTodo() {
        AllResponse allResponse = new AllResponse();
        allResponse.setSuccess(true);
        String msg;
        List<Todo> todo = new ArrayList<>();
        todoRepository.findAll().forEach(todo::add);
        if(todo.isEmpty()){
            msg = "List is empty";
        }
        else{
            msg = "List Deleted";
        }
        todoRepository.deleteAll(todo);
        allResponse.setData(todo);
        allResponse.setMessage(msg);
        return allResponse;
    }
}
