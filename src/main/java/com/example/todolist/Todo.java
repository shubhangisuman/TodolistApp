package com.example.todolist;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Todo {
    @Id
    private String id;
    private String item;
    private Boolean isCompleted;
    public Todo(){

    }
    public Todo(String id, String item, Boolean isCompleted) {
        this.id = id;
        this.item = item;
        this.isCompleted = isCompleted;
    }
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public Boolean getCompleted() {
        return isCompleted;
    }

    public void setCompleted(Boolean completed) {
        isCompleted = completed;
    }
}
