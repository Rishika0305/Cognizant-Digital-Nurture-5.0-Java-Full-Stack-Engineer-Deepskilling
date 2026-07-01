package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository repository;

    // Constructor Injection
    public BookService(BookRepository repository) {
        this.repository = repository;
        System.out.println("Constructor Injection");
    }

    // Setter Injection
    public void setRepository(BookRepository repository) {
        this.repository = repository;
        System.out.println("Setter Injection");
    }

    public void displayService() {
        System.out.println("Book Service Created");
        repository.displayRepository();
    }
}